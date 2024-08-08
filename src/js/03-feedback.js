import _ from "lodash";

const STORAGE_KEY = "feedback-form-state";
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const submit = document.querySelector('.feedback-form button');
const form = document.querySelector('.feedback-form');

class Data{
    constructor(user, setMessage){
        this.user = user,
        this.setMessage = setMessage
    }
}

const messageList = '<ul></ul>';
form.insertAdjacentHTML('afterend',messageList);

const newMessage = (e)=>{
    e.preventDefault();
    const data = new Data(email.value, message.value);
    const jsonData = JSON.stringify(data)

    localStorage.setItem(STORAGE_KEY,)
};

submit.addEventListener('click',_.throttle(newMessage,1500))
