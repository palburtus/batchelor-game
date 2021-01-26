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

export const getPicks = (token) => {
    return new Promise((resolve, reject) => {
        
        firebase.auth().signInAnonymously()
            .then(() => {
               
                db.collection('picks').doc(token).get().then((doc) => {
                    var data = doc.data();
                  
                    if(data){
                        resolve(data); 
                    }else{
                        reject('Your account was not found');
                    }
                }).catch((error) => { 
                    reject('Connection error please try again')
                });   
            })
            .catch((error) => {
               
                reject(error);
            });

                         
    });    
}

export const getAllPicks = (token) => {
    
    return new Promise((resolve, reject) => {
        
        firebase.auth().signInAnonymously()
            .then(() => {
                
                db.collection('picks').get().then((collection) => {
                
                    let documents = [];
                    collection.forEach(doc => {
                        documents.push(doc.data());
                    });
                
                    if(documents){
                        resolve(documents); 
                    }else{
                        reject('Error loading standings');
                    }
                }).catch((error) => { 
                    reject('Connection error please try again')
                });             
            }).catch((error) => {
               
                reject(error);
            })       
    });
}

export const upsertPicks = (email, token, name,  picks) => {
   
    return db.collection('picks').doc(token).set({
        email: email,
        name: name,
        picks: picks
    });        
}
