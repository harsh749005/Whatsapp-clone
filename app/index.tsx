import { StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is whatsapp clone</Text>
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}
