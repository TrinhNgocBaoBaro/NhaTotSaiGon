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

import createAxios from "../utils/axios";
const API = createAxios();

const CreatePostScreen = ({navigation}) => {

    const [images, setImages] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [utilities, setUtilities] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [area, setArea] = React.useState("");
    const [address, setAdress] = React.useState("");
    const [phone, setPhone] = React.useState("");

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
          {text: 'OK', onPress: ()=> {createPost(); navigation.navigate("Trang chủ")}},
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

          const payment = () => {
            const line_item = [
              {
                 "price_data":{
                    "currency":"vnd",
                    "product_data":{
                       "name":"Bài đăng",
                       "description":"Bài đăng ứng dụng Nhà Tốt Sài Gòn"
                    },
                    "unit_amount": 10000
                 },
                 "quantity":1
              }
           ]
           fetch(`${"http://localhost:3000"}/stripe/create-checkout-session`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              currency: "vnd",
              unit_amount: 10000,
              line_items: line_item,
              client_reference_id: "0354187011--HD1234",
              // stripe_success_url: "https://www.google.com/",
              // stripe_cancel_url: "https://www.facebook.com/",
            })
          })
          .then(function(response) {
            return response.json();
          })
          .then(function(session) {
            // our server error occurred
            if (session.error) {
              console.error('Our server error:', session.error);
              return session
            } else {
              const publish_key = "pk_test_51PFIBzGCFOEiUw2fhze5xe5fTEVhOXW9D7DdwnjTTfXD4CIkpIkDnZMB7zpupgPfhg0uSfgygA1uB7e0scoF96Gu006h9baxGm"
              var stripe = Stripe(publish_key);
              return stripe.redirectToCheckout({ sessionId: session.id });
            }
          })
          .catch(function(error) {
            console.error('Stripe error:', error);
          });
          }

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
      {/* <Button title="Checkout" onPress={payment}/> */}
    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
