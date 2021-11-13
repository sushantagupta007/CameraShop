import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged,updateProfile,} from "firebase/auth";
import { useEffect, useState } from "react";

import initialization from './../Firebase/firebase.init';





initialization(); 






const useFirebase = () =>{
  
    const [user,setUser] = useState({})
    const [loggedUser,setLoggedUser] = useState({})

    

    const [loading,setIsLoading] = useState(true); 

    
    const auth = getAuth(); 

    const registerUser = (name,email,password,history)=>{
        setIsLoading(true)
        console.log(name)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const newUser = { email, displayName: name }; 
          setUser(newUser);
          updateProfile(auth.currentUser, {
            displayName: name
            })
            .then(() => {
            })
            .catch((error) => {
            }); 
            console.log(newUser)
            history.replace('/');        
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
        }
        )},[auth]);
     
      const emailSignIn =(email,password,history,location)=>{
        setIsLoading(true)
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoggedUser(user)
          const destination = location?.state?.from || '/';
          history.push(destination);
        })
        .catch((error) => {
         
        })
        .finally(()=>{
          setIsLoading(false)})
      }
      
      const signOutUser =()=> {
        setIsLoading(true)
      signOut(auth).then(() => {
          setUser({})
      }).catch((error) => {
      
      })
      .finally(()=>setIsLoading(false))
      }
      return{
            user,
            loading,
            setIsLoading,
            registerUser,
            
            emailSignIn,
            signOutUser,
            loggedUser
          }
      
}

export default useFirebase; 