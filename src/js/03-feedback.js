import _ from "lodash";

const STORAGE_KEY = "feedback-form-state";
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const submit = document.querySelector('.feedback-form button');

class Data{
    constructor(user, setMessage){
        this.user = user,
        this.setMessage = setMessage
    }
}


submit.addEventListener('click',_.throttle((e)=>{
    e.preventDefault();
    const data = new Data(email.value, message.value)
    console.log(data);
},500))
