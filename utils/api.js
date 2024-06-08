import AsyncStorage from "@react-native-async-storage/async-storage";

import createAxios from "../utils/axios";
const API = createAxios();

const getDataAboutMe = async () => {
    try {
      const UserLoggedInData = await AsyncStorage.getItem("UserLoggedInData");
  
      if (UserLoggedInData) {
        let udata = JSON.parse(UserLoggedInData);
        console.log("zo: ", udata)
        return udata;
      }
      console.log("nè")

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    return null;
  };

  export { getDataAboutMe };
