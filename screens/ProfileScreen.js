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

import AsyncStorage from "@react-native-async-storage/async-storage";
// import createAxios from "../utils/axios";
// const API = createAxios();

const ProfileScreen = ({ navigation }) => {
  const [aboutMe, setAboutMe] = React.useState();
  const [showStationInfo, setShowStationInfo] = React.useState(false);

  // const getDataAboutMe = async ()  => {
  //   try {
  //     const response = await API.get("/aboutMe")
  //     if(response) {
  //       console.log("Success get aboutMe")
  //       setAboutMe(response)
  //     }
  //   } catch (error) {

  //   }
  // }

  // React.useEffect(()=>{
  //   getDataAboutMe();
  // },[])

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
    navigation.popToTop();
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
              <Icon name="skull-outline" size={28} color={"black"} />
            </View>
          </Pressable>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Tài khoản</Text>
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
              uri: "https://banner2.cleanpng.com/20180619/epr/kisspng-avatar-photo-booth-computer-icons-email-stewardess-5b292bfebc29e1.5698032815294248947707.jpg",
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
            <Text style={{ fontWeight: "bold", fontSize: 16, fontWeight: 500 }}>
              Trịnh Ngọc Bảo
            </Text>
            <Text style={{ fontSize: 13, color: "grey", fontWeight: 500 }}>
              ngbao1592001@gmail.com
            </Text>
          </View>
          <View>
            <Icon name="notifications-outline" size={26} color={"grey"} />
          </View>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={{ marginBottom: 12 }}>
            <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
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
                    fontWeight: 500,
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
                    fontWeight: 500,
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
            <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
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
    fontWeight: "bold",
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
