import * as firebase from 'firebase';


const config={
    apiKey: "AIzaSyAc_2qc99b8AdA6lpCzOL9T4ZakqI_MAOA",
    authDomain: "goalcoach-c1c7b.firebaseapp.com",
    databaseURL: "https://goalcoach-c1c7b.firebaseio.com",
    projectId: "goalcoach-c1c7b",
    storageBucket: "goalcoach-c1c7b.appspot.com",
    messagingSenderId: "863983261186",
    appId: "1:863983261186:web:fdd63f8cc9de17e5adb91b",
    measurementId: "G-EBMPWMM9YC"
  };


  export const firebaseApp=firebase.initializeApp(config);
  export const goalRef=firebase.database().ref('goals');
  export const completeGoalRef=firebase.database().ref('completeGoals');


