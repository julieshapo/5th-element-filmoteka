
// import { watched, queue } from './local-storage';
// //Функція робить кнопку недоступною якщо додаєм фільм який вже є в масиві watched або queue
// //або хочемо видалити фільм якого немає в масиві watched або queue  (і навпаки) 
// export function btnSetArtibute(el, id) { //el - це елемент розмітки(кнопка по котрій був клік)
//     if (el === btnWatchedEl) { //робота з watched; 
//         if (watched.includes(id)) { //якщо id фільму є в масиві watched:
//             //перевіряємо чи на кнопці є клас remove-watched-js  
//             if (btnWatchedEl.classList.contains('remove-watched-js')) { //кнопка "Remove watched"
//                 btnWatchedEl.setAttribute("disabled", false); //можна видаляти (кнопка активна)
//             } else { //кнопка "Add to watched"
//                 btnWatchedEl.setAttribute("disabled", true); //вже є, не вставляти (кнопка пасивна)
//             }
//         } else { //якщо id фільму немає в масиві watched:
//             if (btnWatchedEl.classList.contains('remove-watched-js')) { //кнопка "Remove watched"
//                 btnWatchedEl.setAttribute("disabled", true); //нічого видаляти (кнопка пасивна)
//             } else { //кнопка "Add to watched"
//                 btnWatchedEl.setAttribute("disabled", false); //можна додавати (кнопка активна)
//             }
//         }

//     } else if (el === btnQueueEl) { //робота з queue;
//         if (queue.includes(id)) { //якщо id фільму є в масиві queue:
//             //перевіряємо чи на кнопці є клас remove-queue-js  
//             if (btnQueueEl.classList.contains('remove-queue-js')) { //кнопка "Remove queue"
//                 btnQueueEl.setAttribute("disabled", false); //можна видаляти (кнопка активна)
//             } else { //кнопка "Add to queue"
//                 btnQueueEl.setAttribute("disabled", true); //вже є, не вставляти (кнопка пасивна)
//             }
//         } else { //якщо id фільму немає в масиві queue
//             if (btnQueueEl.classList.contains('remove-queue-js')) { //це кнопка "Remove queue"
//                 btnQueueEl.setAttribute("disabled", true); //нічого видаляти (кнопка пасивна)
//             } else { //це кнопка "Add to queue"
//                 btnQueueEl.setAttribute("disabled", false); //можна додавати (кнопка активна)
//             }
    
//         }
//     }
// }

// функція додає чи знімає клас .remove-watched-js з кнопки el та змінює текст на кнопці
export function changeBtnAppearance(el) {
    //el - це елемент розмітки(кнопка по котрій був клік)
    
    //Константи лишити тут чи перенести в refs.js ?
    const btnWatchedEl = document.querySelector('[data-movie="watched"]');
    const btnQueueEl = document.querySelector('[data-movie="queue"]');

    if (el === btnWatchedEl) { //перевіряємо чи клік був по кнопці watched
        
        //перевіряємо чи на кнопці є клас remove-watched-js, 
        if (btnWatchedEl.classList.contains('remove-watched-js')) { 
                //текст змінюємо на "Add to watched" та додаємо клас .remove-watched-js
                btnWatchedEl.classList.toggle('remove-watched-js');
                btnWatchedEl.textContent = 'Add to watched';
        } else { //кнопка 'Add to watched', 
            // додаємо клас .remove-watched-js і змінюємо текст на кнопці на "Remove watched
            btnWatchedEl.classList.toggle('remove-watched-js');
            btnWatchedEl.textContent = 'Remove watched';
        }
    }
    else if (el === btnQueueEl) { //перевіряємо чи клік був по кнопці Queue
        if (btnQueueEl.classList.contains('remove-queue-js')) {
            btnQueueEl.classList.toggle('remove-queue-js');
            btnQueueEl.textContent = 'Add to queue';
        } else {
            btnQueueEl.classList.toggle('remove-queue-js');
            btnQueueEl.textContent = 'Remove queue';
        }
    }
}