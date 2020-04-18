import { Right } from "./Right";
import { Left } from "./Left";



 const Either = (f) => {

                try {
                    let res = f();
                    return Right(res);
                } catch (e) {
                    return Left(e);
                }
            }



Either.of = Either;


export default Either;