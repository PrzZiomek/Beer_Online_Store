
const includeNumber = (text) => [...text].some(x => x.match(/\d+/g));

export const checkIfIncludesNumb = (text) =>{ 
    if(includeNumber(text)){
     throw Error("nie moze zawierać cyfry")
    } else{
        return text;
    } 
};

export const checkIfIsTooBrief = (text) => {
    if(text.length < 3){
        throw Error("minimum 3 znaki");
    } else{
        return text;
    } 
};

export const checkIfIsEmailCorrect = (text) => {
    if(text.includes(".") && text.includes("@")){
        return text;
    } else{
        throw Error("niepoprawny e-mail");
    } 
};

export const checkPasswordLength = (text) => {
    if(text.length < 6){
        throw Error("hasło musi mieć min. 6 znaków");
    } else{
        return text;
    } 
};

export const checkIfPasswordIsIdentical = (prevText) => (text) => {
    if(prevText !== text){
        throw Error("hasło nie jest identyczne");
    } else{
        return text;
    } 
};


export const checkIfIsAgreement = (checked) => {
    if(!checked){
        throw Error("musisz wyrazić zgodę");
    } 
};
