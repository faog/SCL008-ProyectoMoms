/* eslint-disable import/no-unresolved */
import app from 'firebase/app';
import 'firebase/firestore';

// Inicializacion del proyecto en firebase
const config = {
  apiKey: 'AIzaSyB7lktfPzNHohAT7O_ZKjcXa1gwjGZsmEQ',
  authDomain: 'proyecto-moms.firebaseapp.com',
  databaseURL: 'https://proyecto-moms.firebaseio.com',
  projectId: 'proyecto-moms',
  storageBucket: "proyecto-moms.appspot.com",
  messagingSenderId: '1052432304334',
  appId: '1:1052432304334:web:b1be1179280dc3ad',
};

// Crear clase Firebase, que permite guardar la información de las empresas
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }

  saveCompanyApplication = (companyApplication) => {
    companyApplication.timeApplied = new Date(Date.now());
    return this.db.collection('companyApplication').add(companyApplication);
  }

  getAllApplications = () => {
    return this.getCompanyApplications().then((applications)=>{
      return Promise.all(applications.map(application=>{
        return this.getUsersByApplication(application);
      }))
    })
  };

  getCompanyApplications = () => new Promise((resolve,reject) => {
    this.db.collection('companyApplication').orderBy('timeApplied','desc').get()
    .then((querySnapshot) => {
      const applications = [];
      querySnapshot.forEach((application)=>{
        const data = application.data();
        data.id = application.id;
        applications.push(data);
      });
      resolve(applications);
    }).catch((error)=>{
      reject(error);
    });
  })

  getUsersByApplication = (application) => new Promise((resolve,reject) => {
    this.db.collection('testUser').where('carrera','==',application.carrera).get()
    .then(querySnapshot=>{
      const users = [];
      querySnapshot.forEach(user => {
        let ranking = 0;
        const data = user.data();
        if(data.idioma === application.idioma)
        {
          if(data.idiomaNivel === application.idiomaNivel) 
          {
            ranking = ranking + 15;
          }
          else{
            ranking = ranking + 10;
          }
        } 
        if(data.flexibilidad === application.flexibilidad) ranking = ranking + 25;
        if(data.añosExperiencia === application.añosExperiencia) ranking = ranking + 5;
        if(data.areaExperiencia === application.areaExperiencia) ranking = ranking + 30;
        if(data.rangoSueldo === application.rangoSueldo) ranking = ranking + 10;
        if(data.nivelEstudios === application.nivelEstudios) ranking = ranking + 15;

        data.id = user.id;
        data.ranking = ranking;
        users.push(data);
      })
      //TODO: Computar ranking idioma, flexibilidad,años de experiencia, area de especialidad, sueldo
      users.sort((a,b)=>(b.ranking - a.ranking));
      application.users = users;
      resolve(application);
    })
    .catch((error) => {
      reject(error);
    });
  })

}

export default Firebase;
