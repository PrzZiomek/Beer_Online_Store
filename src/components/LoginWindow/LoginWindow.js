import { openLoginWindow } from './openLoginWindow';



const LoginWindow = () => {

    const liElement = document.querySelector("li.account");

    liElement.addEventListener("click", openLoginWindow )
};



LoginWindow();