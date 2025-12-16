const movies = [
  {
    title: 'Resgate Impossível',
    genre: 'Ação',
    description: 'Um agente retorna do anonimato para salvar o mundo de um ataque digital global.',
    poster: 'linear-gradient(135deg, #1d4ed8, #0ea5e9)'
  },
  {
    title: 'Céu de Neon',
    genre: 'Sci-fi',
    description: 'Naves contrabandistas cruzam portais secretos para entregar tecnologia proibida.',
    poster: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
  },
  {
    title: 'Circuito Secreto',
    genre: 'Suspense',
    description: 'Uma hacker descobre um circuito que liga a internet ao passado e pode mudar a história.',
    poster: 'linear-gradient(135deg, #0f172a, #14b8a6)'
  },
  {
    title: 'Gran Finale',
    genre: 'Drama',
    description: 'A maior banda latina enfrenta seus medos no show derradeiro que marcará gerações.',
    poster: 'linear-gradient(135deg, #f97316, #ef4444)'
  }
];

let currentIndex = 0;
const genreEl = document.querySelector('#movie-genre');
const titleEl = document.querySelector('#movie-title');
const descriptionEl = document.querySelector('#movie-description');
const posterEl = document.querySelector('#movie-poster');
let intervalId;

function renderMovie(index) {
  const movie = movies[index];
  genreEl.textContent = movie.genre;
  titleEl.textContent = movie.title;
  descriptionEl.textContent = movie.description;
  posterEl.style.backgroundImage = movie.poster;
}

function nextMovie(step = 1) {
  currentIndex = (currentIndex + step + movies.length) % movies.length;
  renderMovie(currentIndex);
}

function startInterval() {
  intervalId = setInterval(() => nextMovie(1), 4500);
}

document.querySelector('#next-movie').addEventListener('click', () => {
  nextMovie(1);
  restartInterval();
});

document.querySelector('#prev-movie').addEventListener('click', () => {
  nextMovie(-1);
  restartInterval();
});

function restartInterval() {
  clearInterval(intervalId);
  startInterval();
}

renderMovie(currentIndex);
startInterval();

const copyButton = document.querySelector('#copy-link');
const referralInput = document.querySelector('#referral-link');
const feedback = document.querySelector('#copy-feedback');

copyButton.addEventListener('click', () => {
  referralInput.select();
  referralInput.setSelectionRange(0, referralInput.value.length);
  const success = document.execCommand('copy');
  feedback.textContent = success ? 'Link copiado! Compartilhe com seus amigos.' : 'Não foi possível copiar, tente manualmente.';
});
