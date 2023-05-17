import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { PRIMARYCOLOR } from "../config/colors";

export default function MenuComponent({ image, title, type, setType }) {
  const handelType = () => setType(title);
  console.log(title);
  return (
    <TouchableOpacity onPress={handelType}>
      <View className="justify-center items-center ">
        <View
          className={`rounded-full shadow-sm shadow-black justify-center items-center w-20 h-20 ${
            type.toLowerCase() == title.toLowerCase()
              ? "bg-white "
              : "bg-gray-200"
          }  `}
        >
          <Text>{image}</Text>
        </View>
        <Text className={` text-lg font-bold text-primary mt-3`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
