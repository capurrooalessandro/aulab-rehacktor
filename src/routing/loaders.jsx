export async function getAllGamesLoader() {
    const getYear = () => new Date().getFullYear();
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=${getYear()}-01-01,${getYear()}-12-31&page_size=30`);
    const json = await promise.json();
    return json.results;
}

export async function getAllGenres() {
    const promise = await fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json.results;
}

export async function getSelectedGenre({ params }) {
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}

export async function getGameDetails({ params }) {
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    //console.log(json);
    
    return json;
}

export async function getSearchedGames({ params }) {
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`);
    const json = await promise.json();
    return json.results;
}