// Demo UI gate only. Static hosting does not provide server-side authorization.
(() => {
  const screen = document.getElementById('loginScreen');
  const catalog = document.getElementById('catalog');
  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const error = document.getElementById('loginError');

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (username.value !== 'fmezam' || password.value !== '11') {
      error.textContent = 'Usuario o contrase?a incorrectos.';
      password.value = '';
      password.focus();
      return;
    }
    form.reset();
    error.textContent = '';
    screen.hidden = true;
    catalog.hidden = false;
    // Recalculate field arrows now that the catalog has a visible width.
    window.dispatchEvent(new Event('resize'));
    document.getElementById('logout').focus();
  });

  document.getElementById('logout').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('open');
    catalog.hidden = true;
    screen.hidden = false;
    form.reset();
    error.textContent = '';
    username.focus();
  });
})();
