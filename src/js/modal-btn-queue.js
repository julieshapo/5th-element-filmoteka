import {refs} from './refs';
import { getMoviesByName } from './api-fetch';


export async function modalBtnQueueUpdate(){  
      
    try{
        //const modalBtnQueue = document.querySelector('[data-movie="queue"]');
        function onClick(e){
           // console.log(e.target?.dataset.movie)
            if (e.target?.dataset.movie!=="queue") {
                return
              }
              
              const title =  e.currentTarget.getElementsByTagName("h2");
            // const results = await getMoviesByName(id);
            console.log()
            }
        refs.modalMovie.addEventListener('click', onClick);
        } catch (error){
    console.log(error);
    }
    
}

modalBtnQueueUpdate();