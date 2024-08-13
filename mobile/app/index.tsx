import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Scan from "./(home)/scan";
// import CustomButton from "../components/CustomButton";
// import "react-native-url-polyfill/auto";

export default function App() {
  return (
    <SafeAreaView className="">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Scan />
        {/* <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-white text-3xl">ScanForge</Text>
        </View> */}
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
