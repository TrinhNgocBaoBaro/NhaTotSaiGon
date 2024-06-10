import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../constants/color";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ButtonFloatBottom } from "../components/Button";

const time = [
  {
    id: "1",
    time: "08:00",
  },
  {
    id: "2",
    time: "08:30",
  },
  {
    id: "3",
    time: "09:00",
  },
  {
    id: "4",
    time: "09:30",
  },
  {
    id: "5",
    time: "10:00",
  },
  {
    id: "6",
    time: "10:30",
  },
  {
    id: "7",
    time: "11:00",
  },
  {
    id: "8",
    time: "11:30",
  },
  {
    id: "9",
    time: "12:00",
  },
  {
    id: "10",
    time: "12:30",
  },
  {
    id: "11",
    time: "13:00",
  },
  {
    id: "12",
    time: "13:30",
  },
  {
    id: "13",
    time: "14:00",
  },
  {
    id: "14",
    time: "14:30",
  },
  {
    id: "15",
    time: "15:00",
  },
  {
    id: "16",
    time: "15:30",
  },
  {
    id: "17",
    time: "16:00",
  },
  {
    id: "18",
    time: "16:30",
  },
  {
    id: "19",
    time: "17:00",
  },
  {
    id: "20",
    time: "17:30",
  },
  {
    id: "21",
    time: "18:00",
  },
];

const CreateAppointmentScreen = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [datePicked, setDatePicked] = React.useState(null);
  const [timePicked, setTimePicked] = React.useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDatePicked(date);
    hideDatePicker();
  };

  const showButtonConfirm = () =>
    Alert.alert('Xác nhận', 'Bạn có muốn hoàn tất đặt lịch hẹn?', [
      {
        text: 'Hủy',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate("DoneAppointment")},
    ]);

  function formatDatePicked(datePicked) {
    const day = datePicked.getDate();
    const month = datePicked.getMonth() + 1; 
    const year = datePicked.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
}
  return (
    <>
      <Header
        title={"Đặt lịch hẹn"}
        rightIcon={"calendar-outline"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.white }}
        contentContainerStyle={{ padding: 20 }}
      >
        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Họ và tên <Text style={{ color: COLORS.red }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="person" size={18} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              placeholder="Nhập họ và tên"
            />
          </View>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Số điện thoại <Text style={{ color: COLORS.red }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="call" size={18} color={COLORS.orange} />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.greyPastel,
                height: 50,
                marginHorizontal: 10,
                fontFamily: FONTS.medium,
                flex: 1,
              }}
              placeholder="Nhập số điện thoại"
              inputMode="numeric"
              keyboardType="numeric"
            //   onChangeText={(newTextPhone) => setPhone(newTextPhone)}

            />
          </View>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Thời gian xem phòng <Text style={{ color: COLORS.red }}>*</Text>
          </Text>
          <View style={{ marginTop: 20, flexDirection: 'row'}}>
          <Icon name="time-outline" size={18} color={COLORS.orange}/>
          <Text style={{ fontFamily: FONTS.semiBold, marginLeft: 5}}>
            Chọn giờ
          </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 10 }}
          >
            {time.map((item, index) => (
              <TouchableOpacity
                onPress={()=> setTimePicked(item.time)}
                activeOpacity={0.7}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderWidth: 2,
                  borderColor: COLORS.orange,
                  borderRadius: 8,
                  marginRight: 8,
                  backgroundColor: timePicked === item.time ? COLORS.orange : COLORS.white
                }}
                key={index}
              >
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: 15,
                    color:  timePicked === item.time ? COLORS.white : COLORS.orange,
                  }}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{ marginTop: 20, flexDirection: 'row'}}>
          <Icon name="calendar-outline" size={18} color={COLORS.orange}/>
          <Text style={{ fontFamily: FONTS.semiBold,  marginLeft: 5}}>
            Chọn ngày
          </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={showDatePicker}
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: COLORS.orange,
              borderRadius: 8,
              marginTop: 10,
              alignItems: "center",
              backgroundColor: datePicked ? COLORS.orange : COLORS.white,
              width: "50%",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: datePicked ? COLORS.white : COLORS.orange,
                fontSize: 16,
              }}
            >
              {datePicked ? formatDatePicked(datePicked) : "_ _ / _ _ / _ _ _ _"}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            positiveButton={{ label: "OK", textColor: COLORS.orange }}
            negativeButton={{ label: "Hủy", textColor: COLORS.grey }}
            minimumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}

          />
          <View style={{marginTop: 25, marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Ghi chú
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
              placeholder="Nhập ghi chú"
              multiline
              maxLength={150}
              numberOfLines={3}
            //   onChangeText={(newTextPhone) => setPhone(newTextPhone)}

            />
          </View>
        </View>
        </View>
      </ScrollView>
      <ButtonFloatBottom title={"Xác nhận"} buttonColor={COLORS.orange} onPress={showButtonConfirm}/>
    </>
  );
};

export default CreateAppointmentScreen;

const styles = StyleSheet.create({});
