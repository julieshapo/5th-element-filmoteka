import { setQueueLS } from "./local-storage";

const queueBtn = document.querySelector('.js-queue');
queueBtn.addEventListener('click', ()=>console.log('click'))
setQueueLS();