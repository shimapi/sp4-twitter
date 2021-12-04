import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQf8duDbb7EgMhcbbJyl8Cqi3J6Cf4Kug",
    authDomain: "tweets-shimi.firebaseapp.com",
    projectId: "tweets-shimi",
    storageBucket: "tweets-shimi.appspot.com",
    messagingSenderId: "881455470967",
    appId: "1:881455470967:web:c6be90237fc778e533a972"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
// exporta el paquete de firebase para poder usarlo
export default firebase
