import { routes } from "./routes";


export const resolveRoute = (route) => { 
   
        if(route.includes("opis")){  
            return routes()["/opis"]
        }
        else if(routes()[route]){
            return routes()[route]
        }    
 };