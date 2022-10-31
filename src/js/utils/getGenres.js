export function getGenres(genre_ids, maxAmount) {
  const json =
    '{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}';
  const allGenres = JSON.parse(json).genres;
  let genresArr = [];
  for (let i = 0; i < maxAmount && i < genre_ids.length; i += 1) {
    for (genre of allGenres) {
      if (genre_ids[i] === genre.id) {
        genresArr.push(genre.name);
      }
    }
  }
  if (genre_ids.length > maxAmount) {
    genresArr.splice(maxAmount - 1, 1, 'Other');
  }
  return genresArr.join(', ');
}
