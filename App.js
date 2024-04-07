import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Platform,
} from "react-native";

export default function App() {
  // console.log(Platform.OS);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
