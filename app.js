import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

const heading = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  // get followers
  const followers = await fetchFollowers();
  heading.textContent = 'pagination';

  //  display followers
  //   displayFollowers(followers);
  //   displayFollowers(paginate(followers)[0]);

  // paginate
  pages = paginate(followers);
  setupUI();
};

btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index >= pages.length) index = 0;
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) index = pages.length - 1;
  }
  setupUI();
});

window.addEventListener('load', init);
