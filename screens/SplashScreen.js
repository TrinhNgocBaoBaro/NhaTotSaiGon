import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoadingModal from "../components/LoadingModal";
import COLORS from "../constants/color";

const SplashScreen = () => {
  return (
    <>
      <View style={{ backgroundColor: COLORS.orange, flex: 1 }}></View>
      <LoadingModal modalVisible={true} color={'white'} />
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
