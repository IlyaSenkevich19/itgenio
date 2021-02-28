export const task2 = () => {
    const name = document.querySelector('.name');
    const promptName = prompt('Введите свое Имя');
    name.innerHTML = promptName;

    const lastname = document.querySelector('.lastName');
    const promptLastname = prompt('Введите свою Фамилию');
    lastname.innerHTML = promptLastname;

   const birthday = document.querySelector('.birthday');
   const promptBirthday = prompt('Введите свою Дату Рождения');
   birthday.innerHTML = promptBirthday;

   const phoneNumber = document.querySelector('.phoneNumber');
   const promptPhoneNumber = prompt('Введите свой номер телефона');
   phoneNumber.innerHTML = promptPhoneNumber;

   const email = document.querySelector('.email');
   const promptEmail = prompt('Введите свой email');
   email.innerHTML = promptEmail;
};