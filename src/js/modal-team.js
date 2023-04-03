import { BasicLightBox } from 'basiclightbox';

const refs = {
  openTeamModalBtn: document.querySelector('[data-modal-open]'),
  closeTeamModalBtn: document.querySelector('[data-modal-close]'),
  teamModal: document.querySelector('[data-modal]'),
  teamList: document.querySelector('.team-list'),
  body: document.querySelector('body'),
  backdrop: document.querySelector('.backdrop-team'),
};

const teamArray = [
  {
    name: 'Juliya <br> Shapovalenko',
    position: 'Team Leader',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/julia2.jpg?raw=true',
    github: 'https://github.com/julieshapo',
  },
  {
    name: 'Ruslan <br> Podosinovikov',
    position: 'Scrum Master',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/ruslan2.jpg?raw=true',
    github: 'https://github.com/nikopolzp',
  },
  {
    name: 'Andriy <br> Savon',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/andrew.jpg?raw=true',
    github: 'https://github.com/stark1269',
  },
  {
    name: 'Dmytro <br /> Melnyk',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/Dmytro.jpg?raw=true',
    github: 'https://github.com/Melnyk675',
  },
  {
    name: 'Vladyslav <br /> Matsala',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/vladyslav.jpg?raw=true',
    github: 'https://github.com/mentallaboratories',
  },
  {
    name: 'Igor <br> Gromadskiy',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igoor.jpg?raw=true',
    github: 'https://github.com/IG00RA',
  },
  {
    name: 'Denys <br> Kondratenko',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/denys2.jpg?raw=true',
    github: 'https://github.com/Denys-Kondratenko',
  },
  {
    name: 'Kateryna <br> Verveda',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/katya.jpg?raw=true',
    github: 'https://github.com/katushka211',
  },
  {
    name: 'Volodymyr <br> Zabiyaka',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/Volodymyr.jpg?raw=true',
    github: 'https://github.com/VolZa',
  },
  {
    name: 'Yaroslav <br> Marinich',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/yaroslav.jpg?raw=true',
    github: 'https://github.com/Yaroslav-Marinich',
  },
  {
    name: 'Anastasia <br> Korotenko',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/anastasiya_2.jpg?raw=true',
    github: 'https://github.com/Anastasiako6',
  },
  {
    name: 'Vasyl <br> Kozhukh',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/vasyl2.jpg?raw=true',
    github: 'https://github.com/Kozhukh-Vasyl',
  },
  {
    name: 'Inna <br> Artysiuk',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/inna2.jpg?raw=true',
    github: 'https://github.com/Inna-Artysiuk',
  },
  {
    name: 'Igor <br> Kalchyn',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/KalchIgor',
  },
];
function createTeamGallery(array) {
  const markupTeam = array
    .map(
      item => `
  <li class="team-list-item">
    <img src="${item.photo}" alt="${item.position}" width="50" class="team-photo">
    <h2 class="team-name">${item.name}</h2>
    <p class="team-position">${item.position}</p>
    <div class="github-info">
        <a href="${item.github}" class="icon-link" target="_blank">
          <svg class="github" width="20" height="20" viewBox="0 0 35 35">
    <use xlink:href="./images/svg/symbol-defs.svg#github" />
    <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
</symbol>
    </svg>
        </a></div>
      
      </li>`
    )
    .join('');
  refs.teamList.insertAdjacentHTML('beforeend', markupTeam);
}

refs.openTeamModalBtn.addEventListener('click', openTeamModal);
refs.closeTeamModalBtn.addEventListener('click', closeTeamModal);

function openTeamModal() {
  refs.body.classList.add('modal-open');
  refs.teamModal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
}

function closeTeamModal() {
  refs.body.classList.remove('modal-open');
  refs.teamModal.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
}

// function toggleModal() {
//   document.body.classList.toggle('modal-open');
//   refs.teamModal.classList.toggle('is-hidden');
//   refs.body.classList.toggle('no-scroll');
// }

refs.openTeamModalBtn.addEventListener('click', onTeamBtnClick);
refs.body.addEventListener('keydown', onEscapeClick);
refs.backdrop.addEventListener('click', onBackdropClick);

function onTeamBtnClick(event) {
  refs.teamModal.classList.remove('visually-hidden');
  refs.teamList.innerHTML = '';
  createTeamGallery(teamArray);
}

function onEscapeClick(event) {
  if (event.code === 'Escape') {
    closeTeamModal();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeTeamModal();
  }
}
