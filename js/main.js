import initMenu from './menu.js';
import cardData from './cardData.js';
import { cardTemplate, modalCardTemplate } from './cards.js';

const worksContainer = document.querySelector('#portfolio');
const modalContainer = document.querySelector('#modal-container');

// initialize menu component
initMenu();

// initialize cards component and attach Event Listeners
cardData.forEach((data, i) => {
  worksContainer.innerHTML += cardTemplate(data, i);
});

const openModalButtons = document.querySelectorAll('.open-project-modal');

openModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const modalId = button.dataset.contentId;
    modalContainer.innerHTML = modalCardTemplate(cardData[modalId]);
    modalContainer.classList.add('open');

    const closeModalButton = modalContainer.querySelector('.close-modal');
    closeModalButton.addEventListener('click', () => {
      modalContainer.classList.remove('open');
    });
  });
});
