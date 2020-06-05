import { pipeline as compose } from '../../pipeline';
import { createDiv, createSpanElem, createText } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createForm, createBtn, createOption, createSelect, createCheckboxInput } from '../RegistrationForm/handlersToCreateForm';
import { degreeOfColorOption } from './componentsOfFilters/degreeOfColorOption';
import { typesOfYeast } from './componentsOfFilters/typesOfYeast';


export const createFilterOptions = () => compose( 
                                              degreeOfColorOption,
                                              typesOfYeast,
                                              createBtn("send")("szukaj")
                                          )(createForm("filterOptions-form"))



