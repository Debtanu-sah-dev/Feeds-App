const firebaseConfig = {
    apiKey: "AIzaSyDszSUqpHc4KGKeH_g-uuIdcQQEO8peVzU",
    authDomain: "live-feed-project.firebaseapp.com",
    projectId: "live-feed-project",
    storageBucket: "live-feed-project.appspot.com",
    messagingSenderId: "129620242170",
    appId: "1:129620242170:web:ccaa2ea0cb76bbf506a343"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth()
db.settings({
    timestampsInSnapshot: true,
    merge: true
})

