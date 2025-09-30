import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { FieldValue, updateDoc } from "firebase/firestore";
// import { stackOrderInsideOut } from 'd3';
//import { updateQuantity } from '../redux/order/order.actions';

const config = {
  apiKey: "AIzaSyBaK2Vz0kl0dACBmbON6QyHuG_hTQ6XAtE",
  authDomain: "crwn-clothing-eabd3.firebaseapp.com",
  projectId: "crwn-clothing-eabd3",
  storageBucket: "crwn-clothing-eabd3.appspot.com",
  messagingSenderId: "983557235563",
  appId: "1:983557235563:web:be158ac60a84512318a22e",
  measurementId: "G-0SMLX5VNWT",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      alert("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const orderRef = firestore.collection("orders");
const Shot = () => {
  var data;
  orderRef.onSnapshot(async (snapshot) => {
    const orderItem = convertOrderSnapshotToMap(snapshot);
    data = orderItem.data[0];
    // console.log("value oof data : " + data.name);
    return data;
  });
  return data;
};

// console.log("value oof a : " + Shot());
export const addOrderDoc = async (orderKey, objectsToAdd) => {
  const orderRef = firestore.collection(orderKey).doc("orderItems");
  // const ref = firestore.doc(`${orderKey}/orderItems`)
  // console.log(ref);

  // console.log(orderRef);

  const { ord } = Shot;
  // console.log(ord.length());
  objectsToAdd.forEach((obj) => {
    if (obj.id === ord) {
      updateDoc(orderRef, { data: FieldValue.arrayRemove(obj) });
    }
  });
  // console.log(objectsToAdd);
};

export const convertOrderSnapshotToMap = (orders) => {
  const transformedOrder = orders.docs.map((doc) => {
    const { data } = doc.data();
    return {
      data: data,
    };
  });
  //console.log(transformedCollection);
  return transformedOrder.reduce((accumulator, collection) => {
    accumulator = collection;
    return accumulator;
  }, {});
};

export default firebase;
