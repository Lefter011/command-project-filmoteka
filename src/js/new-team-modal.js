import teamArray from '../JSON/team-modal.json';

const refs = {
  openTeamModal: document.querySelector('[data-new-modal-open]'),
  closeTeamModal: document.querySelector('[data-new-modal-close]'),
  teamBackdrop: document.querySelector('.new-footer__modal-backdrop'),
  teamModal: document.querySelector('[data-new-modal]'),
  body: document.querySelector('body'),
  teamList: document.querySelector('.footer__team-list'),
  memberCard: document.querySelector('.footer__member-card'),
};

(() => {
  refs.openTeamModal.addEventListener('click', toggleTeamModal);
  refs.closeTeamModal.addEventListener('click', toggleTeamModal);
  refs.teamBackdrop.addEventListener('click', backdropClick);

  function toggleTeamModal() {
    refs.teamModal.classList.toggle('visually-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function backdropClick(evt) {
    const target = evt.target.className;
    if (target === 'new-footer__modal-backdrop') {
      refs.teamModal.classList.add('visually-hidden');
    }
  }

  if (refs.teamModal) {
    refs.teamList.addEventListener('click', onTeamMemberClick);
    function onTeamMemberClick(evt) {
      evt.preventDefault();
      refs.memberCard.innerHTML = '';
      try {
        const memberId = evt.target.parentNode.dataset.id;
        const memberData = teamArray.find(member => member.id === memberId);
        const markup = createCentralCardMarkup(memberData);
        refs.memberCard.insertAdjacentHTML('beforeend', markup);
      } catch (error) {
        console.log(error);
      }
    }
  }
})();

(() => {
  const markup = createTeamMarkup(teamArray);
  refs.teamList.insertAdjacentHTML('beforeend', markup);
})();

///////////////////////////////////////

function createTeamMarkup(team) {
  return team
    .map(({ username, image, id }) => {
      return `<li class="footer__team-item" data-id=${id}>
  <img src="${image}" alt="image of a member" class="footer__team-img" />
  <p class="footer__team-name">${username}</p>
</li>`;
    })
    .join('');
}

function createCentralCardMarkup(member) {
  const { username, role, image, github, linkedin, facebook, id } = member;
  return `<div class="footer__member-wrap" data-id=${id}>
  <img src="${image}" alt="image of a member" class="footer__member-img" />
  <p class="footer__member-name">${username}</p>
  <p class="footer__member-role">${role}</p>
  <ul class="footer__soc-list">
    <li class="footer__soc-item">
      <a href="${github}" class="footer__soc-link">
        <svg>
          <use href=""></use>
        </svg>
      </a>
    </li>
    <li class="footer__soc-item">
      <a href="${linkedin}" class="footer__soc-link">
        <svg>
          <use href=""></use>
        </svg>
      </a>
    </li>
    <li class="footer__soc-item">
      <a href="${facebook}" class="footer__soc-link">
        <svg>
          <use href=""></use>
        </svg>
      </a>
    </li>
  </ul>
</div>`;
}
///////////////////////////////////////
