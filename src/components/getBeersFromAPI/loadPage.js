import { store } from "../../manageState/store";
import { fetchBegin } from "../../manageState/actionCreators";
import { createResponse } from "./responseCreator";
import { router } from "../../routes";



window.addEventListener("load", () => {

  store.dispatch(fetchBegin());
  store.dispatch(createResponse());

  router()
});
