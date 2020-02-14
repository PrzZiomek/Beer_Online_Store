import { store } from "../../../manageState/store";
import { addToCartAction } from "../../../manageState/actionCreators";
import { openCartPreviev } from "./openCartPreviev";






export const addToCartAndOpenPreviev = (beer) => {

    store.dispatch(addToCartAction(beer));

    openCartPreviev(beer)
  
}

