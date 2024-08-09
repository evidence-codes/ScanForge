import { View, Text } from "react-native";
import { useState } from "react";

import FormField from "./FormField";

const Qrcode = () => {
  const [form, setForm] = useState({
    text: "",
  });
  return (
    <>
      <View>
        <View className="bg-red-300 flex flex-col items-center pl-4 pr-4 pt-16 pb-20 sm:p-10">
          <View>
            <Text className="text-white font-bold sm:text-7xl text-4xl text-center">
              ScanForge QR Generation
            </Text>
            <Text className="text-center text-white sm:text-4xl text-xl pt-2 pl-8 pr-8 font-semibold">
              Instantly encode your data into codes
            </Text>
          </View>
          <View className="p-4">
            {/* <Text className="text-white text-sm font-bold">
              Enter Link or Text
            </Text> */}
            <FormField
              title="Enter Link or Text"
              value={form.text}
              placeholder="https://"
              handleChangeText={(e) => setForm({ ...form, text: e })}
              otherStyles="p-4 sm:input-width w-80 rounded-xl  ... outline-transparent"
              keyboardType="string"
            />
            {/* <input
              type="text"
              placeholder="https://"
              className="p-4 sm:input-width w-80 rounded-xl  ... outline-transparent"
              onChange={handleChange}
            /> */}
            {/* <ul className="flex space-x-2 text-white font-semibold text-sm">
              <li
                className={`cursor-pointer ${
                  selectedFormat === "PNG" ? "underline decoration-2" : ""
                }`}
                onClick={() => handleClick("PNG")}
              >
                PNG
              </li>
              <li
                className={`cursor-pointer ${
                  selectedFormat === "JPG" ? "underline decoration-2" : ""
                }`}
                onClick={() => handleClick("JPG")}
              >
                JPG
              </li>
              <li
                className={`cursor-pointer ${
                  selectedFormat === "SVG" ? "underline decoration-2" : ""
                }`}
                onClick={() => handleClick("SVG")}
              >
                SVG
              </li>
            </ul> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Qrcode;
