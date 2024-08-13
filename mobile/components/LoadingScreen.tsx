import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { images } from "../constants";

type RootParamList = {
  Loading: undefined;
  scan: undefined;
};

const LoadingScreen = () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("scan"); // Replace 'Scan' with the name of your scan screen
    }, 3000); // Adjust the delay as needed (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image source={images.QR} className="w-[200px] h-[200px] mb-[20px]" />
      <Text className="text-[24px] bg-[#333] font-psemibold">ScanForge</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff", // Adjust background color if needed
//   },
//   logo: {
//     width: 200, // Adjust size as needed
//     height: 200,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 24, // Adjust font size as needed
//     color: "#333", // Adjust text color as needed
//   },
// });

export default LoadingScreen;
