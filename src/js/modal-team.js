import { BasicLightBox } from 'basiclightbox';

const refs = {
  openTeamModalBtn: document.querySelector('[data-modal-open]'),
  closeTeamModalBtn: document.querySelector('[data-modal-close]'),
  teamModal: document.querySelector('[data-modal]'),
  teamList: document.querySelector('.team-list'),
};

const teamArray = [
  {
    name: 'Juliya <br> Shapovalenko',
    position: 'Team Leader',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/julieshapo',
  },
  {
    name: 'Ruslan <br> Podosinovikov',
    position: 'Scrum Master',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/nikopolzp',
  },
  {
    name: 'Andriy <br> Savon',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
  },
  {
    name: 'Dmytro <br /> Melnyk',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/Melnyk675',
  },
  {
    name: 'Vladyslav',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/mentallaboratories',
  },
  {
    name: 'Igor <br> Gromadskiy',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/IG00RA',
  },
  {
    name: 'Denys <br> Kondratenko',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/Denys-Kondratenko',
  },
  {
    name: 'Anastasia <br> Korotenko',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/Anastasiako6',
  },
  {
    name: 'Yaroslav <br> Marinich',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/Yaroslav-Marinich',
  },
  {
    name: 'Kateryna <br> Verveda',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/katushka211',
  },
  {
    name: 'Volodymyr <br> Zabiyaka',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/VolZa',
  },
  {
    name: 'Inna <br> Artysiuk',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/Inna-Artysiuk',
  },
  {
    name: 'Vasyl <br> Kozhukh',
    position: 'Developer',
    photo:
      'https://github.com/julieshapo/5th-element-filmoteka/blob/main/src/images/team/igor.jpg?raw=true',
    github: 'https://github.com/Kozhukh-Vasyl',
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
      <div>
        <a href="${item.github}">
          <svg width="20" height="20">
            <use href="../images/svg/symbol-defs.svg#icon-search"></use>
          </svg>
        </a>
      </div>
      </li>`
    )
    .join('');
  refs.teamList.insertAdjacentHTML('beforeend', markupTeam);
}

refs.openTeamModalBtn.addEventListener('click', toggleModal);
refs.closeTeamModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.teamModal.classList.toggle('is-hidden');
}

refs.openTeamModalBtn.addEventListener('click', onTeamBtnClick);

function onTeamBtnClick(event) {
  refs.teamModal.classList.remove('visually-hidden');
  refs.teamList.innerHTML = '';
  createTeamGallery(teamArray);
}
