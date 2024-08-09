import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
// import "react-native-url-polyfill/auto";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-white text-3xl">ScanForge</Text>

          <CustomButton
            title="Get Started"
            handlePress={() => router.push("/scan")}
            containerStyles="p-4 mt-10"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
