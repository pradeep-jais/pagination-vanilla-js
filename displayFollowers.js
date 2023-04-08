const container = document.querySelector('.container');

const display = (followers) => {
  const followersList = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `<article class="card">
    <img src="${avatar_url}" alt="${login}-img"/>
    <h4>${login}</h4>
    <a class="btn" href="${html_url}">view profile</a>
    </article>`;
    })
    .join('');
  container.innerHTML = followersList;
};

export default display;
