export function getGenresName(movieID) {
    const genresID = JSON.parse(localStorage.getItem('genres'));
    return movieID.reduce((acc, item) => {
        const findGenre = genresID.find(el => Number(el.id) === Number(item));
        return findGenre ? [...acc, findGenre.name] : acc;
    }, []);
}