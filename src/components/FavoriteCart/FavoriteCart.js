import { store } from "../../manageState/store";
import { removePrevievFavorModal } from '../toManipulateDOM/removeModal/removePrevievFavorModal';
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createFavoriteCart } from "./createFavoriteCart";



export const FavoriteCart = () => {

    const area = document.querySelector("main");
    const favoriteContent = store.getState().reducerToFavorite;

    clearContentOf(area);
    removePrevievFavorModal()
    createFavoriteCart(favoriteContent)
}

                

