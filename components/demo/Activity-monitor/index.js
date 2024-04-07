import { View, StatusBar, ActivityIndicator } from "react-native";
export default function CustumACtivity() {
  return (
    <View style={{ backgroundColor: "plum", padding: 20, flex: 1 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      <ActivityIndicator size="large" color="red" animating={false} />
    </View>
  );
}
