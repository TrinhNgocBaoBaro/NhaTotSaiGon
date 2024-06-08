import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import COLORS from "../constants/color";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import LoadingModal from "../components/LoadingModal";
import { ButtonFloatBottom } from "../components/Button";
import * as ImagePicker from "expo-image-picker";

const EditProfileScreen = ({ navigation }) => {
  const [cardDetails, setCardDetails] = React.useState();
  const { confirmPayment, initPaymentSheet, presentPaymentSheet } = useStripe();

  const [aboutMe, setAboutMe] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [name, setName] = React.useState("Trịnh Ngọc Bảo");
  const [address, setAddress] = React.useState("50 Lê Văn Việt, Hiệp Phú, Quận 9, TP. Hồ Chí Minh");
  const [phone, setPhone] = React.useState("0838439296");
  const [images, setImages] = React.useState();

  React.useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission denied!");
      }
    })();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);


    if (!result.canceled) {
      setImages(result.assets[0]);
    }
  };

  const handlePayPress = async () => {
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "NhaTotSaiGon",
    });
    await presentPaymentSheet();
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Header
        title={"Chỉnh sửa thông tin"}
        colorBackground={COLORS.white}
        colorText={COLORS.orange}
        leftIcon={"close"}
        rightIcon={"create-outline"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}contentContainerStyle={{paddingBottom: 100}}
      >
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <View>
            <Image
              source={{
                uri: images ? images.uri : "https://lh3.googleusercontent.com/a/ACg8ocL-zaTUS9DJSiGYQ2kkuMKQUlMDzi6NFpbS3_w0CBZTZyp-5w=s96-c",
              }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 150,
                borderWidth: 2,
                borderColor: COLORS.orange,
              }}
            />
            <Icon2
              onPress={pickImage}
              name={"create"}
              size={22}
              color={COLORS.grey}
              style={{
                padding: 8,
                elevation: 5,
                backgroundColor: COLORS.white,
                borderRadius: 50,
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            />
          </View>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: 18,
                marginBottom: 10,
                marginRight: 5,
              }}
            >
              Trịnh Ngọc Bảo
            </Text>
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: 15,
                color: COLORS.grey,
              }}
            >
              ngbao1592001@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Quyền riêng tư
          </Text>
          <TouchableOpacity>
            <Icon1
              name={aboutMe && aboutMe ? "toggle-on" : "toggle-off"}
              size={28}
              color={aboutMe && aboutMe ? COLORS.orange : COLORS.grey}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Tên hiển thị
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="person" size={20} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              placeholder="Nhập tên hiển thị"
              onChangeText={(txt)=>setName(txt)}
              value={name}

            />
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Địa chỉ
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="location-sharp" size={20} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              placeholder="VD: 50 Lê Văn Việt, Hiệp Phú, Quận 9,..."
              onChangeText={(txt)=>setAddress(txt)}
              value={address}
              multiline
              numberOfLines={2}
            />
          </View>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Số điện thoại
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="call" size={20} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              placeholder="VD: 50 Lê Văn Việt, Hiệp Phú, Quận 9,..."
              onChangeText={(txt)=>setPhone(txt)}
              value={phone}
            />
          </View>
        </View>
      </ScrollView>
      <ButtonFloatBottom title={"Cập nhật"} buttonColor={COLORS.orange} />
      {/* <View style={styles.container}>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={()=> {handlePayPress(); console.log("haha")}} title="Pay" disabled={!cardDetails?.complete} />
    </View> */}
      <LoadingModal modalVisible={isLoading} />
    </>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});
