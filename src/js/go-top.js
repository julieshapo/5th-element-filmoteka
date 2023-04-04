const goTopBtn = document.querySelector('.go-top');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  if (scrolled > fullHeight - windowHeight - 100) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50);
    setTimeout(goTop, 0);
  }
}
