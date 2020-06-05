import { pipeline as compose } from '../../../pipeline';
import { createDiv, createSpanElem, createText } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createBtn, createOption, createSelect, createCheckboxInput } from '../../RegistrationForm/handlersToCreateForm';
import { american_ale, american_ale_II, belgian_ardennes, french_saison, pilsen_lager, german_wheat  } from '../yeastNames';



export const typesOfYeast = (element) => {
     
    const selectElement = createSelect("filtersForm-yeasts")("yeasts");

        const wrapperDiv = compose( 
                    createOption("")(american_ale)("American Ale"),
                    createOption("")(american_ale_II)("American Ale II"),
                    createOption("")(belgian_ardennes)("Belgian Ardennes"),
                    createOption("")(french_saison)("French Saison"),
                    createOption("")(pilsen_lager)("Pilsner Lager"),
                    createOption("")(german_wheat)("German Wheat"),
            )(selectElement)

    element.appendChild(wrapperDiv);
  return element;
}


// createOption = (cl) => (value) => (textContent) => (element) => 