import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authFirebase } from "../../../app/config/firebase.config";


export const LoginWithGoogle = async () => {
    try{
        const provider = new GoogleAuthProvider();
        const data = await signInWithPopup(authFirebase, provider);
        return data.user;

    }catch(error){
        console.log(error.message);
    }
}