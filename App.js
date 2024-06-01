import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import "expo-dev-client";

// import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import COLORS from "./constants/color";

const CustomTabBarButton = ({ onPress }) => (
  <View
    style={{
      width: 90,
      height: 90,
      borderRadius: 45,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      top: -50,
      elevation: 1,
    }}
  >
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name="add-outline" color={"white"} size={40} />
    </TouchableOpacity>
  </View>
);

const TabRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarLabelStyle: {
          fontWeight: "500",
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: COLORS.orange,
                  borderRadius: 50,
                  padding: 20,
                  marginTop: -40,
                  shadowColor:COLORS.orange,
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  elevation: 4
                }}
              >
                <Icon name="home" color="#fff" size={size} />
              </View>
            ): (<Icon name="home-outline" color={color} size={25} />)
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tìm kiếm"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: COLORS.orange,
                  borderRadius: 50,
                  padding: 20,
                  marginTop: -40,
                  shadowColor: COLORS.orange,
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  elevation: 4
                }}
              >
                <Icon name="search-outline" color="#fff" size={size} />
              </View>
            ) : (
              <Icon name="search-outline" color={color} size={28} />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Lịch hẹn"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: COLORS.orange,
                  borderRadius: 50,
                  padding: 20,
                  marginTop: -40,
                  shadowColor: COLORS.orange,
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  elevation: 4
                }}
              >
                <Icon name="calendar" color="#fff" size={size} />
              </View>
            ) : (
              <Icon name="calendar-outline" color={color} size={28} />
            )
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: COLORS.orange,
                  borderRadius: 50,
                  padding: 20,
                  marginTop: -40,
                  shadowColor: COLORS.orange,
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  elevation: 4
                }}
              >
                <Icon name="skull" color="#fff" size={size} />
              </View>
            ) : (
              <Icon name="skull-outline" color={color} size={28} />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          <Stack.Screen name="Home" component={TabRoute} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Appointment" component={AppointmentScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
