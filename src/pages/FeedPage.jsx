import { useEffect } from "react";
import { useState } from "react";
import Aside from "../components/Aside"
import Main from "../components/Main"
import Nav from "../components/Nav"
import { auth } from "./../firebase/config";
import { onAuthStateChanged } from "firebase/auth";


const FeedPage = () => {
    const[user  ,setUser] = useState(null);


    // kullanıcının bilgisine abone ol
    useEffect(() => {
     // anlık olarak aktif kullanıcının bilgisineabone olduk
     // kullanıcı değiştiği anda mevcut kullanıcının bilgsisini state'e aktardık
     const unsub = onAuthStateChanged(auth , (currUser) =>
        setUser(currUser)
    );
    
     // kullanıcı anasayfadan ayrılırsa aboneliği sonlandır.
     return () => unsub();
    },[]);

  return (
    <div className="feed h-screen bg-black overflow-hidden ">
      <Nav user={user}/>
      <Main user={user}/>
      <Aside/>
    </div>
  )
}

export default FeedPage