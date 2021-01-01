import React, { useContext, useEffect, useState } from 'react';
import { auth, twitterProvider } from '../authentication/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const [loading, setLoading] = useState(true);

  function logout() {
    localStorage.removeItem('twitterHandle');
    return auth.signOut();
  }

  function loginWithTwitterPopup() {
    return auth.signInWithPopup(twitterProvider).then((userCredential) => {
      localStorage.setItem('twitterHandle', userCredential.additionalUserInfo.username);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  const value = {
    currentUser,
    loginWithTwitterPopup,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
