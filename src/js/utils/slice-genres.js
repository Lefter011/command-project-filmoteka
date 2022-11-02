export function sliceGenres(genres) { 
    
    if (genres.length < 3) {
        
        return genres
    } else {
        return [...genres.slice(0, 3), "Other"];
        
    }
};
