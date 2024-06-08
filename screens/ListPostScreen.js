import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icon from "react-native-vector-icons/Ionicons";

const ListPostScreen = ({navigation}) => {
  return (
    <>
      <Header title={"Tin của bạn"} rightIcon={"newspaper"} onPress={()=> navigation.goBack()}/>
      <Text>ListPostScreen</Text>
    </>
  )
}

export default ListPostScreen

const styles = StyleSheet.create({})