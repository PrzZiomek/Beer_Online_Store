

export const infoAboutPassword = () => { 
    
    const passwordInput = document.querySelector(".password");
    const info = document.querySelector(".withInfo")

    passwordInput.addEventListener('focus', () => info.style.display = "block" );
    passwordInput.addEventListener('change', () => info.style.display = "none" );

  }

 