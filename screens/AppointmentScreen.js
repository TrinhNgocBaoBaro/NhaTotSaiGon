import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import COLORS from "../constants/color";
import Icon from "react-native-vector-icons/Ionicons";
import FONTS from "../constants/font";
import { formatCurrency, moment } from "../utils";

const dataAppointment = [
  {
    id: 1,
    address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3, TP. Hồ Chí Minh",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-uicha.appspot.com/o/b68ef200-29d7-4192-8be4-c4b66844ad99?alt=media",
    price: "2700000",
    area: "20",
    name: "Lê Hữu Nguyễn",
    phone: "0123456789",
    time: "08:00",
    date: "2024-06-12", //yyyy-MM-dd
    post_id: "2312sfsafsdvsdnm3n4324",
    renter_id: "6663e6db8197429ea3b28183",
    owner_id: "6660807eac641bc87d297c7b",
    renter_phone: "0789789798",
  },
  {
    id: 2,
    address:
      "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3, TP. Hồ Chí Minh, Việt Nam - Trái Đất",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-uicha.appspot.com/o/b68ef200-29d7-4192-8be4-c4b66844ad99?alt=media",
    price: "2700000",
    area: "20",
    name: "Lê Hữu Nguyễn",
    phone: "0123456789",
    time: "08:00",
    date: "2024-06-12", //yyyy-MM-dd
    post_id: "2312sfsafsdvsdnm3n4324",
    renter_id: "6663e6db8197429ea3b28183",
    owner_id: "6660807eac641bc87d297c7b",
    renter_phone: "0789789798",
  },
  {
    id: 3,
    address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-uicha.appspot.com/o/b68ef200-29d7-4192-8be4-c4b66844ad99?alt=media",
    price: "2700000",
    area: "20",
    name: "Lê Hữu Nguyễn",
    phone: "0123456789",
    time: "08:00",
    date: "2024-06-12", //yyyy-MM-dd
    post_id: "2312sfsafsdvsdnm3n4324",
    renter_id: "6663e6db8197429ea3b28183",
    owner_id: "6660807eac641bc87d297c7b",
    renter_phone: "0789789798",
  },
  {
    id: 4,
    address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-uicha.appspot.com/o/b68ef200-29d7-4192-8be4-c4b66844ad99?alt=media",
    price: "2700000",
    area: "20",
    name: "Lê Hữu Nguyễn",
    phone: "0123456789",
    time: "08:00",
    date: "2024-06-12", //yyyy-MM-dd
    post_id: "2312sfsafsdvsdnm3n4324",
    renter_id: "6663e6db8197429ea3b28183",
    owner_id: "6660807eac641bc87d297c7b",
    renter_phone: "0789789798",
  },
  {
    id: 5,
    address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-auth-uicha.appspot.com/o/b68ef200-29d7-4192-8be4-c4b66844ad99?alt=media",
    price: "2700000",
    area: "20",
    name: "Lê Hữu Nguyễn",
    phone: "0123456789",
    time: "08:00",
    date: "2024-06-12", //yyyy-MM-dd
    post_id: "2312sfsafsdvsdnm3n4324",
    renter_id: "6663e6db8197429ea3b28183",
    owner_id: "6660807eac641bc87d297c7b",
    renter_phone: "0789789798",
  },
];

const dataTabView = [
  {
    id: 1,
    name: "Sắp tới",
  },
  {
    id: 2,
    name: "Chờ xác nhận",
  },
];

const AppointmentScreen = () => {
  const [currentTabView, setCurrentTabView] = React.useState(1);

  return (
    <>
      <Header
        title={"Lịch hẹn"}
        leftIcon={"calendar-outline"}
        colorBackground={COLORS.orange}
        colorText={COLORS.white}
      />
      <View style={{ flexDirection: "row" }}>
        {dataTabView.map((tabView, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentTabView(tabView.id)}
            style={{
              flex: 1,
              alignItems: "center",
              alignSelf: "center",
              paddingVertical: 20,
              borderBottomWidth: currentTabView === tabView.id ? 3 : 0,
              borderBottomColor: COLORS.orange,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: 15,
                color:
                  currentTabView === tabView.id ? COLORS.orange : COLORS.black,
              }}
            >
              {tabView.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {currentTabView === 1 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataAppointment}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 'auto',
                backgroundColor: COLORS.white,
                marginBottom: 10,
                borderRadius: 5,
                padding: 10,
                elevation: 2,
                marginHorizontal: 5,
                marginTop: index === 0 ? 5 : 0,
              }}
            >
              <View style={{ flexDirection: "row", }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 110, height: 'auto', borderRadius: 3 }}
                  resizeMode="cover"
                />

                <View style={{ flex: 1, paddingLeft: 5 }}>
                <Text
                      style={{
                        fontFamily: FONTS.bold,
                        marginLeft: 5,
                        flexShrink: 1,
                        fontSize: 13,
                        color: COLORS.orange
                      }}
                    >
                      Thông tin liên hệ
                    </Text>
                  <View style={{ flexDirection: "row",marginTop: 5 }}>
   
                    <Text
                      style={{
                        fontFamily: FONTS.semiBold,
                        marginLeft: 5,
                        flexShrink: 1,
                        fontSize: 13,
                      }}
                    >
                      Thời gian: 12:30, 12/06/2024
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row",marginTop: 5 }}>
                    <Text
                      style={{
                        fontFamily: FONTS.semiBold,
                        marginLeft: 5,
                        flexShrink: 1,
                        fontSize: 13,
                      }}
                    >
                      Số điện thoại: {item.phone}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <Text
                      style={{
                        fontFamily: FONTS.semiBold,
                        marginLeft: 5,
                        flexShrink: 1,
                        fontSize: 13,
                      }}
                    >
                      Họ tên: {item.name}
                    </Text>
                  </View>

                </View>
              </View>
              <View style={{ flex: 1, marginTop: 10, }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon name="location-outline" size={20} color={COLORS.orange} />
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      marginLeft: 5,
                      flexShrink: 1,
                      fontSize: 13,
                      lineHeight: 22
                    }}
                  >
                    {item.address}.
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10  }}>
                  <Icon name="file-tray-outline" size={18} color={COLORS.orange} />
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      marginLeft: 5,
                      flexShrink: 1,
                      fontSize: 13,
                    }}
                  >
                    Diện tích: {item.area} m²
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Icon name="pricetags-outline" size={18} color={COLORS.orange} />
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        marginLeft: 5,
                        flexShrink: 1,
                        fontSize: 13,
                      }}
                    >
                      {formatCurrency(item.price)} / 1 tháng
                    </Text>
                  </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          style={{ padding: 10, backgroundColor: COLORS.white }}
        />
      )}
    </>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
