import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
import { PRIMARYCOLOR } from "../config/colors";

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 w-[95%] mx-auto">
      <View className="flex h-20 flex-row ml-7 mt-7 mb-6 items-center  ">
        <View className="  bg-[#010b0a] rounded-full items-center justify-center w-20 h-20">
          <Text className={`text-primary text-4xl font-semibold`}>Go</Text>
        </View>
        <Text className="text-4xl font-semibold">Travel</Text>
      </View>

      <Text className="text-4xl mb-3 text-gray-600 ml-7 ">
        Enjoy the trip with
      </Text>
      <Text className={`text-4xl text-primary mb-4 font-semibold ml-7`}>
        Good U
      </Text>
      <Text className="text-base text-gray-600 ml-7 ">
        Whether it's a short weekend getaway or a long-term adventure
      </Text>

      <View
        className={`bg-primary rounded-full   absolute -right-40 bottom-[90] w-96 h-96`}
      />
      <View className=" bg-[#e99265] rounded-full   absolute -bottom-[40] -left-[120]  w-96 h-96" />

      <View
        className={`border-primary border-t-4 border-r-2 border-l-2 border-b-0 self-center  z-20 items-center   justify-center absolute rounded-full bottom-20 w-24 h-24`}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <View
            className={`bg-primary rounded-full  items-center   justify-center  w-20 h-20`}
          >
            <Text className="  text-white text-4xl  font-semibold">Go</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Animatable.View
        animation="fadeIn"
        easing="ease-in-out"
        className="absolute flex-1 bottom-0 z-10 items-center justify-center  w-96 h-[500]"
      >
        <ImageBackground
          source={require("../assets/hero.png")}
          resizeMode="cover"
          className="w-full h-full"
        ></ImageBackground>
      </Animatable.View>
    </SafeAreaView>
  );
}
