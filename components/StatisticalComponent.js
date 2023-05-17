import { View, Text } from "react-native";
import React from "react";

const StatisticalComponent = ({ icon, title, value ,bgColor}) => {
  return (
    <View className="flex-row">
      <View className={`rounded-xl ${bgColor} w-[50px] h-[50px] items-center justify-center mr-2`}>
        {icon}
      </View>
      <View>
        <Text className="font-medium">{value}</Text>
        <Text className="font-medium">{title}</Text>
      </View>
    </View>
  );
};

export default StatisticalComponent;
