import React from "react";
import { View, StatusBar } from "react-native";
export default function CustomStatusBar() {
  return (
    <View style={{ backgroundColor: "plum", padding: 20, flex: 1 }}>
      <StatusBar
        backgroundColor={"blue"}
        barStyle="light-content"
        //   hidden
      />
    </View>
  );
}
