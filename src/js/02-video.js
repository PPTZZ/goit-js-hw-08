import {Vimeo} from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

console.log(player);