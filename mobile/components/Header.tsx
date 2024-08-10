import { View, Text } from "react-native";

function Header() {
  // const navigate = useNavigate();

  // const handleGetStartedClick = () => {
  //   // Navigate to the "auth" page
  //   navigate("/auth");
  // };

  return (
    <>
      {/* <View className="h-3 bg-red-500"></View> */}
      <View className="p-10 flex justify-between py-4 md:px-10 px-7">
        <Text className="font-bold text-2xl cursor-pointer flex items-center pb-2 pt-10">
          ScanForge
        </Text>
        {/* <ul className="sm:flex sm:items-center">
            <Button
              style="w-32 text-white bg-red-500 hover:bg-orange-600 p-4 font-semibold rounded-lg"
              type="button"
              onClick={handleGetStartedClick}
              text="Get Started"
            />
          </ul> */}
      </View>
    </>
  );
}

export default Header;
