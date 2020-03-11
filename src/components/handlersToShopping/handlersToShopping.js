import { store } from "../../manageState/store";
import { actualBeerAndCartPreviev } from "../addToCartAndOpenPreviev/openCartStatement";
import { setCurrentBeerAction, addToCartAction, removeFromCartAction} from "../../manageState/actionCreators";
import { removePrevievCartModal } from "../toManipulateDOM/removePrevievCartModal";


export const addToCart = (beer) => store.dispatch(addToCartAction(beer));

export const removeFromCart = (beer) => console.log("removeFromCart");

export const addToFavour = () => console.log("addToFavour");

export const addToCurrentBeer = (beer) => store.dispatch(setCurrentBeerAction(beer));

export const setCurrentBeer = (beer) =>  store.dispatch(setCurrentBeerAction(beer))



export const addToCartAndUpdatePreviev = (beer) => {

    removePrevievCartModal();
    addToCart(beer);
    actualBeerAndCartPreviev()
}


export const rmvFromCartAndUpdatePreviev = (beer) => {
    
    removePrevievCartModal();
    removeFromCart(beer);
    actualBeerAndCartPreviev()
}
