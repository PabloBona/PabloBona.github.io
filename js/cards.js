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

export { cardTemplate, modalCardTemplate };
