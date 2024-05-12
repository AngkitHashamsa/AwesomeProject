import { Text, View, ScrollView, FlatList } from "react-native";
import PokemonCards from "./PokemonCards";

const PokemonData = [
  {
    name: "Charmander",
    image: require("../../assets/charmander.png"),
    hp: 30,
    type: "fire",
    moves: ["scratch", "Ember", "Growl", "Leer"],
    weakness: ["water", "Rock"],
  },
  {
    name: "Bulbasaur",
    image: require("../../assets/bulbasaur.png"),
    hp: 30,
    type: "grass",
    moves: ["Razor leaf", "seed", "Growl", "Leer"],
    weakness: ["Fire", "Pyschic", "Fly"],
  },
  {
    name: "pikachu",
    image: require("../../assets/pikachu.png"),
    hp: 30,
    type: "electric",
    moves: ["Thunder sock", "Thunder Wave", "Growl", "Leer"],
    weakness: ["ground", "Rock"],
  },
  {
    name: "squirtle",
    image: require("../../assets/squirtle.png"),
    hp: 30,
    type: "water",
    moves: ["water gun", "tackler", "Growl", "Leer"],
    weakness: ["electric", "grass"],
  },
];
export default function Pokemons() {
  return (
    <FlatList
      data={PokemonData}
      renderItem={({ item }) => {
        return <PokemonCards {...item} />;
      }}
      keyExtractor={(PokemonData) => PokemonData.name}
      //   horizontal
    />
  );
}
