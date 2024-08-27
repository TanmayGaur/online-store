import { firebaseapp } from "../firebase/firebase-config"
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

export const OAuth=async()=>{
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt : "select_account"
    });
    const auth = getAuth();
    const userCred = await signInWithPopup(auth, provider);
    return userCred;
}