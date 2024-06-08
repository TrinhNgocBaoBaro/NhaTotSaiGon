import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import createAxios from "../utils/axios";
const API = createAxios();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [finish, setFinish] = useState(false);

  GoogleSignin.configure({
    webClientId:
      "283644597986-6bpm3qm5ot1rrmhie7do9kn326raeiu1.apps.googleusercontent.com",
  });

  const onAuthStateChanged = async (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user) {
      console.log(user)
      await loginSystem(user);
    } else {
      await AsyncStorage.removeItem('UserLoggedInData');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const loginSystem = async (user) => {
    try {
      const response = await API.post('/account/login', {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      if(response){
        console.log('User saved to database: ', response.data.data);
        await AsyncStorage.setItem('UserLoggedInData', JSON.stringify(response.data.data));
        // setFinish(true)
      }
    } catch (error) {
      console.error('Error saving user to database: ', error);
    }
  };

  const signInWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const signOut = async () => {
    await auth().signOut();
    await GoogleSignin.signOut();
    setUser(null);
    // setFinish(false)

  };

  return (
    <AuthContext.Provider value={{ user, initializing, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
