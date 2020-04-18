import { Just } from './Just';
import { Nothing } from './Nothing';



 export const MaybeOf = (x) => 
                x === null ||
                x === undefined ||
                x.isNothing ? Nothing(x) : Just(x);
