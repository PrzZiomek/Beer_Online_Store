import { Just } from './Just';
import { Nothing } from './Nothing';



 export const MaybeOf = (v) => 
                v === null ||
                v === undefined ||
                v.isNothing ? Nothing(v) : Just(v);
