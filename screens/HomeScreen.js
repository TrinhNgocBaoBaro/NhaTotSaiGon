import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../constants/color";
import Icon from "react-native-vector-icons/Ionicons";
import FONTS from "../constants/font";
import TopPlacesCarousel from "../components/TopPlacesCarousel";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.top}>
        {/* <Pressable onPress={() => {}}>
          <View
            style={{
              height: 40,
              width: 40,
              marginLeft: 20,
              justifyContent: "center",
            }}
          >
            <Icon name="chevron-back-outline" size={28} color={"black"} />
          </View>
        </Pressable> */}
        <View
          style={{
            justifyContent: "center",
            marginLeft: 20,
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/553/553416.png",
            }}
            style={{ height: 54, width: 54 }}
          />
          <View
            style={{
              justifyContent: "center",
              marginLeft: 10,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: FONTS.bold,
                color: COLORS.grey,
                textShadowColor: "#d5d5d5",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 5,
              }}
            >
              Nhà Tốt
            </Text>
            <Text style={styles.textTitle}>Sài Gòn</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                marginRight: 10,
                width: 40,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Icon name={"heart-outline"} size={40} color={"orange"} />
            </View>
          </TouchableOpacity>
          <View style={{ marginRight: 20, justifyContent: "center" }}>
            <Pressable>
              <Image
                source={{
                  uri: "https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/438238559_1143642673426668_6656372791733229549_n.jpg?stp=c2.0.200.200a_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-2s72PAG7cEQ7kNvgEXAYaA&_nc_ht=scontent.fsgn15-1.fna&oh=00_AYAE6pxdrTkzfxHAGoHxzJfSAVLf9yEAF-BEkZqeKL7DBw&oe=6660C602",
                }}
                style={{ height: 40, width: 40, borderRadius: 50 }}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={styles.boxInput}>
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm nhà trọ, phòng trọ..."
            // onFocus={() => {navigation.navigate("Tìm kiếm")}}
          />
          <Icon name="search" size={23} color={COLORS.grey} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontFamily: FONTS.bold, fontSize: 18 }}>
              Gợi ý cho bạn
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: 14,
                  textDecorationLine: "underline",
                  color: COLORS.grey,
                }}
              >
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
          <TopPlacesCarousel />
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 20, marginBottom: 60 }}>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
          <Text style={{ fontFamily: FONTS.bold, fontSize: 18 }}>Tin mới nhất</Text>
          <TouchableOpacity>
              <Icon name="options" color={COLORS.grey} size={23}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("PostDetail")}
            style={{
              marginTop: 20,
              marginBottom: 0,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/02/22/cho-thue-phong-tro_1613975723.jpg",
                }}
                style={{ height: 200, width: "auto" }}
              />
              <View
                  style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>1.500.000 đ</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Icon name="location-sharp" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, flexShrink: 1  }}>
                  Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-tray" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, fontSize: 14 }}>
                  Diện tích: 50 m2
                </Text>
              </View>
              <Text style={{fontFamily: FONTS.semiBold, color: COLORS.grey, fontSize: 13}}>10 phút trước</Text>
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("PostDetail")}
            style={{
              marginTop: 20,
              marginBottom: 0,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://baohanam-fileserver.nvcms.net/IMAGES/2023/09/13/20230913181412-97tro.jpg",
                }}
                style={{ height: 200, width: "auto" }}
              />
              <View
                  style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>3.000.000 đ</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Icon name="location-sharp" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, flexShrink: 1  }}>
                  Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-tray" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, fontSize: 14 }}>
                  Diện tích: 70 m2
                </Text>
              </View>
              <Text style={{fontFamily: FONTS.semiBold, color: COLORS.grey, fontSize: 13}}>1 giờ trước</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("PostDetail")}
            style={{
              marginTop: 20,
              marginBottom: 0,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_EcqcGnIaUjkMyVVFrgxVEV8HVilApXvx0QFJZRc7wr3DbYLjpwseMEGLTjONbYe7Nk&usqp=CAU",
                }}
                style={{ height: 200, width: "auto" }}
              />
              <View
                  style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>750.000 đ</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Icon name="location-sharp" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, flexShrink: 1  }}>
                  Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-tray" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, fontSize: 14 }}>
                  Diện tích: 26 m2
                </Text>
              </View>
              <Text style={{fontFamily: FONTS.semiBold, color: COLORS.grey, fontSize: 13}}>3 ngày trước</Text>
              </View>
            </View>
          </TouchableOpacity>



          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("PostDetail")}
            style={{
              marginTop: 20,
              marginBottom: 0,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://vatlieuso.com/wp-content/uploads/2021/10/chi-phi-xay-nha-tro.jpg",
                }}
                style={{ height: 200, width: "auto" }}
              />
              <View
                  style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>1.500.000 đ</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Icon name="location-sharp" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, flexShrink: 1  }}>
                  Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-tray" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, fontSize: 14 }}>
                  Diện tích: 50 m2
                </Text>
              </View>
              <Text style={{fontFamily: FONTS.semiBold, color: COLORS.grey, fontSize: 13}}>10 phút trước</Text>
              </View>
            </View>
          </TouchableOpacity>






          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("PostDetail")}
            style={{
              marginTop: 20,
              marginBottom: 0,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://baohanam-fileserver.nvcms.net/IMAGES/2023/09/13/20230913181412-97tro.jpg",
                }}
                style={{ height: 200, width: "auto" }}
              />
              <View
                  style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>1.500.000 đ</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Icon name="location-sharp" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, flexShrink: 1  }}>
                  Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-tray" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, fontSize: 14 }}>
                  Diện tích: 50 m2
                </Text>
              </View>
              <Text style={{fontFamily: FONTS.semiBold, color: COLORS.grey, fontSize: 13}}>10 phút trước</Text>
              </View>
            </View>
          </TouchableOpacity>





          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("PostDetail")}
            style={{
              marginTop: 20,
              marginBottom: 0,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://baohanam-fileserver.nvcms.net/IMAGES/2023/09/13/20230913181412-97tro.jpg",
                }}
                style={{ height: 200, width: "auto" }}
              />
              <View
                  style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>1.500.000 đ</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Icon name="location-sharp" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, flexShrink: 1  }}>
                  Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-tray" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, fontSize: 14 }}>
                  Diện tích: 50 m2
                </Text>
              </View>
              <Text style={{fontFamily: FONTS.semiBold, color: COLORS.grey, fontSize: 13}}>10 phút trước</Text>
              </View>
            </View>
          </TouchableOpacity>





          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=> navigation.navigate("PostDetail")}
            style={{
              marginTop: 20,
              marginBottom: 0,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://baohanam-fileserver.nvcms.net/IMAGES/2023/09/13/20230913181412-97tro.jpg",
                }}
                style={{ height: 200, width: "auto" }}
              />
              <View
                  style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>1.500.000 đ</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Icon name="location-sharp" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, flexShrink: 1  }}>
                  Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-tray" size={20} color={COLORS.orange} />
                <Text style={{ fontFamily: FONTS.medium, marginLeft: 5, fontSize: 14 }}>
                  Diện tích: 50 m2
                </Text>
              </View>
              <Text style={{fontFamily: FONTS.semiBold, color: COLORS.grey, fontSize: 13}}>10 phút trước</Text>
              </View>
            </View>
          </TouchableOpacity>





        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  top: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 80,
  },

  textTitle: {
    fontSize: 24,
    color: COLORS.orange,
    fontFamily: FONTS.bold,
    textShadowColor: "#F7AB79",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  boxInput: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 0,
    marginRight: 15,
    marginLeft: 15,
    paddingRight: 15,
    paddingVertical: 8,
    backgroundColor: "#F6F6F5",
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
