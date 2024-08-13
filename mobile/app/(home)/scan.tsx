import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "expo-router";

import FormField from "../../components/FormField";

import CustomButton from "../../components/CustomButton";
import Header from "@/components/Header";
import Qrcode from "@/components/Qrcode";

const Scan = () => {
  return (
    // <SafeAreaView className="bg-white h-full">
    //   <ScrollView contentContainerStyle={{ height: "100%" }}>
    <>
      <Header />
      <Qrcode />
    </>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default Scan;
