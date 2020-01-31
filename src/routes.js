import { OfferOnPage } from "./components/OfferOnPage";
import { showDescription } from "./components/showDescription";





const routes = () => ({

    "/" : () => setTimeout(OfferOnPage, 400),
    "/opis" : () => showDescription()
   
})





const resolveRoute = (route) => { 
    

   if(route.includes("opis")){  
        return routes()["/opis"]
    }
    else if(routes()[route]){
        return routes()[route]
    }
    
};



export const router = (e) => { 

            const url = window.location.hash.slice(1) || "/";
            const routeResolved = resolveRoute(url);

            routeResolved();
        }


window.addEventListener("hashchange",router);

