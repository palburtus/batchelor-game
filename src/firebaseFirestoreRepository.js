import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDq3JbCk7yA3999aiDx-qlfZhG96NPCBIg', //process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: '',
    projectId: 'aaks-batch', //process.env.REACT_APP_FIREBASE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getPicks = (token) => {
    return new Promise((resolve, reject) => {
        
        db.collection('picks').doc(token).get().then((doc) => {
            var data = doc.data();
            
            if(data.picks){
                resolve(data.picks); 
            }else{
                reject('Your account was not found');
            }
        }).catch((error) => { 
            reject('Connection error please try again')
        });                    
    });    
}

export const upsertPicks = (email, token, picks) => {
   
    return db.collection('picks').doc(token).set({
        email: email,
        picks: picks
    });        
}
