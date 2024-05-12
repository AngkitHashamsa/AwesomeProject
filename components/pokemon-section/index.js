import { Text, View, ScrollView, FlatList, SectionList } from "react-native";
import PokemonData from "./pokemondata.json";
export default function PokemonsSection() {
  console.log(PokemonData);
  return (
    <View>
      <SectionList
        sections={PokemonData}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(PokemonData) => PokemonData}
        //   horizontal
        //   ItemSeparatorComponent={<View style={{ height: 16 }} />}
        // ListEmptyComponent={<Text>No Item Found</Text>}
        renderSectionHeader={({ section }) => {
          return (
            <Text
              style={{ fontSize: 24, textAlign: "center", marginBottom: 12 }}
            >
              {section.type}
            </Text>
          );
        }}
        // renderSectionFooter={
        //   <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 12 }}>
        //     List ends
        //   </Text>
        // }
      />
    </View>
  );
}
