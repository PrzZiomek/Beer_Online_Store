import { store } from "../manageState/store";
import { fetchBeginAction } from "../manageState/actionCreators";
import { createResponse } from "./getBeersFromAPI/responseCreator";
import { router } from "./router/router";
import { insertLoader } from './getBeersFromAPI/loader/loader';
import { createResponseJwt } from "./getJwtFromNode/responseCreator";



window.addEventListener("load", () => { 

    store.dispatch(fetchBeginAction("OFFER"));
    store.dispatch(fetchBeginAction("JWT"));

    store.dispatch(createResponse());
    store.dispatch(createResponseJwt());
 
    router(); 
    insertLoader();
  });

  

