import { store } from "../../manageState/store";
import { removePrevievCartModal } from "../toManipulateDOM/removePrevievCartModal";
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createFavoriteCart } from "./createFavoriteCart";



export const FavoriteCart = () => {

    const area = document.querySelector("main");
    const favoriteContent = store.getState().reducerToFavorite;

    clearContentOf(area);
  //  removePrevievCartModal();

    createFavoriteCart(favoriteContent)
}

                

