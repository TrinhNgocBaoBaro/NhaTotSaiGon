import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/color";
import Swiper from "react-native-swiper";
import FONTS from "../constants/font";
import { ScrollView } from "react-native-gesture-handler";

const PostDetailScreen = ({ navigation }) => {

  const [showMoreDescription, setShowMoreDescription] = React.useState(false);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <View style={{ height: 300 }}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            activeDotColor={COLORS.orange}
            dotColor={COLORS.white}
            paginationStyle={{ marginBottom: 30 }}
          >
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png",
                }}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://vatlieuso.com/wp-content/uploads/2021/10/chi-phi-xay-nha-tro.jpg",
                }}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://cafefcdn.com/203337114487263232/2022/8/5/83-1659675881831241642789.jpeg",
                }}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://cafefcdn.com/203337114487263232/2022/8/5/83-1659675881831241642789.jpeg",
                }}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://cafefcdn.com/203337114487263232/2022/8/5/83-1659675881831241642789.jpeg",
                }}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
          </Swiper>
        </View>
        <View
          style={[
            styles.top,
            { position: "absolute", top: 0, left: 0, width: "100%" },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
          >
            <View
              style={{
                height: 40,
                width: 40,
                marginLeft: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
                borderRadius: 50,
              }}
            >
              <Icon name="arrow-back-outline" size={25} color={COLORS.orange} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
            <View
              style={{
                height: 40,
                width: 40,
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
                borderRadius: 50,
              }}
            >
              <Icon name={"heart-outline"} size={23} color={COLORS.orange} />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: -30,
            padding: 30,
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 1300,
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 16 }}>
            Cho thuê phòng trọ quận 9 giá rẻ, thuận đường đi lại,...
          </Text>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Icon name="location-sharp" size={20} color={COLORS.orange} />
            <Text
              style={{
                fontFamily: FONTS.medium,
                marginLeft: 10,
                flexShrink: 1,
              }}
            >
              Số 338 Đỗ Xuân Hợp, Phước Long A, Quận 9, TP. Hồ Chí Minh.
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon name="call" size={20} color={COLORS.orange} />
            <Text
              style={{
                fontFamily: FONTS.medium,
                marginLeft: 10,
                flexShrink: 1,
              }}
            >
              0123456789
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon name="file-tray" size={20} color={COLORS.orange} />
            <Text
              style={{
                fontFamily: FONTS.medium,
                marginLeft: 10,
                flexShrink: 1,
              }}
            >
              Diện tích: 50 m2
            </Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontFamily: FONTS.bold, fontSize: 15 }}>
              Mô tả chi tiết
            </Text>
            <Text style={{ fontFamily: FONTS.medium, fontSize: 13, marginTop: 10, lineHeight: 30 }} numberOfLines={showMoreDescription ? undefined : 2}>
              Cho thuê CCMN tại Cổng Đồng, KDT Văn Khê, Hà Đông Còn 1 phòng Diện
              tích: 25m2, có gác xép và kho chứa đồ thích hợp cho gia đình ở
              Khoá vân tay, để xe miễn phí Nhà 7 tầng có thang máy, nhà mới xây
              xong Nhà liền kề, đường đi 2 ô tô to tránh nhau Tiện ích xung
              quanh gần trường học, gần chợ, bus nhanh BRT, bus thường, aeon
              mall hà đông....
            </Text>
            <TouchableOpacity
              onPress={()=> setShowMoreDescription(!showMoreDescription)}
            >
            <Text style={{fontFamily: FONTS.semiBold, marginTop: 5, color: COLORS.blue}}>
              {showMoreDescription ? 'Ẩn bớt' : 'Xem thêm'}
            </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Image
              source={{
                uri: "https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/438238559_1143642673426668_6656372791733229549_n.jpg?stp=c2.0.200.200a_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-2s72PAG7cEQ7kNvgEXAYaA&_nc_ht=scontent.fsgn15-1.fna&oh=00_AYAE6pxdrTkzfxHAGoHxzJfSAVLf9yEAF-BEkZqeKL7DBw&oe=6660C602",
              }}
              style={{ height: 50, width: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: FONTS.semiBold, fontSize: 16 }}>
                Nguyễn Lê Hữu
              </Text>
              <Text style={{ fontFamily: FONTS.medium, fontSize: 11 }}>
                lehuu123@gmail.com
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: 16 }}>
              Bình luận (6)
            </Text>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
              <Image
                source={{
                  uri: "https://i.sstatic.net/l60Hf.png",
                }}
                style={{ height: 35, width: 35, borderRadius: 50 }}
              />
              <View style={{ marginLeft: 15, height: "auto", width: "80%" }}>
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    marginBottom: 5,
                    color: COLORS.orange,
                  }}
                >
                  Trịnh Ngọc Bảo
                </Text>
                <View
                  style={{
                    backgroundColor: COLORS.darkGrey,
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontFamily: FONTS.medium }}>
                    Nhấn zô hiện pop up hoặc qua trang cá nhân của ngta xem
                    thông tin đúng k
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20, flexDirection: "row" }}>
              <Image
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
                }}
                style={{ height: 35, width: 35, borderRadius: 50 }}
              />
              <View
                style={{
                  marginLeft: 15,
                  height: "auto",
                  width: "80%",
                  backgroundColor: COLORS.darkGrey,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontFamily: FONTS.medium }}>
                  Người thuê thôi chứ người cho thuê t nghĩ là bỏ caia nút đó đi
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 20, flexDirection: "row" }}>
              <Image
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
                }}
                style={{ height: 35, width: 35, borderRadius: 50 }}
              />
              <View
                style={{
                  marginLeft: 15,
                  height: "auto",
                  width: "80%",
                  backgroundColor: COLORS.darkGrey,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontFamily: FONTS.medium }}>
                  Thường bên m hiện ra mới dùng chứ xử lý dưới be chi
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 20, flexDirection: "row" }}>
              <Image
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
                }}
                style={{ height: 35, width: 35, borderRadius: 50 }}
              />
              <View
                style={{
                  marginLeft: 15,
                  height: "auto",
                  width: "80%",
                  backgroundColor: COLORS.darkGrey,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontFamily: FONTS.medium }}>
                  Còn lưu db string thì m xử lý sao zô db cho nó đúng
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PostDetailScreen;

const styles = StyleSheet.create({
  top: {
    // marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    height: 80,
  },
  textTitle: {
    fontSize: 20,
    color: "white",
    fontFamily: FONTS.semiBold,
  },
  wrapper: {},
  img: {
    width: "100%",
    height: 300,
    borderRadius: 0,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
