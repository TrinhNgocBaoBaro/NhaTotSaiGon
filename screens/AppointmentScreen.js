import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import COLORS from '../constants/color'
import Icon from 'react-native-vector-icons/Ionicons';
import FONTS from '../constants/font';

const AppointmentScreen = () => {
  return (
    <>
      <Header title={'Lịch hẹn'} leftIcon={"calendar-outline"} colorBackground={COLORS.orange} colorText={COLORS.white}/>
      <View style={{flexDirection: 'row', }}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', alignSelf: 'center', paddingVertical: 20, borderBottomWidth: 3, borderBottomColor: COLORS.orange}}>
          <Text style={{fontFamily:  FONTS.semiBold, fontSize: 15, color: COLORS.orange}}>Người hẹn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', alignSelf: 'center', paddingVertical: 20}}>
          <Text style={{fontFamily:  FONTS.semiBold, fontSize: 15}}>Bạn hẹn</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: COLORS.white, flex: 1}}>

      </View>
    </>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({})