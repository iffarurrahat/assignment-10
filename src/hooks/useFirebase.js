import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import initializeFirebaseApp from './../useFirebase/useFirebase.init';

initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

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

  const toggleLogin = e => {
    setIsLogin(e.target.checked);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }

    if (!/((?=.*[A-Z].*[A-Z]))/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  };
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(result => {
      console.log(result);
    });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => {})
      .catch(error => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    isLogin,
    logout,
    toggleLogin,
    verifyEmail,
    handleResetPassword,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    signInUsingGithub,
    signInUsingGoogle,
  };
};

export default useFirebase;
