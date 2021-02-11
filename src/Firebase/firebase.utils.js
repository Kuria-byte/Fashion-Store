import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3V6K2pXQvBxG_zH9xyBkOTwCdRxPqVvQ",
    authDomain: "reactecommerce-2f034.firebaseapp.com",
    databaseURL: "https://reactecommerce-2f034.firebaseio.com",
    projectId: "reactecommerce-2f034",
    storageBucket: "reactecommerce-2f034.appspot.com",
    messagingSenderId: "817361145392",
    appId: "1:817361145392:web:cedb3ebc6a61105a73e7f5",
    measurementId: "G-9SCTMXEZP8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    console.log(snapShot);
    return userRef;

};

export const addCollectionAndDocuments = async (collectionName, ojectsToAdd) => {

    const collectionRef = firestore.collection(collectionName);
    const batch = firestore.batch();
  
    ojectsToAdd.forEach(object => {
      const newDoc = collectionRef.doc();
      console.log(object);
      batch.set(newDoc, object);
    });
  
    return await batch.commit()
  }
  
  export const convertShopCollectionsToObject = (shopCollections) => {
    const transformedCollections = shopCollections.docs.map(shopDocument => {
      const { title, items } = shopDocument.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: shopDocument.id,
        title,
        items
      }
    });
  
    
   return transformedCollections.reduce( (accumulator,Shopcollection ) =>{
     accumulator[Shopcollection.title.toLowerCase()] = Shopcollection;
     return accumulator;
  
    }, {});
  
  
    }
  


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promppt: "Select Account" });
export const signinwithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;