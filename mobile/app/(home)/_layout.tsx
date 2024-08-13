import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const HomeLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="scan" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor="#F87171" style="light" />
    </>
  );
};

export default HomeLayout;
