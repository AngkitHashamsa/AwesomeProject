import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
const myimage = require("../../assets/adaptive-icon.png");
function Basic() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/ac/27/1d/ac271de883faa03617b212beeda73db3.jpg",
        }}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text>Yes the app is working bro</Text>
        <View
          style={{ backgroundColor: "#673147", width: 100, height: 200 }}
        ></View>
        <Image source={myimage} style={{ width: 100, height: 100 }} />
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/237/250/250.jpg?hmac=tNmO3YWXALG9JM81cghI9nflo3dWc3e5vlNsf_jmKWw",
          }}
          style={{ width: 100, height: 100 }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Basic;
