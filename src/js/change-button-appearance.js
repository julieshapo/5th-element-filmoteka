
import { watched, queue } from './local-storage';


export function changeBtnAppearance(el, id) {
    //el - це елемент розмітки(кнопка по котрій був клік)
    
    //Константи лишити тут чи перенести в refs.js
    const btnWatched = document.querySelector('[data-movie="watched"]');
    const btnQueue = document.querySelector('[data-movie="queue"]');

    if (el === btnWatched) { //перевіряємо чи клік був по кнопці watched
        if (btnWatched.classList.contains('remove-watched-js')) 
        { //перевіряємо чи клас remove-watched-js вже є на кнопці
            if (watched.includes(id)) { //перевіряємо чи id фільму є в масиві watched
            btnWatched.classList.toggle('remove-watched-js');}
            btnWatched.classList.toggle('remove-watched-js');
            btnWatched.textContent = 'Add to watched';
        } else {
            btnWatched.classList.toggle('remove-watched-js');
            btnWatched.textContent = 'Remove watched';
        }
    } else if (el === btnQueue) {
        if (btnQueue.classList.contains('remove-queue-js')) {
            btnQueue.classList.toggle('remove-queue-js');
            btnQueue.textContent = 'Add to queue';
        } else {
            btnQueue.classList.toggle('remove-queue-js');
            btnQueue.textContent = 'Remove queue';
        }
        btnQueue.classList.toggle('remove-queue-js');
        btnQueue.textContent = 'Remove queue';
 }
}

//Одночасно з лоадером, який відображається під час завантажень
//Сьогодні хвилин за 20 мжна було-б домовитись про заливку на гітхаб функції після того перейду до стилів це мабуть перейде на завтра.І зможу до чогось підключатись.
