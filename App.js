import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import Pokemons from "./components/pokemon/Pokemons";
import PokemonsSection from "./components/pokemon-section";
export default function App() {
  // console.log(Platform.OS);
  return (
    <SafeAreaView style={styles.container}>
      {/* SafeAreaView IOS */}
      <StatusBar />
      {/* <Pokemons /> */}
      <PokemonsSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
