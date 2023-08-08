const worksContainer = document.querySelector('#portfolio');
const modalContainer = document.querySelector('#modal-container');

function initMenu() {
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

const cardData = [
  {
    title: 'World Food Conference',
    isReversed: false,
    description:
      'World Food Conference is a webpage that focuses on promoting healthy food and the significance of maintaining a balanced diet. The Healthy Food Global Conference 2023 will cover a diverse range of topics related to healthy eating, such as nutrition, sustainable agriculture, and culinary practices.',
    longDescription:
      '<p>World Food Conference is a webpage that focuses on promoting healthy food and the significance of maintaining a balanced diet. The Healthy Food Global Conference 2023 will cover a diverse range of topics related to healthy eating, such as nutrition, sustainable agriculture, and culinary practices.</p>',
    workImg: './img/snapshoot_portfolio.png',
    workImgDesk: './img/snapshoot_portfolio.png',
    details: ['Conference', 'Health&Food', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoURL: 'https://pablobona.github.io/Portal-Capstone-Project/index.html',
    githubURL: 'https://github.com/PabloBona/Portal-Capstone-Project',
  },
  {
    title: 'Series Feedbacks',
    isReversed: true,
    description:
      'SeriesFeedback is an interactive website that provides a platform for users to engage in discussions and share their feedback on a wide range of TV shows.',
    longDescription:
      '<p>SeriesFeedback is an interactive website that provides a platform for users to engage in discussions and share their feedback on a wide range of TV shows</p>',
    workImg: './img/snapshoot_portfolio2.png',
    workImgDesk: './img/snapshoot_portfolio2.png',
    details: ['Fun', 'React', 'Interactive'],
    tags: ['React', 'Redux', 'Boostrap', 'JavaScript'],
    demoURL: 'https://pablobona.github.io/JavaScriptCapstone/dist/index.html',
    githubURL: 'https://github.com/PabloBona/JavaScriptCapstone',
  },
  {
    title: 'SpaceX Travels',
    isReversed: false,
    description:
      'In this project, I have built a web application for a company that provides commercial and scientific space travel services.',
    longDescription:
      '<p>In this project, I have built a web application for a company that provides commercial and scientific space travel services.</p>',
    workImg: './img/snapshoot_portfolio3.png',
    workImgDesk: './img/snapshoot_portfolio3.png',
    details: ['Space', 'Travels', '2023'],
    tags: ['React', 'Redux', 'Boostrap', 'JavaScript'],
    demoURL: 'https://spacextravels.netlify.app/',
    githubURL: 'https://github.com/PabloBona/space-travelers',
  },
  {
    title: 'CryptoKings',
    isReversed: true,
    description:
      'The application allows users to explore a list of cryptocurrency coins and view their details. Users can filter the coins based on specific parameters such as name or price. The application fetches real-time data from an open cryptocurrency API.',
    longDescription:
      '<p>The application allows users to explore a list of cryptocurrency coins and view their details. Users can filter the coins based on specific parameters such as name or price. The application fetches real-time data from an open cryptocurrency API.</p>',
    workImg: './img/snapshoot_portfolio4.png',
    workImgDesk: './img/snapshoot_portfolio4.png',
    details: ['Cryptos', 'React', 'Metrics'],
    tags: ['React', 'Redux', 'Boostrap', 'JavaScript'],
    demoURL: 'https://cryptos-kings.netlify.app/',
    githubURL: 'https://github.com/PabloBona/metrics-webapp-cryptoskings',
  },
];

/* prettier-ignore */
const cardTemplate = (data, workId) => `<div class="card${data.isReversed ? ' reverse' : ''}">
  <img src="${data.workImgDesk}" alt="${data.title} Navigation" />
  <div class="card-content">
    <h2>${data.title}</h2>
    <ul class="project-details">
    ${data.details
    .map((detail, k) => (k === 0 ? `<li><span class="company">${detail}</span></li>` : `<li>${detail}</li>`))
    .join('')}
    </ul>
    <div class="paragraph">
    <p>${data.description}</p>
    </div>
      <div class="card-details">
      <div class="details">
      <ul class="categories">
        ${data.tags.map((tag) => `<li><span class="tag">${tag}</span></li>`).join('')}
      </ul>
      </div>
      <div class="card-footer">
        <a href="#" class="button open-project-modal" data-content-id="${workId}">See project</a>
      </div>
      </div>
  </div>
</div>`;
/* prettier-ignore */
const modalCardTemplate = (data) => `
  <div class="modal-card">
    <div class="card">
    <div class="card-header">
    <button class="close-modal"><img id="myImage" src="./img/icons/modal-close.svg" alt="Close modal" /></button>
      <h2>${data.title}</h2>
      <ul class="project-details">
        ${data.details
    .map((detail, k) => (k === 0 ? `<li><span class="company">${detail}</span></li>` : `<li>${detail}</li>`))
    .join('')}
      </ul>
      </div>
      <img src="${data.workImgDesk}" alt="${data.title} Navigation" />
      <div class="card-content">
      <div class="paragraph">
      <p>${data.description}</p>
      </div>
      <div class="card-details">
      <div class="details">
      <ul class="categories">
        ${data.tags.map((tag) => `<li><span class="tag">${tag}</span></li>`).join('')}
      </ul>
      </div>
      <div class="card-footer">
        <a href="${data.demoURL}" class="button demo">See Live</a>
        <a href="${data.githubURL}" class="button github">See Source</a>
      </div>
      </div>
        </div>
      </div>
    </div>
  </div>
`;

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

// Contact Form
const contactForm = document.querySelector('#contact-form');
const errorMessage = contactForm.querySelector('.validationErrors');
const nameInput = contactForm.querySelector('#name');
const emailInput = contactForm.querySelector('#email');
const textInput = contactForm.querySelector('#message');

function isEmailLowerCase(email) {
  return email.toLowerCase() === email;
}

contactForm.addEventListener('submit', (e) => {
  if (isEmailLowerCase(emailInput.value)) {
    errorMessage.innerHTML = '';
  } else {
    e.preventDefault();
    // prettier-ignore
    errorMessage.innerHTML = '<p class="error">The email address should not contain uppercase letters.</p>';
  }
});

function saveToStorage() {
  const saveData = {
    name: nameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };

  localStorage.setItem('contactFormData', JSON.stringify(saveData));
}

nameInput.addEventListener('input', saveToStorage);
emailInput.addEventListener('input', saveToStorage);
textInput.addEventListener('input', saveToStorage);

document.addEventListener('DOMContentLoaded', () => {
  const dataSaved = localStorage.getItem('contactFormData');
  if (dataSaved) {
    const data = JSON.parse(dataSaved);
    nameInput.value = data.name;
    emailInput.value = data.email;
    textInput.value = data.text;
  }
});
