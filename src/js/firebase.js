// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

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

console.log(auth);

googleLogin.addEventListener('click', e => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      form.innerHTML = `<img src="${user.photoURL}" style="width:10%">
          <p>Name: ${user.displayName}</p>
          <p>Email: ${user.email}</p>`;
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

      alert(errorMessage);
    });
});

// signOut.addEventListener('click', e => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch(error => {
//       // An error happened.
//     });
// });
