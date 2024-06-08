import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Button } from "react-native";
import React from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../constants/color";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Ionicons";
import { ButtonFloatBottom } from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import Toast from 'react-native-toast-message';
import { useStripe } from "@stripe/stripe-react-native";
import { useIsFocused } from "@react-navigation/native";

import createAxios from "../utils/axios";
import LoadingModal from "../components/LoadingModal";
const API = createAxios();

const CreatePostScreen = ({navigation}) => {
    const isFocused = useIsFocused();

    const {initPaymentSheet, presentPaymentSheet } = useStripe();

    const [images, setImages] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [utilities, setUtilities] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [area, setArea] = React.useState("");
    const [address, setAdress] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);

    // React.useEffect(() => {
    //   console.log(price)
    // }, [price]);

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
          setImages([...images, result.assets[0]]);
        }
      };

      const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
      };

      const showButtonConfirm = () =>
        Alert.alert('Xác nhận', 'Bạn có muốn hoàn tất đăng tin thuê trọ?', [
          {
            text: 'Hủy',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: ()=> {openPaymentSheet();}},
        ]);

        const showToast = () => {
            Toast.show({
              type: 'success',
              text1: 'Thông báo',
              text2: 'Đăng tin thành công !👋',
            });
          }

          const createPost = async () => {
            try {
              const formCreatePost = new FormData();

              images.forEach((image) => {
                const localUri = image.uri;
                const filename = localUri.split("/").pop();
                const fileExtension = filename.split(".").pop();
          
                console.log("Local Uri: ", localUri);
                console.log("File Name: ", filename);
                console.log("File Extension: ", fileExtension);
          
                formCreatePost.append("image", {
                  uri: localUri,
                  name: filename,
                  type: `image/${fileExtension}`,
                });
              });

              formCreatePost.append("author", "6660807eac641bc87d297c7b");
              formCreatePost.append("title", title);
              formCreatePost.append("description", description);
              formCreatePost.append("utilities", utilities);
              formCreatePost.append("price", price);
              formCreatePost.append("area", area);
              formCreatePost.append("address", address);
              formCreatePost.append("is_active", false);

              console.log("formCreatePost nè: ", formCreatePost); 
              const response = await API.postWithHeaders(`/post/`, 
              formCreatePost ,
              {
                  "Content-Type": "multipart/form-data",
              }
              );
        
              if (response) {
                console.log(response);
                showToast(); 
              } else {
                console.log("Có lỗi khi đăng tin");
              }
            } catch (error) {
              console.log(error);
            }
          };   

          const fetchPaymentSheetParams = async () => {
            const response = await fetch('http://192.168.1.3:3000/stripe/create-payment-intent', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount: 20000, // Ví dụ: số tiền cần thanh toán (1000 cents = 10 USD)
              }),
            });
            if(response) console.log(response.clientSecret)
            const { clientSecret } = await response.json();
            return { clientSecret };
          };

          const initializePaymentSheet = async () => {
            const { clientSecret } = await fetchPaymentSheetParams();
              console.log("chạy vào init nè 4 ")
            const { error } = await initPaymentSheet({
              paymentIntentClientSecret: clientSecret,
              merchantDisplayName: 'Your Merchant Name',
              style: 'alwaysDark', // Optional
            });
        
            if (!error) {
              setIsLoading(false);
            } else {
              Alert.alert(`Error code: ${error.code}`, error.message);
            }
          };

          const openPaymentSheet = async () => {
            const { error } = await presentPaymentSheet();
        
            if (error) {
              Alert.alert(`Error code: ${error.code}`, error.message);
            } else {
              // Alert.alert('Success', 'Your payment was successful!');
              createPost();
              navigation.navigate("ListPost")
            }
          };

          React.useEffect(() => {
            initializePaymentSheet();
          }, [isFocused]);
        

  return (
    <>
      <Header
        title={"Đăng tin"}
        leftIcon={"close"}
        rightIcon={"newspaper-outline"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: COLORS.white, marginBottom: 80}} contentContainerStyle={{ padding: 20}}>
      <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Tiêu đề <Text style={{ color: COLORS.red }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="reader" size={18} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              placeholder="Nhập tiêu đề..."
              onChangeText={(txt)=>setTitle(txt.trim())}
            />
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Địa chỉ <Text style={{ color: COLORS.red }}>*</Text>
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
              onChangeText={(txt)=>setAdress(txt.trim())}

            />
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Số điện thoại liên hệ <Text style={{ color: COLORS.red }}>*</Text>
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
              placeholder="Nhập số điện thoại..."
              onChangeText={(txt)=>setPhone(txt.trim())}

            />
          </View>
        </View>

        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Tiện ích <Text style={{ color: COLORS.red }}></Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="layers" size={20} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              placeholder="VD: Wifi miễn phí, điện nước, gần trường học,..."
              onChangeText={(txt)=>setUtilities(txt.trim())}

            />
          </View>
        </View>


        <View style={{flexDirection: 'row'}}>
        <View style={{ marginBottom: 25, width: '50%' }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Giá phòng  (VNĐ) <Text style={{ color: COLORS.red }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="pricetags" size={18} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              inputMode="numeric"
              keyboardType="numeric"
              placeholder="VNĐ/tháng"
              onChangeText={(txt)=>setPrice(txt.trim())}

            />
          </View>
        </View>
        <View style={{ marginBottom: 25, width: '50%' }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Diện tích (m2) <Text style={{ color: COLORS.red }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="file-tray" size={18} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              inputMode="numeric"
              keyboardType="numeric"
              placeholder="Nhập diện tích..."
              onChangeText={(txt)=>setArea(txt.trim())}

            />
          </View>
        </View>
        </View>

        <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Mô tả chi tiết
          </Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 25 }}>
            <Icon name="create-outline" size={20} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                height: 100,
                flex: 1,
              }}
              placeholder="Nhập mô tả"
              multiline
              maxLength={150}
              numberOfLines={3}
              onChangeText={(txt) => setDescription(txt.trim())}

            />
          </View>

          <View>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15, marginBottom: 15 }}>
            Hình ảnh ({images.length}/6)
          </Text>
              <View style={{flexDirection: 'row', justifyContent:  'flex-start', marginBottom: 20,flexWrap: 'wrap'}}>
              {images.map((image, index) => (
                    <View key={index} style={{ marginBottom: 20, width: '30%', height:100, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: '3.33333333333333333333333333333333333333333333333333333333333333333%'}}>
                    {image ? 
                        <View style={{width: '100%', height: '100%'}}>
                        <Image source={{uri:  image.uri}}   width={"100%"} height={"100%"} style={{borderRadius: 5}}/>
                        <Icon name="close-circle" size={20} color={COLORS.orange} style={{position: 'absolute', right: -10, top: -10, backgroundColor: COLORS.white, borderRadius: 50}}  onPress={() => removeImage(index)} /> 

                        </View>
                        :
                        <Icon name="image-add" size={35} color={COLORS.grey}/> 
                    }
                    </View>
              ))}
              {images.length < 6 &&
                    <TouchableOpacity onPress={pickImage} style={{width: '30%', height:100, backgroundColor: COLORS.white, borderWidth: 2, borderColor: COLORS.darkGrey, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                        <Icon name="add" size={32} color={COLORS.grey}/>
                     </TouchableOpacity>
              }
              </View>
          </View>

      </ScrollView>
      <ButtonFloatBottom title={"Đăng"} 
        buttonColor={
        images.length > 0 && title && address && utilities && price && area && description ?
        COLORS.orange : COLORS.grey
        } 
        onPress={()=>{if(images.length > 0 && title && address && utilities && price && area && description) showButtonConfirm()} }
          />
      {/* <Button title="Checkout" onPress={openPaymentSheet}/> */}
      <LoadingModal modalVisible={isLoading}/>
    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
