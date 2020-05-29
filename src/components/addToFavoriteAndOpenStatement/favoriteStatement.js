import { previevOfActualFavorBeer } from './previevOfActualFavorBeer';
import { pipeline as compose } from '../../pipeline';
import { createDiv, createTitle } from "../toManipulateDOM/basisHandlersToManipulateDOM";




export const favoriteStatement = (beer) => 
                compose(
                    createTitle("statement")("Dodałeś do ulubionych!"),
                    previevOfActualFavorBeer(beer),
                )(createDiv("actualFavoritePreviev")); 
