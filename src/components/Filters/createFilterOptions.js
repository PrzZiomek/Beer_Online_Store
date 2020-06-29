import { pipeline as compose } from '../../pipeline';
import { createForm, createBtn } from '../RegistrationForm/handlersToCreateForm';
import { degreeOfColorOption } from './componentsOfFilters/degreeOfColorOption';
import { typesOfYeast } from './componentsOfFilters/typesOfYeast';



export const createFilterOptions = () => compose( 
                                              degreeOfColorOption,
                                              typesOfYeast,
                                              createBtn("send")("szukaj")
                                          )(createForm("filterOptions-form"))



