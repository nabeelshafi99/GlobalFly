import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"

export const UserProvider = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user)
        }else{
            setUser(false)
        }
    })
},[user])

  return <UserProvider.Provider value={{user,setUser,isLoading,setIsLoading}}>{children}</UserProvider.Provider>;
};

export default UserContext;
