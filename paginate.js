const paginate = (followers) => {
  const itemsPerPage = 11;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from(
    { length: numberOfPages },
    (person, index) => {
      const start = index * itemsPerPage;
      return followers.slice(start, start + itemsPerPage);
    }
  );
  return newFollowers;
};

export default paginate;
