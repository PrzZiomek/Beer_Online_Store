import { pipeline as compose } from '../../pipeline';
import { createDiv, createSpanElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";



export const createFilterOptions = () => {

        const wrapperDiv = compose(            
                createSpanElem("beerTitle")(group[0].name),
                createText("price")(`${group[0].abv} $`),
                createButtonToIncreaseOrder("")(addToCartAndUpdatePreviev)(group[0]),
                createSpanElem("amount")(group.length),
                createButtonToDecreaseOrder("")(rmvFromCartAndUpdatePreviev)(group[0]),
                createSpanElem("sum")(`${sumOfGroup(group[0].abv, group.length)} $`)
            )(createDiv("beer-paramsPreviev"))

        element.appendChild(wrapperDiv);

    return element;
}


