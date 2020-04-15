import { store } from "../../manageState/store";
import { actualBeerAndCartPreviev } from "../AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev";
import { setCurrentBeerAction, addToCartAction, removeFromCartAction } from "../../manageState/actionCreators";
import { removePrevievCartModal } from "../toManipulateDOM/removePrevievCartModal";


export const dispatchAddToCart = (beer) => store.dispatch(addToCartAction(beer));

export const dispatchRemoveFromCart = (beer) => store.dispatch(removeFromCartAction(beer));

export const dispatchAddToFavour = () => console.log("addToFavour");

export const dispatchAddToCurrentBeer = (beer) => store.dispatch(setCurrentBeerAction(beer));

export const dispatchSetCurrentBeer = (beer) =>  store.dispatch(setCurrentBeerAction(beer))



export const addToCartAndUpdatePreviev = (beer) => {

    removePrevievCartModal();
    dispatchAddToCart(beer);
    actualBeerAndCartPreviev()
}


export const rmvFromCartAndUpdatePreviev = (beer) => {
    
    removePrevievCartModal();
    dispatchRemoveFromCart(beer);
    actualBeerAndCartPreviev()
}
