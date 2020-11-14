import { validation } from './validation';


export const validateAndSendUserData = () => {

    const form = document.querySelector(".registration-form");

    form.addEventListener("submit", (e) => {

        e.preventDefault();     
        validation(e.target) 
        
        fetch("http://localhost:8080/api/registration", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: form.querySelector(".name").value,
                    surname: form.querySelector(".surname").value,
                    email: form.querySelector(".email").value,
                    password: form.querySelector(".password").value,            
                }
            })
        }) 
    })

}
    
   

