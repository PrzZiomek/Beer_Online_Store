import { store } from "../manageState/store";
import { addToOffer } from "../manageState/actionCreators";
import { router } from "../routes";



window.addEventListener("load", () => {

  fetch("https://api.punkapi.com/v2/beers")
    .then(result => result.json())
    .then(result => result.map(x => store.dispatch(addToOffer(x))));

    router()
});
