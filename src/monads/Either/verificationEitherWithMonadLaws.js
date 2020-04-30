import  Either  from './Either';

const log = console.log;

/* Verification monad Either by using Monad Laws, according to mathematical Theory of Category.  */


/*
 ASSOCIATIVE LAW

Monad are monoids, therefore it doesn't matter in what order the actions performed or
they are composed, because always give the same result.
*/



log( (Either(() => 2) + Either(() => 3)) + 1 === 1 + Either(() => 5) );   // true
log(  Either(() => 2) + (Either(() => 3) + 1) === 1 + Either(() => 5) );   // true
log( (Either(() => 2) + Either(() => 3)) + 1 );  // 6
log( (Either(() => 2) + 1) + Either(() => 3)  ); // 6 

const add2 = (n) => Either(() => n + 2);
const multiply2 = (n) => Either(() => n * 2);

log( Either(() => 10).chain(add2).chain(multiply2).valueOf() );   // 24
log( Either(() => 10).chain(x => add2(x).chain(multiply2)).valueOf() );   // 24


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

log(Either(() => 100).chain(multiply2).valueOf() === multiply2(100).valueOf());  // true





/*
 Right identity

If monad with value chain with the same type of monad, that after flatten this value
will be unchanged.
*/

log(Either(() => 100).chain((x) => Either(() => x)).valueOf() === Either(() => 100).valueOf());    // true

