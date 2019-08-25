'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBDJ6TXBsg60gRh26ixm4bFWNziPkTtkJk',
  authDomain: 'reactflix-b7bbd.firebaseapp.com',
  databaseURL: 'https://reactflix-b7bbd.firebaseio.com',
  projectId: 'reactflix-b7bbd',
  storageBucket: '',
  messagingSenderId: '541097719375',
  appId: '1:541097719375:web:b9445e8ff962aace'
})

const db = firebase.database()

export { db }
