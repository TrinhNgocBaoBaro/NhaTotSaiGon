import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import COLORS from "../constants/color";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Ionicons";
import LoadingModal from "../components/LoadingModal";

const favouriteList = [
  {
    id: "1",
    name: "Bơ Bán Bò",
    address: "203 Đ.Lê Văn Việt, Hiệp Phú, Quận 9",
    time: "23",
    image:
      "https://file4.batdongsan.com.vn/2022/08/26/PHJN6Zw0/20220826100833-50e4.jpg",
    latitude: 10.8441,
    longitude: 106.78288,
  },
  {
    id: "2",
    name: "No-Ne Bistro",
    address: "48 Đường Nguyễn Văn Mai, Phường 8, Quận 3",
    time: "70",
    image:
      "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/02/22/cho-thue-phong-tro_1613975723.jpg",
    latitude: 10.790032685611157,
    longitude: 106.68744825401734,
  },
  {
    id: "3",
    name: "A Mà Kitchen",
    address: "62 Võ Văn Tần, Phường 6, Quận 3",
    time: "60",
    image:
      "https://offer.rever.vn/hubfs/cho_thue_phong_tro_moi_xay_gia_re_ngay_phuong_15_tan_binh3.jpg",
    latitude: 10.7768469439067,
    longitude: 106.69026283867206,
  },
  {
    id: "4",
    name: "King BBQ",
    address: "50 Lê Văn Việt, Hiệp Phú, Quận 9",
    time: "50",
    image:
      "https://cafefcdn.com/203337114487263232/2022/8/5/83-1659675881831241642789.jpeg",
    latitude: 10.847411218830398,
    longitude: 106.7762775617879,
  },
  {
    id: "5",
    name: "Hanuri-Korean Fast Food",
    address: "284 Nguyễn Đình Chiểu, Phường 6, Quận 3",
    time: "70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_EcqcGnIaUjkMyVVFrgxVEV8HVilApXvx0QFJZRc7wr3DbYLjpwseMEGLTjONbYe7Nk&usqp=CAU",
    latitude: 10.775871102987148,
    longitude: 106.68727154052584,
  },
  {
    id: "6",
    name: "Kichi Kichi",
    address: "Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9 Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9",
    time: "25",
    image:
      "https://vatlieuso.com/wp-content/uploads/2021/10/chi-phi-xay-nha-tro.jpg",
    latitude: 10.822944055835185,
    longitude: 106.77066314829463,
  },
  {
    id: "7",
    name: "Maison Mận-Đỏ",
    address: "27J Đ. Trần Nhật Duật, Phường Tân Định, Quận 1",
    time: "75",
    image:
      "https://baohanam-fileserver.nvcms.net/IMAGES/2023/09/13/20230913181412-97tro.jpg",
    latitude: 10.793057450832194,
    longitude: 106.69022156701138,
  },
];

const FavouriteScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Yêu thích"
        colorText={COLORS.orange}
        colorBackground={COLORS.white}
        rightIcon="heart"
        onPress={() => navigation.goBack()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favouriteList}
        renderItem={({item, index}) =>
            (
                <TouchableOpacity
                onPress={() => {navigation.navigate("PostDetail")}}
                activeOpacity={0.8}
                style={
                  {
                    backgroundColor: COLORS.white,
                    padding: 10,
                    marginHorizontal: 20,
                    marginTop: 10,
                    marginBottom: 5,
                    flexDirection: "row",
                    borderBottomWidth:2,
                    borderBottomColor: COLORS.greyPastel
                  }
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 100, width: 100, borderRadius: 5 }}
                />
                <View
                  style={{
                    flex: 1,
                    padding: 10,
                    paddingLeft: 20,
                    paddingTop: 5
                  }}
                >
                  <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }} numberOfLines={2}>
                    {item.address}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.semiBold,
                      fontSize: 12,
                      color: COLORS.grey,
                      marginTop: 5
                    }}
                  >
                    Diện tích: {item.time} m2
                  </Text>
                </View>
                <Icon onPress={()=>{console.log("haha")}} name="trash-outline" color={COLORS.orange} size={24} style={{alignSelf: 'center'}}/> 
              </TouchableOpacity>
            )
        }
        keyExtractor={(item) => item.id}
        style={{backgroundColor: COLORS.white}}
      />
      {/* <LoadingModal modalVisible={true}/> */}

    </>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
