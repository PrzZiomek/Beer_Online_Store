import { store } from "../manageState/store";
import { fetchBeginAction } from "../manageState/actionCreators";
import { createResponse } from "./getBeersFromAPI/responseCreator";
import { router } from "./router/router";
import { insertLoader } from './getBeersFromAPI/loader/loader';



window.addEventListener("load", () => { 

    store.dispatch(fetchBeginAction());
    store.dispatch(createResponse());
 
    router(); 
    insertLoader();
  });

  

