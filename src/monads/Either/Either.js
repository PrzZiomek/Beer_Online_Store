import { Right } from "./Right";
import { Left } from "./Left";



export const Either = (f) => {

                try {
                    let res = f();
                    return Right(res);
                } catch (e) {
                    return Left(e);
                }
            }