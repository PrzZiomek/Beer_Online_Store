import { Right } from "./Right";
import { Left } from "./Left";



 const Either = (fn) => {

                try {
                    let res = fn();
                    return Right(res);
                } catch (e) {
                    return Left(e);
                }
            }



Either.of = Either;


export default Either;