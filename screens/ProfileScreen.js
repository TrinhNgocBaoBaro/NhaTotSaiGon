import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome";

import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import AsyncStorage from "@react-native-async-storage/async-storage";
import FONTS from "../constants/font";
import createAxios from "../utils/axios";
const API = createAxios();

const ProfileScreen = ({ navigation }) => {
  const [aboutMe, setAboutMe] = React.useState();
  const [showStationInfo, setShowStationInfo] = React.useState(false);

  const getDataAboutMe = async ()  => {
    try {
      const response = await API.get(`/account/66518d7a458eef05bbb41c3c`)
      if(response) {
        console.log("Success get aboutMe")
        setAboutMe(response)
        console.log(response.data)
      }
    } catch (error) {
        console.log(error)
    }
  }

  React.useEffect(()=>{
    getDataAboutMe();
  },[])

  const cacheAndCellularItems = [
    {
      icon: "shield-checkmark-outline",
      text: "Quyền riêng tư",
      sub: "create-outline",
    },
    {
      icon: "person-circle-outline",
      text: "Thông tin tài khoản",
      sub: "create-outline",
    },
  ];
  const accountItems = [
    {
      icon: "language-outline",
      text: "Ngôn ngữ",
      sub: "chevron-forward-outline",
    },
    {
      icon: "chatbubble-ellipses-outline",
      text: "Phản hồi",
      sub: "chevron-forward-outline",
    },
    {
      icon: "star-outline",
      text: "Đánh giá ứng dụng",
      sub: "chevron-forward-outline",
    },
    {
      icon: "download-outline",
      text: "Cập nhật",
      sub: "chevron-forward-outline",
    },
  ];

  const handleLogOut = () => {
    auth()
    .signOut()
    .then(() => console.log("User signed out!"));
    GoogleSignin.signOut();
    navigation.navigate("Login")

  };

  const renderSettingsItem = ({ icon, text, sub }) => (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <Icon name={icon} size={24} color="grey" />
      <Text
        style={{
          marginLeft: 15,
          fontSize: 15,
          minWidth: 250,
          fontWeight: 500,
          fontFamily: FONTS.semiBold
        }}
      >
        {text}
      </Text>
      <View style={{ alignSelf: "flex-end" }}>
        <Icon
          name={sub}
          size={24}
          color="grey"
          style={{
            fontWeight: 600,
            fontSize: 24,
          }}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <SafeAreaView>
        <View style={styles.top}>
          <Pressable onPress={() => navigation.goBack()}>
            <View
              style={{
                height: 40,
                width: 40,
                marginLeft: 20,
                justifyContent: "center",
              }}
            >
              <Icon name="person-outline" size={28} color={"black"} />
            </View>
          </Pressable>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontFamily: FONTS.bold }}>Tài khoản</Text>
          </View>
          <Pressable
            style={{
              marginRight: 20,
              height: 40,
              width: 40,
              justifyContent: "center",
            }}
            onPress={() => {}}
          >
            <Icon name="ellipsis-vertical" size={25} color={"black"} />
          </Pressable>
        </View>
      </SafeAreaView>
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.itemCard}>
          <Image
            source={{
              uri: aboutMe ? aboutMe.image : "https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/438238559_1143642673426668_6656372791733229549_n.jpg?stp=c2.0.200.200a_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-2s72PAG7cEQ7kNvgEXAYaA&_nc_ht=scontent.fsgn15-1.fna&oh=00_AYAE6pxdrTkzfxHAGoHxzJfSAVLf9yEAF-BEkZqeKL7DBw&oe=6660C602",
            }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
          <View
            style={{
              height: 100,
              marginLeft: 25,
              paddingVertical: 32,
              flex: 1,
            }}
          >
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: 16 }}>
              Trịnh Ngọc Bảo
            </Text>
            <Text style={{ fontSize: 13, color: "grey", fontFamily: FONTS.semiBold }}>
              ngbao1592001@gmail.com
            </Text>
          </View>
          <View>
            <Icon name="notifications-outline" size={26} color={"grey"} />
          </View>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={{ marginBottom: 12 }}>
            <Text style={{ marginVertical: 10, fontFamily: FONTS.bold }}>
              Tài khoản
            </Text>
            <View
              style={{
                backgrounColor: "grey",
                borderRadius: 5,
                overflow: "hidden",
                elevation: 2,
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  backgroundColor: "white",
                  justifyContent: "space-between",
                }}
              >
                <Icon
                  name={"shield-checkmark-outline"}
                  size={24}
                  color="grey"
                />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 15,
                    minWidth: 250,
                    fontFamily: FONTS.semiBold,
                  }}
                >
                  {"Quyền riêng tư"}
                </Text>
                <View style={{ alignSelf: "flex-end" }}>
                  <TouchableOpacity>
                  <Icon1
                    name={"toggle-off"}
                    size={24}
                    color="grey"
                    style={{
                      fontWeight: 600,
                      fontSize: 24,
                    }}
                  />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  backgroundColor: "white",
                  justifyContent: "space-between",
                }}
              >
                <Icon name={"person-circle-outline"} size={24} color="grey" />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 15,
                    minWidth: 250,
                    fontFamily: FONTS.semiBold,
                  }}
                >
                  {"Thông tin tài khoản"}
                </Text>
                <View style={{ alignSelf: "flex-end" }}>
                  <Icon
                    name={"create-outline"}
                    size={24}
                    color="grey"
                    style={{
                      fontWeight: 600,
                      fontSize: 24,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ marginVertical: 10, fontFamily: FONTS.bold }}>
              Cài đặt
            </Text>
            <View
              style={{
                borderRadius: 5,
                backgrounColor: "grey",
                overflow: "hidden",
                elevation: 2,
              }}
            >
              {accountItems.map((item, index) => (
                <React.Fragment key={index}>
                  {renderSettingsItem(item)}
                </React.Fragment>
              ))}
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={handleLogOut}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Đăng xuất</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  itemCard: {
    height: 80,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    fontFamily: FONTS.semiBold,
  },
  btnContainer: {
    backgroundColor: "red",
    height: 35,
    width: 130,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  top: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 80,
  },
});

export default ProfileScreen;
