import { validation } from './validation';
import { store } from '../../../manageState/store';


export const validateAndSendUserData = () => {

    const form = document.querySelector(".registration-form");
    const { token } = store.getState().reducerToResponseForJwt.items;


    form.addEventListener("submit", (e) => {

        e.preventDefault();     
        validation(e.target) 
        
        fetch("http://localhost:8080/api/registration", {
            method: "POST",
            headers:{
                "Cookie": "registered=true", 
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
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
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch(err => console.log(err))

    })
}    
   

