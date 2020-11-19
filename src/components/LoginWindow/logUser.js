import { validation } from '../RegistrationForm/validation/validation';



export const validateAndLogUser = (form) => {

 
    form.addEventListener("submit", (e) => {

        e.preventDefault();     
        validation(e.target) 
        
        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers:{
                "Cookie": "login=true", 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email: form.querySelector(".email").value,
                    password: form.querySelector(".password").value,            
                }
            })
        })
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch(err => console.log(err))
    })
}    