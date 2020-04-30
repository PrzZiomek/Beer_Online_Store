import { Maybe } from './Maybe';

const log = console.log;

/* Verification monad Maybe by using Monad Laws, according to mathematical Theory of Category.  */


/*
 ASSOCIATIVE LAW

Monad are monoids, therefore it doesn't matter in what order the actions performed or
they are composed, because always give the same result.
*/



log( (Maybe.of(2) + Maybe.of(3)) + 1 === 1 + Maybe.of(5) );   // true
log(  Maybe.of(2) + (Maybe.of(3) + 1) === 1 + Maybe.of(5) );   // true
log( (Maybe.of(2) + Maybe.of(3)) + 1 );  // 6
log( (Maybe.of(2) + 1) + Maybe.of(3)  ); // 6 

const add2 = (n) => Maybe.of(n + 2);
const multiply2 = (n) => Maybe.of(n * 2);

log( Maybe.of(10).chain(add2).chain(multiply2).valueOf() );   // 24
log( Maybe.of(10).chain(x => add2(x).chain(multiply2)).valueOf() );   // 24


/*
 THE IDENTITY LAW

For every type (i.e. string, boolean, number) exist a function that maps this type to
itself (in the same category).
*/

/*
Left identity

Monad with a value that chain function, return the same result as this function that 
takes the same type of value and returns the same type of monad.
*/

log(Maybe.of(100).chain(multiply2).valueOf() === multiply2(100).valueOf());  // true

/*
 Right identity

If monad with value chain with the same type of monad, that after flatten this value
will be unchanged.
*/

log(Maybe.of(100).chain(Maybe.of).valueOf() === Maybe.of(100).valueOf());    // true

