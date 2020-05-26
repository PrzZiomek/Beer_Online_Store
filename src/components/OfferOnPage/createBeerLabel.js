import { pipeline as compose } from "../../pipeline";
import { createDiv, createImgElem, createSpanElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBtnAddToCartAndOpenPreviev } from "../toManipulateDOM/handlersToManipulateDOM";
import {  createLinkRedirectToDescription } from "./createLinkRedirectToDescription";



export const createBeerLabel = (beer) => compose(            
                                            createSpanElem("beerTitle")(beer.name),
                                            createImgElem("")("piwo")(beer.image_url),
                                            createText("price")(`${beer.abv} $`),
                                            createBtnAddToCartAndOpenPreviev("cartBtn")("koszyk")(beer),
                                            createLinkRedirectToDescription("")("opis")(beer),
                                         )(createDiv("beer-label"))
              
