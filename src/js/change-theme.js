const darkThemeBtn = document.querySelector('.toggle-darktheme-btn');
const header = document.querySelector('.header');

darkThemeBtn.addEventListener('click', () => {
  console.log('click');
  if (document.body.classList.contains('darkTheme')) {
    onLigthTheme();
  } else {
    onDarkTheme();
  }
});

function onLigthTheme() {
  header.classList.remove('headerDark');
  document.body.classList.remove('darkTheme');
  darkThemeBtn.textContent = '🌙';
  localStorage.theme = 'ligth';
}

function onDarkTheme() {
  header.classList.add('headerDark');
  document.body.classList.add('darkTheme');
  darkThemeBtn.textContent = '🔆';
  localStorage.theme = 'darkTheme';
}

if (localStorage.theme === 'darkTheme') {
  onDarkTheme();
}
