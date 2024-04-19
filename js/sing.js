let name = document.querySelector('#login');
let password = document.querySelector('#Password');
let submit = document.querySelector('#submit');

let users = {};

function User(login, Password){
    this.name = login;
    this.password = Password;
}

function createId(users){
    return Object.keys(users).length;
}

submit.addEventListener('click', () =>{
    const nameUser = name.value;
    const passwordUser = password.value;

    const user = new User(nameUser, passwordUser)

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);
})

