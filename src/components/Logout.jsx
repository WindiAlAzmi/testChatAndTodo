import React, { useContext } from "react";
import { auth, db } from "../firebase-config";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContextChat } from "../context/authContext";

const Logout = () => {
    const {user} = useContext(AuthContextChat);
  console.log(user);

    console.log(auth.currentUser, 'ini current user');
    const handleLogout = async() => {
        await updateDoc(doc(db, 'user', auth.currentUser.uid), {
            isOnline:false
        })
        await signOut(auth);
        console.log(auth.currentUser, "ini current user");
    }
    return (
      <div>
       
     {user  ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <button onClick={handleLogout}>login</button>
        )}
      </div>
    );
}


export default Logout;