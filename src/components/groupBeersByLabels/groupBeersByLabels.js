import { pipeline as compose } from '../../pipeline';
import { groupObjectsBy, placeObjectValuesInArray } from "./morphisms"




export const groupBeersByLabels = compose(
                groupObjectsBy("name"),
                placeObjectValuesInArray
            )
