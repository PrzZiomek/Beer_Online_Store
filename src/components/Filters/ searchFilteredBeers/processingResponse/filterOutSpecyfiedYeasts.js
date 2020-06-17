

export const filterOutSpecyfiedYeasts = (value) => (beers) => 
        value === "dowolne" ? beers : beers.filter(beer => beer.ingredients.yeast === value);
