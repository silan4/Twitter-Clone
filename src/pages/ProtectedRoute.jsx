import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../firebase/config'
import { useState } from 'react'

const ProtectedRoute = () => {
    // kullanıcının yetkisi var mı ?
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        // anlık olarak kullanıcının oturumunu izler
        // verdiğimiz her oturum değiştiğinde çalışır 
        //ve parametre olarak aktif kullanıcıyı alır
      const unsub =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        });
        return () => unsub();
    }, []);

    // kullanıcının yetkisi yoksa logine yönlendir
    if (isAuth === false) {
        return <Navigate to={"/"} replace />;
    }

    // kullanıcının yetkisi varsa alt route'a geçmesine izin ver
    return <Outlet />        
}

export default ProtectedRoute