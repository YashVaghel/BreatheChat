import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDmLFIOfuX3TrjIJmRui9ze64y-55X4Ieo",
    authDomain: "breathechat-7ac2d.firebaseapp.com",
    projectId: "breathechat-7ac2d",
    storageBucket: "breathechat-7ac2d.appspot.com",
    messagingSenderId: "321154559243",
    appId: "1:321154559243:web:fe4d90c9c88e9ec7aac60e"
}).auth()