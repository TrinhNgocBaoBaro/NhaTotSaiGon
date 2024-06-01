import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const LoginScreen = () => {

    const [user, setUser] = React.useState();
    const [initializing, setInitializing] = React.useState(true);
  
    GoogleSignin.configure({
      webClientId:
        "283644597986-6bpm3qm5ot1rrmhie7do9kn326raeiu1.apps.googleusercontent.com",
    });
  
    async function onGoogleButtonPress() {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
  
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      // Sign-in the user with the credential
      // return auth().signInWithCredential(googleCredential);
      const user_sign_in = auth().signInWithCredential(googleCredential);
      user_sign_in
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) {
          setInitializing(false);
          if (user) {
              // AsyncStorage.setItem(
              //     "UserLoggedInData",
              //     JSON.stringify({ user, loggedIn: true })
              // )
              //     .then(() => {
              //         navigation.navigate("Home");
              //     })
              //     .catch((error) => {
              //         console.log(error);
              //     });
              console.log("HAS USER: ", user);
  
          } else {
              console.log("NO USER");
          }
      }
  }
  
    React.useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
  }, []);
  

  return (
    <View style={styles.container}>
    <Text>Open up App.js to start working onsd your app!</Text>
    <Button
      onPress={() =>
        onGoogleButtonPress().then(() =>
          console.log("Signed in with Google!")
        )
      }
      title="Sign in with google"
    />

    <Button
      onPress={() => {
        auth()
          .signOut()
          .then(() => console.log("User signed out!"));
        GoogleSignin.signOut();
      }}
      title="Sign out"
      color={"red"}
    />
    <StatusBar style="auto" />
  </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });