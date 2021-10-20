import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const signInViaPass = () => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setUser(user);
            })
            .finally(() => setIsLoading(false));

    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 characters!!');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 upper case! ');
            return;
        }

        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const { displayName, photoURL, email } = userCredential.user;
                const accountInfo = {
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setUser(accountInfo);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                const accountInfo = {
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setUser(accountInfo);
                setError('');
                // verifyEmail();
                // setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        toggleLogin,
    }


}


export default useFirebase;