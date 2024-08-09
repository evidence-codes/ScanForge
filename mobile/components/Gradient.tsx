import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import { styled } from "nativewind";

const CustomGradient = styled(LinearGradient);

const Gradient = () => {
  return (
    <View style={styles.container}>
      {/* Custom Gradient Background */}
      <CustomGradient
        colors={["#fb8817", "#ff4b01", "#c12127", "#e02aff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full h-64"
      >
        <Text className="text-white text-2xl">Custom Gradient Background</Text>
      </CustomGradient>

      {/* Main Gradient Background */}
      <CustomGradient
        colors={["#fe5196", "#f77062"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full h-64 mt-4"
      >
        <Text className="text-white text-2xl">Main Gradient Background</Text>
      </CustomGradient>

      {/* Gradient Picture Background */}
      <View className="h-64 w-full mt-4 bg-black">
        <CustomGradient
          colors={[
            "rgba(176, 42, 42, 0.16)",
            "rgba(176, 42, 42, 0.56)",
            "rgba(176, 42, 42, 0.8)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0"
        />
        <Image
          source={{
            uri: "https://static-production.npmjs.com/abf53a31b2da4657a1a004ee9358551c.png",
          }}
          className="h-full w-full object-cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Gradient;
