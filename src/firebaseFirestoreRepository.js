import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: '',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const upsertPicks = (token, picks) => {
   
    debugger;
    return db.collection('picks')
        .add({
            created: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: token,
            picks: picks
        });

    debugger;

}