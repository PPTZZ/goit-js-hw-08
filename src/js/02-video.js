import  Player  from "@vimeo/player";
import _ from "lodash";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setTime = ()=>{
    player.getCurrentTime().then((seconds)=> {
        localStorage.setItem('time',seconds)
    }).catch((error)=> {
        console.error(error.message)
    });
}


// getting timer from local storage
player.on('play',()=> {
   const seconds = localStorage.getItem('time');
   player.setCurrentTime(seconds)
});

// setting timer to local storage
player.on('pause',setTime);

player.on('seeking',setTime);

player.on('timeupdate',_.throttle(setTime,1500));