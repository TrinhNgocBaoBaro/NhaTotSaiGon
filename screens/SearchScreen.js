import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import React from "react";
import COLORS from "../constants/color";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import { ButtonFlex } from "../components/Button";

const dataAreaFilter = [
  {
    id: 1,
    data: "Dưới 20 m2",
  },
  {
    id: 2,
    data: "20 - 30 m2",
  },
  {
    id: 3,
    data: "30 - 40 m2",
  },
  {
    id: 4,
    data: "40 - 50 m2",
  },
  {
    id: 5,
    data: "Trên 50 m2",
  },
];

const dataPriceFilter = [
  {
    id: 1,
    data: "< 1.5 triệu",
  },
  {
    id: 2,
    data: "1.5 triệu - 3 triệu",
  },
  {
    id: 3,
    data: "> 3 triệu",
  },
];

const searchList = [
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
    address:
      "Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9 Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9",
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

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const SearchScreen = ({navigation}) => {
  const [showModalFilters, setShowModalFilters] = React.useState(false);
  const [priceFilter, setPriceFilter] = React.useState();
  const [areaFilter, setAreaFilter] = React.useState();

  return (
    <>
      <View
        style={{ backgroundColor: COLORS.white, flex: 1,  padding: 20  }}
      >
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: 25,
              color: COLORS.orange,
            }}
          >
            Tìm kiếm
          </Text>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.boxInput}>
              <TextInput
                style={styles.input}
                placeholder="Tìm kiếm đường, quận..."
                // onFocus={() => {navigation.navigate("Tìm kiếm")}}
              />
              <Icon name="search" size={23} color={COLORS.grey} />
            </View>
            <TouchableOpacity
              onPress={() => setShowModalFilters(true)}
              activeOpacity={0.7}
              style={{
                backgroundColor: COLORS.orange,
                borderRadius: 10,
                padding: 15,
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="options" size={28} color={COLORS.white} />
            </TouchableOpacity>
            <Modal
              isVisible={showModalFilters}
              onBackdropPress={() => setShowModalFilters(!showModalFilters)}
              animationOutTiming={800}
              animationInTiming={1000}
              animationIn={"fadeIn"}
              animationOut={"fadeOut"}
            >
              <View
                style={{
                  width: "auto",
                  height: "auto",
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: 16 }}>
                  Lọc theo giá (VNĐ)
                </Text>
                <View
                  style={{
                    marginTop: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {dataPriceFilter.map((item, index) => (
                    <Text
                      key={index}
                      onPress={() =>
                        priceFilter === item
                          ? setPriceFilter()
                          : setPriceFilter(item)
                      }
                      style={{
                        fontFamily: FONTS.medium,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: COLORS.orange,
                        borderRadius: 5,
                        color:
                          item === priceFilter ? COLORS.white : COLORS.orange,
                        backgroundColor:
                          item === priceFilter ? COLORS.orange : COLORS.white,
                      }}
                    >
                      {item.data}
                    </Text>
                  ))}
                </View>
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: 16,
                    marginTop: 25,
                  }}
                >
                  Lọc theo diện tích (m2)
                </Text>

                <FlatList
                  data={formatData(dataAreaFilter, 2)}
                  style={{ marginTop: 15, marginBottom: 15 }}
                  renderItem={({ item, index }) => {
                    if (item.empty === true) {
                      return (
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            backgroundColor: "transparent",
                            padding: 10,
                            borderRadius: 5,
                            color: COLORS.orange,
                            flex: 1,
                            margin: 5,
                            alignSelf: "center",
                          }}
                        ></Text>
                      );
                    }
                    return (
                      <Text
                        onPress={() => {
                          areaFilter === item
                            ? setAreaFilter()
                            : setAreaFilter(item);
                        }}
                        style={{
                          fontFamily: FONTS.medium,
                          padding: 10,
                          borderWidth: 1,
                          borderColor: COLORS.orange,
                          borderRadius: 5,
                          marginRight: 15,
                          width: "40%",
                          marginBottom: 10,
                          alignSelf: "center",
                          color:
                            item === areaFilter ? COLORS.white : COLORS.orange,
                          backgroundColor:
                            item === areaFilter ? COLORS.orange : COLORS.white,
                        }}
                      >
                        {item.data}
                      </Text>
                    );
                  }}
                  numColumns={2}
                  keyExtractor={(item) => item.id}
                />

                <ButtonFlex
                  title={"Áp dụng"}
                  onPress={() => setShowModalFilters(!showModalFilters)}
                  stylesText={{ fontSize: 16, fontFamily: FONTS.semiBold }}
                  stylesButton={{ paddingVertical: 15 }}
                />
              </View>
            </Modal>

          </View>
        </View>
        <FlatList
              showsVerticalScrollIndicator={false}
              data={searchList}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("PostDetail");
                  }}
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: COLORS.white,
                    padding: 10,
                    marginTop: 10,
                    marginBottom: 5,
                    flexDirection: "row",
                    borderBottomWidth: 2,
                    borderBottomColor: COLORS.greyPastel
                  }}
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
                      paddingTop: 5,
                    }}
                  >
                    <Text
                      style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}
                      numberOfLines={2}
                    >
                      <Icon name="location-sharp" color={COLORS.orange} size={14} style={{alignSelf: 'center'}}/> 

                      {" "}{item.address}
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: 12,
                        color: COLORS.grey,
                        marginTop: 5,
                      }}
                    >
                      Diện tích: {item.time} m2
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: 14,
                        color: COLORS.orange,
                        marginTop: 5,
                      }}
                    >
                      7.200.000đ/1 tháng
                    </Text>
                  </View>
  
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              style={{ backgroundColor: COLORS.white }}
            />
      </View>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  boxInput: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 15,
    paddingRight: 15,
    paddingVertical: 8,
    backgroundColor: "#F6F6F5",
    flex: 1,
  },
  input: {
    height: 36,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    fontFamily: FONTS.medium,
    flex: 1,
  },
});
