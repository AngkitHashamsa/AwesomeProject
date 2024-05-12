import { StyleSheet, Text, View, Platform, Image } from "react-native";

const typesStyles = {
  electric: {
    borderColor: "#FFD700",
    emoji: "⚡",
  },
  grass: {
    borderColor: "#0ae219",
    emoji: "🍃",
  },
  fire: {
    borderColor: "#ff5733",
    emoji: "🔥",
  },
  water: {
    borderColor: "#00ecf0",
    emoji: "💧",
  },
};
export default function PokemonCards({
  name,
  image,
  hp,
  type,
  moves,
  weakness,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.Image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.TypesContainer}>
        <View
          style={[
            styles.badge,
            { borderColor: typesStyles?.[type]?.borderColor },
          ]}
        >
          <Text style={styles.typeEmoji}>{typesStyles?.[type]?.emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.moves}>Moves: {moves?.join(", ")}. </Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.moves}>Weakness: {weakness?.join(", ")}. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#5af8e3ff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shawdowColor: "#333",
        shadowOpacity: 0.3,
        shawdowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  Image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  TypesContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 4,
    borderRadius: 20,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    textTransform: "capitalize",
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  moves: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
});
