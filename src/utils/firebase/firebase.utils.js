import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBo7a-L4ZbWjpxJfhA0qc_CeJgqxLBoY6Y",
    authDomain: "baseball-store-db.firebaseapp.com",
    projectId: "baseball-store-db",
    storageBucket: "baseball-store-db.appspot.com",
    messagingSenderId: "407188534126",
    appId: "1:407188534126:web:c98b691872ebbdacd2c77f"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
            }catch(error){
                console.log('error creating the user', error.message);
            }
        }
      return userDocRef;    
  };