import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../constants/color";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Ionicons";
import { ButtonFloatBottom } from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import Toast from 'react-native-toast-message';

const CreatePostScreen = ({navigation}) => {

    const [images, setImages] = React.useState([]);

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
          {text: 'OK', onPress: ()=> {showToast(); navigation.navigate("Lịch hẹn")}},
        ]);

        const showToast = () => {
            Toast.show({
              type: 'success',
              text1: 'Thông báo',
              text2: 'Đăng tin thành công !👋',
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
            //   onChangeText={(newTextPhone) => setPhone(newTextPhone)}

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
      <ButtonFloatBottom title={"Đăng"} buttonColor={COLORS.orange} onPress={showButtonConfirm}/>

    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
