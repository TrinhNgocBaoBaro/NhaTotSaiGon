import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  TextInput
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/color";
import Swiper from "react-native-swiper";
import FONTS from "../constants/font";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonFlex, ButtonFloatBottom } from "../components/Button";
import Modal from "react-native-modal";

const PostDetailScreen = ({ navigation }) => {

  const [showMoreDescription, setShowMoreDescription] = React.useState(false);
  const [showModalComment, setShowModalComment] = React.useState(false);

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
                  uri: "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/02/22/cho-thue-phong-tro_1613975723.jpg",
                }}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_EcqcGnIaUjkMyVVFrgxVEV8HVilApXvx0QFJZRc7wr3DbYLjpwseMEGLTjONbYe7Nk&usqp=CAU",
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
          </Swiper>
          <View
                  style={{elevation: 2, position: 'absolute', right: 10, bottom: 50, backgroundColor: COLORS.orange, padding: 10, borderRadius: 8 }}
              >
                  <Text style={{fontFamily: FONTS.bold, color: COLORS.white, fontSize: 17}}>11.500.000 đ</Text>
              </View>
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
                height: 50,
                width: 50,
                marginLeft: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
                borderRadius: 50,
              }}
            >
              <Icon name="arrow-back-outline" size={28} color={COLORS.orange} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
            <View
              style={{
                height: 50,
                width: 50,
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
                borderRadius: 50,
              }}
            >
              <Icon name={"heart-outline"} size={25} color={COLORS.orange} />
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
            marginBottom: 120,
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
            <Icon name="layers" size={20} color={COLORS.orange} />
            <Text
              style={{
                fontFamily: FONTS.medium,
                marginLeft: 10,
                flexShrink: 1,
              }}
            >
              Tiện ích: Wifi miễn phí, điện nước, gần chợ, trường học.
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
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 14, marginTop: 10, alignSelf: 'flex-end' }}>15 giờ trước</Text>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
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
              <Text style={{ fontFamily: FONTS.medium, fontSize: 12, marginTop: 5, color: COLORS.grey}}>
                Người đăng tin
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
                  uri: "https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/431764296_1830389587405425_4880708078341224054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QjPmZD9JHD0Q7kNvgEL-Wsi&_nc_ht=scontent.fsgn15-1.fna&oh=00_AYD3t1W87C8rLL-lx1PRLla7sdAE0jL3ICn8nABInCFT5w&oe=66637A1D",
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
                  Ẩn danh
                </Text>
              <View
                style={{
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
                  uri: "https://i.sstatic.net/l60Hf.png",
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
      <TouchableOpacity
        onPress={()=>setShowModalComment(!showModalComment)}
        activeOpacity={0.9}
        style={{position: 'absolute', bottom: 100, right: 20, backgroundColor: COLORS.orange, 
                borderRadius: 50, padding: 20, alignSelf: 'flex-end', elevation: 5}}>
        <Icon name="chatbox-ellipses" color={COLORS.white} size={30}/>
      </TouchableOpacity>
      <ButtonFloatBottom title="Đặt lịch hẹn" buttonColor={COLORS.orange} onPress={()=>navigation.navigate("CreateAppointment")}/>
      <Modal isVisible={showModalComment} 
             onBackdropPress={()=> setShowModalComment(!showModalComment)}
             animationOutTiming={800}
      >
        <View style={{width: 'auto', height: 'auto', backgroundColor: COLORS.white, borderRadius: 10, padding: 20}}>
          <Text style={{fontFamily: FONTS.semiBold, fontSize: 18}}>Bình luận</Text>
          <TextInput
            style={{    
              height: 56,
              paddingLeft: 25,
              fontSize: 16,
              fontFamily: FONTS.medium,
              backgroundColor: COLORS.greyPastel,
              borderRadius: 10,
              marginVertical: 20
              }}
            placeholder="Aa..."
            maxLength={60}
          />
          <ButtonFlex title={"Gửi"} onPress={()=>setShowModalComment(!showModalComment)} 
                      stylesText={{fontSize: 16, fontFamily: FONTS.semiBold}}
                      stylesButton={{paddingVertical: 15}}
          />
        </View>
      </Modal>
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
