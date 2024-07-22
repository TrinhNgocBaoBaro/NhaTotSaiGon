import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import React from 'react'
import Header from "../components/Header";
import COLORS from "../constants/color";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Feather";
import * as Linking from "expo-linking";

const HelpCenterScreen = ({navigation}) => {
  const phoneNumber = '+84 123 456 789'; 
  const email = 'nhatotsaigon@gmail.com'; 

  const makeCall = () => {
    const url = `tel:${phoneNumber}`;

    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert(`Không thể gọi số này: ${phoneNumber}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  const makeEmail = () => {
    const url = `mailto:${email}`;

    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert(`Không thể gửi mail đến: ${email}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => Alert.alert(`Thiết bị không hỗ trợ gửi mail !`))
  };

  return (
    <>
        <Header
        title="Trung tâm trợ giúp"
        colorText={COLORS.black}
        colorBackground={COLORS.white}
        onPress={() => navigation.goBack()}
        rightIcon={"help-circle"}
      />
      <View style={{ flex: 1, padding: 10, backgroundColor: COLORS.white}}>
      <View style={{alignItems: 'center', marginTop: 10}}>
      <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/4017/4017991.png"}} 
              width={180} height={180} resizeMode="cover"
      />
      <Text style={{fontFamily: FONTS.bold, fontSize: 22, color: COLORS.orange, marginTop: 10,}}>Nhà Tốt Sài Gòn</Text>
      <Text style={{marginHorizontal: 30,fontFamily: FONTS.medium, fontSize: 15, color: COLORS.grey, marginTop: 10, textAlign: 'center', lineHeight: 25}}>Xin chào, nếu xảy ra vấn đề, vui lòng liên hệ chúng tôi theo phương thức dưới đây để được hỗ trợ !</Text>

      </View>
      <View style={{marginTop: 50, flexDirection: 'column', justifyContent: 'space-evenly'}}>
      <TouchableOpacity 
      onPress={makeCall}
      activeOpacity={0.8}
      style={{marginBottom: 15,marginHorizontal: 50, alignItems: 'center', padding: 20, backgroundColor: COLORS.white, elevation: 3, borderRadius: 10 }}>
        <Icon name="phone-call" size={32} color={COLORS.grey}/>
        <Text style={{fontFamily: FONTS.semiBold, fontSize: 16, color: COLORS.black, marginTop: 10}}>{phoneNumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={makeEmail}
      activeOpacity={0.8}
      style={{marginHorizontal: 50, alignItems: 'center', padding: 20, backgroundColor: COLORS.white, elevation: 3, borderRadius: 10 }}>
        <Icon name="mail" size={32} color={COLORS.grey}/>
        <Text style={{fontFamily: FONTS.semiBold, fontSize: 15, color: COLORS.black, marginTop: 10}}>{email}</Text>
      </TouchableOpacity>
      </View>
      </View>
    </>
  )
}

export default HelpCenterScreen

const styles = StyleSheet.create({})