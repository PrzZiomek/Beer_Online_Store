import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createTitle } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createPrevievOfCartContent } from "./componentsOfCartPreviev/previevOfCartContent";
import { previevOfActualBeer } from "./componentsOfCartPreviev/previevActualBeer";



 export const shoppingCartStatementAndPreviev = (cartContent) => (beer) =>
                    compose(
                        createTitle("statement")("Dodałeś do koszyka!"),
                        previevOfActualBeer(beer),
                        createPrevievOfCartContent(cartContent)
                    )(createDiv("cart-previev")); 