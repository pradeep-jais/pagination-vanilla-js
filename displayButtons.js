const displayButtons = (container, pages, activeIndex) => {
  const btns = pages.map((_, index) => {
    return `<button class="page-btn ${
      activeIndex === index ? 'active-btn' : ''
    }" data-index="${index}">${index + 1}</button>`;
  });
  btns.push(`<button class="next-btn" >next</button>`);
  btns.unshift(`<button class="prev-btn" >prev</button>`);
  container.innerHTML = btns.join('');
};

export default displayButtons;
