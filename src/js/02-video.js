import  Player  from "@vimeo/player";
import _ from "lodash";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


// getting timer from local storage
player.on('play',()=> {
   const seconds = localStorage.getItem('timer');
   player.setCurrentTime(seconds)
});

// setting timer to local storage
player.on('pause',()=> {
    player.getCurrentTime().then((seconds)=> {
        localStorage.setItem('timer',seconds)
    }).catch((error)=> {
        console.error(error.message)
    });
});
player.on('seeking',()=>{
    player.getCurrentTime().then((seconds)=> {
       localStorage.setItem('timer',seconds)
    })
});
player.on('timeupdate',_.throttle(()=>{
    player.getCurrentTime().then((seconds)=> {
       localStorage.setItem('timer',seconds);
    })
},1500));