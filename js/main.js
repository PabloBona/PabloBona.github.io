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
    title: 'Tonic',
    isReversed: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>",
    workImg: './img/snapshoot_portfolio.png',
    workImgDesk: './img/desktop-snapshot.svg',
    details: ['Canopy', 'Back End Dev', '2015'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoURL: 'https://www.google.com',
    githubURL: 'https://www.github.com',
  },
  {
    title: 'Multi-Post Stories',
    isReversed: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>",
    workImg: './img/snapshoot-profesional.png',
    workImgDesk: './img/desktop-snapshot2.svg',
    details: ['Canopy', 'Back End Dev', '2015'],
    tags: ['HTML', 'Ruby', 'CSS', 'JavaScript'],
    demoURL: 'https://www.google.com',
    githubURL: 'https://www.github.com',
  },
  {
    title: 'Facebook 360',
    isReversed: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>",
    workImg: './img/snapshoot-portfolio.png',
    workImgDesk: './img/desktop-snapshot3.svg',
    details: ['Canopy', 'Back End Dev', '2015'],
    tags: ['HTML', 'Ruby', 'CSS', 'JavaScript'],
    demoURL: 'https://www.google.com',
    githubURL: 'https://www.github.com',
  },
  {
    title: 'Uber Navigation',
    isReversed: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    longDescription:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>",
    workImg: './img/snapshoot-portfolio2.png',
    workImgDesk: './img/desktop-snapshot4.svg',
    details: ['Uber', 'Back End Dev', '2015'],
    tags: ['HTML', 'Ruby', 'CSS', 'JavaScript'],
    demoURL: 'https://www.google.com',
    githubURL: 'https://www.github.com',
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

window.addEventListener('load', () => {
  const dataSaved = localStorage.getItem('contactFormData');

  if (dataSaved) {
    const data = JSON.parse(dataSaved);
    nameInput.value = data.name;
    emailInput.value = data.email;
    textInput.value = data.text;
  }
});
