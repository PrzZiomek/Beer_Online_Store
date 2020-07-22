import { ifIncorrectNameFormat, ifIncorrectEmailFormat, ifIncorrectPasswordLength, ifNoIdenticalPassword, ifNoAgreement } from "./helpers/checkingFunctions";


export const matchValidationMessage = ({ 
    name,
    surname,
    email,
    password,
    passwordRepeated,
    acceptRegulations  
  }) => ({

    name: ifIncorrectNameFormat(name.value) && "imie musi mieć min. 2 litery",
    surname: ifIncorrectNameFormat(surname.value) && "nazwisko musi mieć min. 2 litery",
    email : ifIncorrectEmailFormat(email.value) && "nieprawidłowy format adresu e-mail",
    password: ifIncorrectPasswordLength(password.value) && "hasło musi zawierac wiecej niz 6 znaków",
    passwordRepeated: ifNoIdenticalPassword(passwordRepeated.value)(password.value) && 'musi być identyczne',
    acceptRegulations: ifNoAgreement(acceptRegulations.checked) && 'akceptacja regulaminu jest wymagana',

})