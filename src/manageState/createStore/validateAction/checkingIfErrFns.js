export const errIfIsNotObject = (action) =>{ 
        if (!action || typeof action !== "object" || Array.isArray(action)){
        throw "Action musi być obiektem!";
    }
}

export const errIfIsHasNoType = ({ type }) => {
        if (typeof type === "undefined") {
            throw "Action musi mieć typ!";
        }
}