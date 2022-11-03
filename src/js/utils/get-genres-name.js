export function getGenresName(movieGenreID) {
  const genresID = JSON.parse(localStorage.getItem('genres'));
  if (!movieGenreID) {
    return ['Genre not available'];
  }
  return movieGenreID.reduce((acc, item) => {
    const findGenre = genresID.find(el => Number(el.id) === Number(item));
    return findGenre ? [...acc, findGenre.name] : acc;
  }, []);
}
