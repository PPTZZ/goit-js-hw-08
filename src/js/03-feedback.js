import _ from "lodash";

const STORAGE_KEY = "feedback-form-state";
const email = document.getElementsByName('email');
const message = document.getElementsByName('message');
const submit = document.querySelector('.feedback-form button');

class Data{
    constructor(user, setMessage){
        this.user = user,
        this.setMessage = setMessage
    }
}


const data = new Data(email[0].value, message[0].value)



submit.addEventListener('click',_.throttle((e)=>{
    e.preventDefault();
    
    console.log(data);
},500))
