// MatchTrail password reset page (/wachtwoord/). The reset e-mail's link goes through Supabase's
// verify endpoint and lands here with the recovery session in the URL hash (#access_token=...&type=recovery),
// or with #error_code=... when the link expired or was already used (e-mail scanners sometimes open
// links before the fan does). Only the publishable key is baked in at build time (scripts/pages-build.sh).
(function () {
  var URL_ = 'https://rutgdyltxhbswxvcvljf.supabase.co';
  var KEY = 'sb_publishable_fmL24fFmcfUbpzy0UiDHpg_AlOr_YZc';
  var $ = function (id) { return document.getElementById(id); };
  var show = function (id) { ['loading', 'set', 'done', 'ask'].forEach(function (x) { $(x).classList.toggle('hidden', x !== id); }); };

  var hash = new URLSearchParams(location.hash.replace(/^#/, ''));
  var linkError = hash.get('error_code') || hash.get('error');
  var client = window.supabase.createClient(URL_, KEY, { auth: { detectSessionInUrl: true, persistSession: true, flowType: 'implicit' } });

  function askForLink(why) {
    if (why) $('askWhy').textContent = why;
    show('ask');
  }

  $('ask').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = $('email').value.trim();
    var msg = $('askMsg');
    $('send').disabled = true;
    msg.className = 'msg'; msg.textContent = 'Versturen…';
    client.auth.resetPasswordForEmail(email, { redirectTo: location.origin + '/wachtwoord/' }).then(function (r) {
      $('send').disabled = false;
      if (r.error) {
        msg.className = 'msg bad';
        msg.textContent = /rate|seconds|too many/i.test(r.error.message) ? 'Even wachten: je kunt over een minuut opnieuw een link vragen.' : 'Dat lukte niet. Controleer je e-mailadres en probeer het opnieuw.';
        return;
      }
      msg.className = 'msg ok';
      msg.textContent = 'Verstuurd. Kijk in je mail (ook in je spam) en open de link binnen een uur.';
    });
  });

  $('toggle').addEventListener('click', function () {
    var hidden = $('pw1').type === 'password';
    $('pw1').type = $('pw2').type = hidden ? 'text' : 'password';
    $('toggle').textContent = hidden ? 'Wachtwoord verbergen' : 'Wachtwoord tonen';
  });

  $('set').addEventListener('submit', function (e) {
    e.preventDefault();
    var a = $('pw1').value, b = $('pw2').value, msg = $('setMsg');
    msg.className = 'msg bad';
    if (a.length < 8) { msg.textContent = 'Kies minstens 8 tekens.'; return; }
    if (a !== b) { msg.textContent = 'De twee wachtwoorden zijn niet gelijk.'; return; }
    $('save').disabled = true;
    msg.className = 'msg'; msg.textContent = 'Opslaan…';
    client.auth.updateUser({ password: a }).then(function (r) {
      $('save').disabled = false;
      if (r.error) {
        msg.className = 'msg bad';
        msg.textContent = /same|different/i.test(r.error.message) ? 'Kies een ander wachtwoord dan je vorige.' : /weak|short|character/i.test(r.error.message) ? 'Dit wachtwoord is te zwak. Kies een langer wachtwoord.' : 'Opslaan lukte niet. Vraag een nieuwe link aan en probeer het opnieuw.';
        return;
      }
      history.replaceState(null, '', location.pathname);
      // This page only exists to set the password: drop its own copy of the session (the app keeps its own).
      client.auth.signOut({ scope: 'local' });
      show('done');
    });
  });

  if (linkError) {
    history.replaceState(null, '', location.pathname);
    askForLink('Deze link werkt niet meer: hij is verlopen of al gebruikt. Vraag hieronder een nieuwe aan.');
    return;
  }
  if (hash.get('type') !== 'recovery' && !hash.get('access_token')) { askForLink(); return; }

  // The client reads the session out of the hash on start; wait for it.
  client.auth.getSession().then(function (r) {
    var session = r.data && r.data.session;
    if (!session) { askForLink('Deze link werkt niet meer: hij is verlopen of al gebruikt. Vraag hieronder een nieuwe aan.'); return; }
    $('for').textContent = 'Voor ' + (session.user && session.user.email ? session.user.email : 'je account') + '.';
    history.replaceState(null, '', location.pathname);
    show('set');
    $('pw1').focus();
  });
})();
