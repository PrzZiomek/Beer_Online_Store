import {  coroutine } from '../getBeersFromAPI/coroutine';
import { fetchSuccessAction, fetchFailAction } from "../../manageState/actionCreators";
import { getJwt } from './getJwt';


export const createResponseJwt = () => {

   return (dispatch) => coroutine(function* (){

      try{
         const jwt = yield * getJwt()       
         if(jwt){ 
               dispatch(fetchSuccessAction("JWT", jwt));
         }
       }catch(err){
               dispatch(fetchFailAction("JWT", err))
     }     
   })
}





