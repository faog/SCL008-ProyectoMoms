import app from 'firebase/app';
import 'firebase/firestore';

// Inicializacion del proyecto en firebase
const config = {
  apiKey: "AIzaSyB7lktfPzNHohAT7O_ZKjcXa1gwjGZsmEQ",
  authDomain: "proyecto-moms.firebaseapp.com",
  databaseURL: "https://proyecto-moms.firebaseio.com",
  projectId: "proyecto-moms",
  storageBucket: "",
  messagingSenderId: "1052432304334",
  appId: "1:1052432304334:web:b1be1179280dc3ad"
};

// Crear clase Firebase, que permite guardar la información de las empresas
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }
}

export default Firebase;