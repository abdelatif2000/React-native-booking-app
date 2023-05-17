import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { ScrollView } from "react-native";
import MenuComponent from "../components/MenuComponent";
import { Camps, Events, Hotels, Trips } from "../assets";
import { PRIMARYCOLOR, SECONDARYTCOLOR } from "../config/colors";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ItemComponent from "../components/ItemComponent";
import { getPlacesData } from "../api";
import { styles } from "../styles/style";
import * as Location from "expo-location";

export default function DiscoverScreen() {
  const navigation = useNavigation();
  const [type, setType] = useState("Hotel");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    northeast: { lat: 35.9343999679426, lng: -0.9969757407160921 },
    southwest: { lat: 27.66726931813377, lng: -13.30440006672158 },
  });
  const [data, setdata] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    console.log("loading data...");
    setIsLoading(true);
    getPlacesData(location).then((data) => {
      setdata(data);
      setIsLoading(false);
    });
  }, [location]);
  //getCurrentPosition
  useEffect(() => {
    console.log("Getting Current Position...");
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }
    getCurrentLocation();
  };

  const getCurrentLocation = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = coords;
      console.log("Current Location:", latitude, longitude);
      // Use the latitude and longitude as needed.
    } catch (error) {
      console.error("Error getting current location:", error);
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
      className="flex-1   w-[95%] mx-auto bg-white"
    >
      <View className="mb-5">
        <Text className={`font-bold text-3xl text-primary`}>Discover</Text>
        <Text className="text-2xl text-[#5f7582]">The Beauty Today</Text>
      </View>

      <View className="text-lg bg-white items-center   rounded-xl shadow-xl shadow-gray-900 min-h-[60px]  px-10  flex-row">
        <View className="absolute top-[14px] left-1 z-40 ">
          <FontAwesome5 name="search" color={SECONDARYTCOLOR} size={30} />
        </View>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={"geometry"}
          fetchDetails={true}
          placeholder="Search..."
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            setLocation(details?.geometry?.viewport);
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyAjR-9ip_tDhGwUMWl15ECrwkkH1QZZkIA",
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color={PRIMARYCOLOR} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Begin Items */}
          <View className="justify-between mt-5  items-center flex-row">
            <MenuComponent
              image={<MaterialIcons name="house" size={40} color={PRIMARYCOLOR} />}
              title="Hotel"
              type={type}
              setType={setType}
            />

            <MenuComponent
              image={
                <MaterialIcons name="celebration" size={40} color={PRIMARYCOLOR} />
              }
              title="Event"
              type={type}
              setType={setType}
            />

            <MenuComponent
              image={
                <MaterialCommunityIcons name="forest" size={40} color={PRIMARYCOLOR} />
              }
              title="Camp"
              type={type}
              setType={setType}
            />

            <MenuComponent
              image={<FontAwesome5 name="fly" size={40} color={PRIMARYCOLOR} />}
              title="Trips"
              type={type}
              setType={setType}
            />
          </View>

          <View className="m-5  ">
            <View>
              <View className="items-center flex-row justify-between mb-5">
                <Text className="text-secondaryFont font-bold text-primary">
                  Top Trips
                </Text>
                <TouchableOpacity>
                  <View className={`flex-row items-center`}>
                    <Text className="mr-2  font-bold text-secondary  text-secondaryFont text-xl">
                      Explore
                    </Text>
                    <FontAwesome5
                      name="arrow-right"
                      color={SECONDARYTCOLOR}
                      size={23}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="justify-evenly mt-2 items-center  flex-wrap flex-row">
            {data?.length > 0 ? (
              data?.map((item, key) => {
                if (item?.photo?.images?.medium?.url) {
                  return (
                    <ItemComponent
                      key={key}
                      name={item?.name}
                      image={item?.photo?.images?.medium?.url}
                      location={item?.location_string}
                      details={item}
                    />
                  );
                }
              })
            ) : (
              <Text className="">No Data Found !</Text>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
