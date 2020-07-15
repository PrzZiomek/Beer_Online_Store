import { incorrectNameFormat, incorrectEmailFormat, incorrectPasswordFormat, noIdenticalPassword, noAgreement } from "./checkingFunctions";

export const validationBeforeSubmit = (form) => {

        form.addEventListener("focusout", (e) =>{

            const emailInput = form.querySelector("input[type='email']");
            const passwordInput = form.querySelector("input.password");
            const passwordRepaetedInput = form.querySelector("input.passwordRepeated");
            const nameInput = form.querySelector("input.name");
            const surnameInput = form.querySelector("input.surname");
            const checkInput = form.querySelector("input.acceptRegulations");

         console.log(e.target);
            
            console.log("name",nameInput.className)
            console.log("sur",surnameInput.className)
            console.log("check",checkInput.className)
            //console.log("text",textInput.className)  


    
         const matchAlert = () => ({
             
                name: incorrectNameFormat(nameInput.value) && "imie musi",
                surname: incorrectNameFormat(surnameInput.value) && "nazwisko musi",
                email : incorrectEmailFormat(emailInput.value) && "nie ma @ !!!",
                password: incorrectPasswordLength(passwordInput.value) && "pasword zawierac wiecej niz dwa znaki!",
                passwordRepeated: noIdenticalPassword(passwordRepaetedInput.value) && 'musi byc takie same',
                acceptRegulations: noAgreement(checkInput.checked) && 'musi byc zaznaczone!',
            })

           alert(matchAlert()[e.target.className]) ;
      
        })
}



























  /*    
        
            if(e.target.className === emailInput.className){
                if(!emailInput.value.includes("@")){ alert("nie ma @ !!!")}
                }else 
                if(e.target.className === nameInput.className){
                    if(nameInput.value.length < 2){alert("text musi")}
                }else 
                if(e.target.className === surnameInput.className){
                    if(surnameInput.value.length < 2){alert("text musi")}
                }else
                if(e.target.className === passwordInput.className){
                     if(passwordInput.value.length < 2){alert("pasword zawierac wiecej niz dwa znaki!")}
                }else 
                if(e.target.className === checkInput.className){
                    if(!checkInput.checked){alert('musi byc zaznaczone!')}
                }else
                if(e.target.className === passwordRepaetedInput.className){
                    if(passwordRepaetedInput.value.length < 2){alert('musi byc takie same')}
                }
        */