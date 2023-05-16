export default function initMenu() {
  const menuButton = document.querySelector('.burguer-menu button');
  const mobileNav = document.querySelector('.nav');
  const mobileLinks = mobileNav.querySelectorAll('.nav-links a');
  const menuImage = document.querySelector('#myImage');

  function toggleMenuImage() {
    if (mobileNav.classList.contains('active')) {
      menuImage.src = 'img/icons/cancel.svg';
    } else {
      menuImage.src = './img/burguerMenu.svg';
    }
  }

  menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    toggleMenuImage();
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      toggleMenuImage();
    });
  });
}
