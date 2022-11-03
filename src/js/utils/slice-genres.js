export function sliceGenres(genres) { 
    
    if (genres.length < 4) {
        
        return genres
    } else {
        return [...genres.slice(0, 3), "Other"];
        
    }
};
