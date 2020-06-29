import { pipeline as compose } from '../../../pipeline';
import { createOption, createSelect } from '../../RegistrationForm/handlersToCreateForm';


export const typesOfYeast = (element) => {
     
    const selectElement = createSelect("filtersForm-yeasts")("yeasts");

        const wrapperDiv = compose( 
                    createOption("filter")("dowolne")("dowolne"),
                    createOption("filter")("Wyeast 1056 - American Ale™")("American Ale"),
                    createOption("filter")("Wyeast 1272 - American Ale II™")("American Ale II"),
                    createOption("filter")("Wyeast 3522 - Belgian Ardennes™")("Belgian Ardennes"),
                    createOption("filter")("Wyeast 3711 - French Saison™")("French Saison"),
                    createOption("filter")("Wyeast 2007 - Pilsen Lager™")("Pilsner Lager"),
                    createOption("filter")("Wyeast 3333 - German Wheat™")("German Wheat"),
                    createOption("filter")("Saflager S189")("Saflager"),
                    createOption("filter")("Wyeast 3638 - Bavarian Wheat™")("Bavarian Wheat"),
            )(selectElement)

    element.appendChild(wrapperDiv);
  return element;
}
