import { store } from "../../../manageState/store";



export const displayCounterOfBeersInCart = () => {

    const cartContent = store.getState().reducerToCart;
    const beerAmount = cartContent.length;
    const linkToCart = document.querySelector("li.cart");

    linkToCart.setAttribute("beerAmount", beerAmount.toString())
}