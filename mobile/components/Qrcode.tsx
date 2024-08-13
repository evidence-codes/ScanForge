import { View, Text, Image } from "react-native";
import { useState } from "react";
import { Platform, Alert, ToastAndroid } from "react-native";
import FormField from "./FormField";
import { images } from "@/constants";
import CustomButton from "./CustomButton";

import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import * as Notifications from "expo-notifications";

const Qrcode = () => {
  const [form, setForm] = useState({
    text: "",
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [qrData, setQrData] = useState<string | null>(null);

  const handleChange = (text: string) => {
    setInputValue(text);
    setForm({ ...form, text });
  };

  const handleGenerateClick = async () => {
    try {
      const response = await fetch(
        "https://scanforge.onrender.com/api/qr/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: inputValue }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("QR Code generated:", result);
        setQrData(result.data.image);
      } else {
        console.error("Failed to generate QR code");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Ensure notification permissions// Request notification permissions
  async function requestNotificationPermissions() {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      console.log("Requesting notification permissions");
      await Notifications.requestPermissionsAsync();
      console.log("Notification permission status:", status);
    }
  }
  const handleDownloadClick = async () => {
    if (!qrData) {
      Alert.alert("Error", "QR code data is not available.");
      return;
    }

    const fileName = "qrcode.png";
    const base64Data = qrData;
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;

    try {
      // Write the file to the device
      await FileSystem.writeAsStringAsync(fileUri, base64Data, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log("Image saved to:", fileUri);

      if (Platform.OS === "ios") {
        // Share the file on iOS
        await Sharing.shareAsync(fileUri);
      } else {
        // Save the file to the device's media library on Android
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status === "granted") {
          await MediaLibrary.saveToLibraryAsync(fileUri);
          await requestNotificationPermissions(); // Ensure permissions are requested
          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Download Complete",
              body: "Image has been saved to gallery.",
            },
            trigger: null,
          });
        } else {
          Alert.alert(
            "Error",
            "Permission not granted to access media library."
          );
        }
      }
    } catch (error) {
      console.error("Error downloading image:", error);
      Alert.alert("Error", "Failed to download image.");
    }
  };
  return (
    <>
      <View>
        <View className="bg-red-400 flex flex-col items-center pl-4 pr-4 pt-16 pb-20 sm:p-10">
          <View>
            <Text className="text-white font-bold sm:text-7xl text-4xl text-center">
              ScanForge QR Generation
            </Text>
            <Text className="text-center text-white sm:text-4xl text-xl pt-2 pl-8 pr-8 font-semibold">
              Instantly encode your data into codes
            </Text>
          </View>
          <View className="p-4">
            <FormField
              title="Enter Link or Text"
              value={form.text}
              placeholder="https://"
              handleChangeText={handleChange}
              otherStyles="p-4 sm:input-width w-80 rounded-xl  ... outline-transparent"
              keyboardType="string"
            />
            <View className="pb-4 items-center">
              {/* Conditionally render the generated QR code or the demo QR code */}
              {qrData ? (
                <Image
                  source={{ uri: `data:image/png;base64,${qrData}` }}
                  alt="Generated QR Code"
                  className="w-[300px] h-[300px]"
                  // style={{ width: "300px", height: "300px" }}
                />
              ) : (
                <Image
                  source={images.QR}
                  alt="Demo QR Code"
                  className="bg-white"
                />
              )}
            </View>
            <CustomButton
              title={qrData ? "Download" : "Generate"}
              handlePress={qrData ? handleDownloadClick : handleGenerateClick}
              containerStyles=" bg-red-500 hover:bg-orange-600 text-white"
              textStyles="font-semibold text-white"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Qrcode;
