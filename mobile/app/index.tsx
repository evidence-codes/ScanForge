import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scan from "./(home)/scan";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Scan />
      </ScrollView>

      <StatusBar backgroundColor="#000000" style="light" />
    </SafeAreaView>
  );
}
