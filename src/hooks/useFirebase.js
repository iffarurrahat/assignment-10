import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import initializeFirebaseApp from './../useFirebase/useFirebase.init';

initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    logout,
    signInUsingGithub,
    signInUsingGoogle,
  };
};

export default useFirebase;
