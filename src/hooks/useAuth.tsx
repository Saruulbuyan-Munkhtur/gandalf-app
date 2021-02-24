import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';

type emailpassword = {
    email: string
    password: string,
}

export const useAuth = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    const signInAnony = () => {
        auth()
            .signInAnonymously()
            .then(() => {
                console.log('User signed in anonymously');
            })
            .catch(error => { console.error(error) });
    }
    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return { signInAnony, signOut, user }
}