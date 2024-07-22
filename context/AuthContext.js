import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken  } from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createAxios from "../utils/axios";
const API = createAxios();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [userId, setUserId] = useState();

  GoogleSignin.configure({
    webClientId:
      "283644597986-6bpm3qm5ot1rrmhie7do9kn326raeiu1.apps.googleusercontent.com",
  });

  const onAuthStateChanged = async (user) => {
    console.log("Auth state changed:", JSON.stringify(user,null,2));
    setUser(user);
    // console.log("ProviderData :", JSON.stringify(user.providerData[0].providerId,null,2));
    try {
      if (initializing) {
        console.log("Initializing...at ");
        if (user) {
          console.log("User is authenticated:", user);
          try {
            await loginSystem(user,null);
          } catch (error) {
            console.error('Error during login system: ', error);
          } finally {
          }
        } else {
          console.log("No user authenticated");
          try {
            await AsyncStorage.removeItem('UserLoggedInData');  
          } catch (error) {
            console.error('Error removing user data: ', error);
          } finally {
          }
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setInitializing(false)
      console.log("Setting initializing to false at finally");
    }
  };



  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const loginSystem = async (user, photoURL) => {
    console.log("User at loginsystem: ", JSON.stringify(user, null,2));
    let providerId = user.providerData[0].providerId;
    console.log("Photo URL Facebook ở login system: ", photoURL)
    try {
      const response = await API.post('/account/login', {
        email: providerId === "facebook.com" ? user.providerData[0].email : user.email,
        displayName: user.displayName,
        photoURL: providerId === "facebook.com" ? photoURL : user.photoURL,
      });
      if(response){
        console.log('User saved to database: ', response.data.data);
        await AsyncStorage.setItem('UserLoggedInData', JSON.stringify(response.data.data));
        setUserId(response.data.data._id)
      }
    } catch (error) {
      console.error('Error saving user to database: ', error);
    }
  };

  const signInWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    setInitializing(true);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // return auth().signInWithCredential(googleCredential);
    const userCredential = await auth().signInWithCredential(googleCredential);
    if (userCredential) {
      await loginSystem(userCredential.user, null);
    }

    return userCredential;
    
  };

  const signInWithFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      setInitializing(true);

      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
  
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      const userCredential = await auth().signInWithCredential(facebookCredential);

      if (userCredential) {
        console.log("User info login Facebook: ", JSON.stringify(userCredential, null, 2));
        await loginSystem(userCredential.user, userCredential.additionalUserInfo.profile.picture.data.url);
      }
  
      return userCredential;

    } catch (error) {
      console.log("Lỗi facebook: ", error);
      throw error; 
    }
  };

  const signOut = async () => {
    setInitializing(true);
    await auth().signOut();
    await GoogleSignin.signOut();
    LoginManager.logOut();
    setUser(null);
    setUserId(null);
    console.log("Sign out!")
  };

  return (
    <AuthContext.Provider value={{userId, user, initializing, signInWithGoogle, signInWithFacebook, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
