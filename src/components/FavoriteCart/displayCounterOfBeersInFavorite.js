import { store } from "../../manageState/store";



export const displayCounterOfBeersInCart = () => {

    const FavoriteContent = store.getState().reducerToFavorite;
    const beerAmount = FavoriteContent.length;
    const linkToFavorite = document.querySelector("li.favorite");

    linkToFavorite.setAttribute("beerAmount", beerAmount.toString())
}