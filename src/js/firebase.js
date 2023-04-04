// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyCQY1jXT3fGgqpQ76Zdo4R9h_uAqAnLd8A',
  authDomain: 'filmoteka-auth-9e666.firebaseapp.com',
  projectId: 'filmoteka-auth-9e666',
  storageBucket: 'filmoteka-auth-9e666.appspot.com',
  messagingSenderId: '867248952720',
  appId: '1:867248952720:web:e710e70f8fea44a97acf15',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const googleLogin = document.getElementById('googleLogin');
const form = document.getElementById('auth_form');
const libraryButton = document.getElementById('library');
const logout = document.getElementById('logout');
const userInfo = document.querySelector('.userInfo');

libraryButton.style.display = 'none';
logout.style.display = 'none';
form.style.display = 'block';

let parsedSettings = '';
parsedSettings = JSON.parse(localStorage.getItem('userSettings'));

if (parsedSettings) {
  libraryButton.style.display = 'block';
  logout.style.display = 'block';
  form.style.display = 'none';
  userInfo.innerHTML = ` ${parsedSettings.email}`;
}

googleLogin.addEventListener('click', e => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const userSettings = {
        email: user.email,
      };
      localStorage.setItem('userSettings', JSON.stringify(userSettings));

      Notiflix.Notify.success(`Welcome: ${user.displayName}`, {
        timeout: 1500,
        position: 'left-top',
        width: '280px',
      });
      libraryButton.style.display = 'block';
      logout.style.display = 'block';
      form.style.display = 'none';
      userInfo.innerHTML = `${user.email}`;
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage);
    });
});

logout.addEventListener('click', e => {
  localStorage.removeItem('userSettings');
  window.location.href = 'index.html';
});
