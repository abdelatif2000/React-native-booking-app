import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { PRIMARYCOLOR, SECONDARYTCOLOR } from "../config/colors";
import {
  Entypo,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import StatisticalComponent from "../components/StatisticalComponent";
import { styles } from "../styles/style";

const ItemDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const details = route?.params?.details;
  console.log(details);

  return (
    <SafeAreaView
      style={styles.container}
      className={` flex-1   w-[95%] mx-auto`}
    >
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        <View className="justify-center   items-center rounded-2xl shadow-gray-900 mb-5 w-full h-[300px]">
          <Image
            resizeMode="cover"
            source={{
              uri: details?.photo?.images?.medium?.url,
            }}
            className="w-full h-full rounded-xl"
          />
          <View className="absolute top-5 right-5 left-5 flex-row flex-1 justify-between ">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="rounded-lg bg-white w-[50px] h-[50px] items-center justify-center "
            >
              <Fontisto name="angle-left" size={24} color={PRIMARYCOLOR} />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-lg bg-primary w-[50px] h-[50px] items-center justify-center">
              <FontAwesome5 name="heart" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View className="absolute bottom-5 left-5 right-5 flex flex-row justify-between   ">
            <Text className="text-white text-secondaryFont font-bold">
              {" "}
              {details?.price}
            </Text>
            <Text className="text-white rounded-md bg-primary p-1">
              {details?.open_now_text}
            </Text>
          </View>
        </View>
        <View className="w-full mb-5  pt-2">
          <Text className="font-semibold text-2xl text-primary">
            {details?.name}
          </Text>
          <Text className="font-semibold  text-primary w-full">
            <Entypo name="location-pin" size={20} color={SECONDARYTCOLOR} />
            <Text className="ml-10 text-secondary text-1xl">
              {details?.location_string}
            </Text>
          </Text>
        </View>
        <View className="flex-row items-center justify-between mb-5">
          <StatisticalComponent
            value={details?.rating}
            bgColor="bg-orange-200"
            title={"2k rating"}
            icon={<Ionicons name="star" size={24} color="#d58474" />}
          />
          <StatisticalComponent
            value={details?.num_reviews}
            bgColor="bg-blue-200"
            title={"Reviews"}
            icon={
              <MaterialIcons name="rate-review" size={24} color="#60c0f7" />
            }
          />
          <StatisticalComponent
            value={4.8}
            bgColor="bg-blue-400"
            title={"Direction"}
            icon={<Entypo name="flag" size={24} color="#5259ea" />}
          />
        </View>
        {details?.description && (
          <Text className={` font-semibold mb-5`}>{details?.description}</Text>
        )}

        {details?.cuisine?.length > 0 && (
          <View className="flex-row flex-wrap mb-5">
            {details?.cuisine?.length > 0 &&
              details?.cuisine?.map((item) => {
                return (
                  <Text
                    key={item?.key}
                    className="text-white rounded-md bg-cyan-700 mr-1 p-1 mb-2 "
                  >
                    {item?.name}
                  </Text>
                );
              })}
          </View>
        )}
        <View className="bg-gray-200 h-auto p-2 rounded-lg mb-2">
          {details?.phone && (
            <View className="flex-row mb-1 items-center">
              <View className="mr-5">
                <MaterialIcons name="phone" size={30} color="#07636b" />
              </View>
              <Text className="font-bold mf-5 ">{details?.phone}</Text>
            </View>
          )}
          {details?.email && (
            <View className="flex-row mb-1 items-center">
              <View className="mr-5">
                <MaterialIcons name="email" size={30} color="#07636b" />
              </View>
              <Text className="font-bold mf-5 ">{details?.email}</Text>
            </View>
          )}
          {details?.address && (
            <View className="flex-row mb-1 items-center">
              <View className="mr-5">
                <MaterialIcons name="location-pin" size={30} color="#07636b" />
              </View>
              <Text className="font-bold mf-5 ">{details?.address}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity
        className={` flex-row bg-primary  rounded-lg h-20 items-center justify-center relative bottom-0 right-0 left-0`}
      >
        <Text className={`mr-5 text-white font-bold text-3xl `}>Book Now</Text>
        <FontAwesome5 name="arrow-right" color="white" size={23} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ItemDetailsScreen;
