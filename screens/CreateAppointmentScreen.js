import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../constants/color";
import FONTS from "../constants/font";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const time = [
  {
    id: "1",
    time: "10:00",
  },
  {
    id: "2",
    time: "10:30",
  },
  {
    id: "3",
    time: "11:00",
  },
  {
    id: "4",
    time: "11:30",
  },
  {
    id: "5",
    time: "12:00",
  },
  {
    id: "6",
    time: "12:30",
  },
  {
    id: "7",
    time: "13:00",
  },
  {
    id: "8",
    time: "13:30",
  },
  {
    id: "9",
    time: "14:00",
  },
  {
    id: "10",
    time: "14:30",
  },
  {
    id: "11",
    time: "15:00",
  },
  {
    id: "12",
    time: "15:30",
  },
  {
    id: "13",
    time: "16:00",
  },
  {
    id: "14",
    time: "16:30",
  },
  {
    id: "15",
    time: "17:00",
  },
  {
    id: "16",
    time: "17:30",
  },
  {
    id: "17",
    time: "18:00",
  },
  {
    id: "18",
    time: "18:30",
  },
  {
    id: "19",
    time: "19:00",
  },
  {
    id: "20",
    time: "19:30",
  },
  {
    id: "21",
    time: "20:00",
  },
];

const CreateAppointmentScreen = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
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
            />
          </View>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 15 }}>
            Thời gian xem phòng <Text style={{ color: COLORS.red }}>*</Text>
          </Text>
          <Text style={{ fontFamily: FONTS.semiBold, marginTop: 20 }}>
            Chọn giờ
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 10 }}
          >
            {time.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderWidth: 2,
                  borderColor: COLORS.orange,
                  borderRadius: 8,
                  marginRight: 8,
                }}
                key={index}
              >
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: 15,
                    color: COLORS.orange,
                  }}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={{ fontFamily: FONTS.semiBold, marginTop: 20 }}>
            Chọn ngày
          </Text>
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
              backgroundColor: COLORS.orange,
              width: "50%",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                fontSize: 16,
              }}
            >
              06/03/2024
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
        </View>
      </ScrollView>
    </>
  );
};

export default CreateAppointmentScreen;

const styles = StyleSheet.create({});
