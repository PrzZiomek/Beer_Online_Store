import { createLoginWindow } from './createLoginWindow';



const openLoginWindow = () => {

    const liElement = document.querySelector("li.account");
    const area = document.querySelector("main");

    liElement.addEventListener("click", (e) => {
        e.preventDefault();
        area.appendChild(createLoginWindow());
    })
};


openLoginWindow();