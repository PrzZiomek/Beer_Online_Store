import { options } from '../../urlsToApi';


export const chosenFilterPromise = ({value}) => fetch(`https://api.punkapi.com/v2/beers?${options()[value]}`)
                                                    .then(res => res.json());
