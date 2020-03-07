
export const doFetch = async () => {

    const res = await fetch("https://api.punkapi.com/v2/beers?per_page=60");
    const beers = await res.json();

    return beers;
    }

   