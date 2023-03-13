import {auth, provider} from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = ({setIsAuth}) => {
    

    const signInWithGoogle = async() => {
        try{
            const result = await signInWithPopup(auth, provider);
            console.log(result, 'ini hasil dari google auth');
            cookies.set("auth-token", result.user.refreshToken);
            // setIsAuth(true);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div className="bg-red-200">
            <p>Sign in with google to continue</p>
            <button onClick={signInWithGoogle}>sign in with google</button>
        </div>
    )
}

export default Auth;