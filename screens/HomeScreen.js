import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import COLORS from "../constants/color";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
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
        <View style={{ justifyContent: "center",  marginLeft: 20, flexDirection: 'column'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>Nhà Tốt</Text>
          <Text style={styles.textTitle}>Sài Gòn</Text>

        </View>
        <Pressable onPress={() => {}}>
          <View
            style={{
              marginRight: 20,
              width: 40,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Icon name={"heart"} size={28} color={"black"} />
          </View>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>HomeScreen</Text>
      </View>
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
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
