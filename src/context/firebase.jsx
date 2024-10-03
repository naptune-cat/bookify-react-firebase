// Firebase setup and context
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
  where,
  query,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBIitwCeDMEGuIszJQGLsuoQU35jTa3tbA",
  authDomain: "bookify-b3be9.firebaseapp.com",
  projectId: "bookify-b3be9",
  storageBucket: "bookify-b3be9.appspot.com",
  messagingSenderId: "88144141387",
  appId: "1:88144141387:web:37194f9271560b766781ce",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore();
const storage = getStorage(firebaseApp);
// Custom hook to use Firebase context
export const useFirebase = () => useContext(firebaseContext);
const googleProvider = new GoogleAuthProvider();

// Firebase Provider component
export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  console.log(user);
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const signinGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  //logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
        setUser(null); // Clear the user from state
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  //handling photo storage
  const handleCreateBookListing = async (name, isbn, price, coverPic) => {
    const imageRef = ref(
      storage,
      `uploads/images/${Date.now()}-${coverPic.name}`
    );
    //for uploading data in firestore
    const uploadResult = await uploadBytes(imageRef, coverPic);
    return await addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userId: user.uid,
      displayName: user.displayName,
      userEmail: user.email,
      photoUrl: user.photoURL,
    });
  };
  const handleOrderData = async (name, isbn, price, coverPic, qty) => {
    //for uploading data in firestore

    return await addDoc(collection(firestore, "ordersList"), {
      name,
      isbn,
      price,
      imageURL: coverPic,
      qty: Number(qty),
      userId: user.uid,
      displayName: user.displayName,
      userEmail: user.email,
      photoUrl: user.photoURL,
    });
  };
  const isLoggedin = user ? true : false;

  //for reading data from firestore
  const listAllBooks = () => {
    return getDocs(collection(firestore, "books"));
  };
  //for description of book
  const bookDescById = async (id) => {
    const ref = doc(firestore, "books", id);
    const result = await getDoc(ref);
    return result;
  };
  //for getting images from storage
  const getImageUrl = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  const placeOrder = async (bookId, qty) => {
    const collectionRef = collection(firestore, "books", bookId, "orders");
    const result = await addDoc(collectionRef, {
      username: user.displayName,
      userId: user.uid,
      userEmail: user.email,
      photoURL: user.photoURL,
      qty: Number(qty),
    });
    return result;
  };

  //query orders
  const fetchMyOrders = async () => {
    const collectionRef = collection(firestore, "ordersList");
    const result = await getDocs(collectionRef);
    return result;
  };

  const getOrders = async () => {
    const collectionRef = collection(firestore, "ordersList");
    const result = await getDocs(collectionRef);
    return result;
  };
  return (
    <firebaseContext.Provider
      value={{
        signup,
        signin,
        signinGoogle,
        isLoggedin,
        handleCreateBookListing,
        listAllBooks,
        getImageUrl,
        bookDescById,
        placeOrder,
        fetchMyOrders,
        user,
        getOrders,
        handleOrderData,
        logout,
        auth,
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
