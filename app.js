// AngularJS Module
var app = angular.module("skinAuraApp", []);

// Firebase Configuration (PASTE YOUR VALUES BELOW)
var firebaseConfig = {
    apiKey: "AIzaSyAYjt--lCbs8HA2eZa0K4C5ENmHp9Ghf8s",
    authDomain: "skinaura-ef676.firebaseapp.com",
    databaseURL: "https://skinaura-ef676-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "skinaura-ef676",
    storageBucket: "skinaura-ef676.firebasestorage.app",
    messagingSenderId: "973235375615",
    appId: "1:973235375615:web:a5282b5e2a99ee2993ebca",
    measurementId: "G-STJKG9YSTJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
