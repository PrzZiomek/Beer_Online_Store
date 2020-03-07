import { resolveRoute } from "./resolveRoute";


export const router = () => { 

    const url = window.location.hash.slice(1) || "/";
    const routeResolved = resolveRoute(url);

    routeResolved();
}


window.addEventListener("hashchange",router);