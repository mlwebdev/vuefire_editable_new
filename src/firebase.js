import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAUsctA8ABBZLlBy4hvT8RAHadGVykdeCc",
    authDomain: "fir-vue-96fdb.firebaseapp.com",
    databaseURL: "https://fir-vue-96fdb.firebaseio.com",
    projectId: "fir-vue-96fdb",
    storageBucket: "",
    messagingSenderId: "974333955582"
  });

export const db = app.database();
export const namesRef = db.ref('names');
