import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { SECONDARYTCOLOR } from "../config/colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ItemComponent({ name, image, location, details }) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemDetails", { details: details })}
      className="justify-center  mb-3 items-center rounded-xl shadow-xl shadow-gray-900  p-2  bg-[#efefef] w-[48%] h-60"
    >
      <View className="w-full h-40 ">
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="w-full h-full rounded-xl"
        />
      </View>

      <View className="w-full pt-2">
        <Text className="font-semibold text-xl text-primary">
          {name?.length > 10 ? name.slice(0, 10) + "..." : name}
        </Text>
        <Text className="font-semibold  text-primary w-full">
          <Entypo name="location-pin" size={20} color={SECONDARYTCOLOR} />
          <Text className="ml-10 text-secondary">
            {location?.length > 10 ? location.slice(0, 10) + "..." : location}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}
