import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icon from "react-native-vector-icons/Ionicons";

const ListPostScreen = ({navigation, route}) => {
  const { user_id } = route.params;

  React.useEffect(() => {
   console.log("User_id_initParams: ",user_id)
  }, [user_id]);
  
  return (
    <>
      <Header title={"Tin của bạn"} rightIcon={"newspaper"} onPress={()=> navigation.goBack()}/>
      <Text>ListPostScreen</Text>
    </>
  )
}

export default ListPostScreen

const styles = StyleSheet.create({})