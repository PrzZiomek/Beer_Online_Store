
export const includeNumber = (text) => [...text].some(x => x.match(/\d+/g));

export const checkIfIncludesNumb = (text) =>{ 
    if(includeNumber(text)){
     throw new Error("nie moze zawierać cyfry");
    } else{
        return text;
    } 
};

export const checkIfIsTooBrief = (text) => {
    if(text.length < 3){
        throw new Error("minimum 3 znaki");
    } else{
        return text;
    } 
};

export const checkIfIsEmailCorrect = (text) => {
    if(text.includes(".") && text.includes("@")){
        return text;
    } else{
        throw new Error("niepoprawny e-mail");
    } 
};

export const checkPasswordLength = (text) => {
    if(text.length < 6){
        throw new Error("hasło musi mieć min. 6 znaków");
    } else{
        return text;
    } 
};

export const checkIfPasswordIsIdentical = (prevText) => (text) => {
    if(prevText !== text){
        throw new Error("hasło nie jest identyczne");
    } else{
        return text;
    } 
};


export const checkIfIsAgreement = (checked) => {
    if(!checked){
        throw new Error("musisz wyrazić zgodę");
    } 
};
