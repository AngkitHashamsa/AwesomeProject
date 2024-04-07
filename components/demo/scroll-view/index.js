import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function ScrollView() {
  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/237/250/250.jpg?hmac=tNmO3YWXALG9JM81cghI9nflo3dWc3e5vlNsf_jmKWw",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          illum nam totam expedita laudantium itaque delectus commodi quis sit
          molestiae iste enim magnam? Modi dolor sunt soluta libero, veniam iste
          vero id molestias facilis aperiam saepe ducimus velit ex illo quidem
          neque, cum voluptatem rem? Repellendus est eaque reprehenderit magni?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          illum nam totam expedita laudantium itaque delectus commodi quis sit
          molestiae iste enim magnam? Modi dolor sunt soluta libero, veniam iste
          vero id molestias facilis aperiam saepe ducimus velit ex illo quidem
          neque, cum voluptatem rem? Repellendus est eaque reprehenderit magni?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          illum nam totam expedita laudantium itaque delectus commodi quis sit
          molestiae iste enim magnam? Modi dolor sunt soluta libero, veniam iste
          vero id molestias facilis aperiam saepe ducimus velit ex illo quidem
          neque, cum voluptatem rem? Repellendus est eaque reprehenderit magni?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          illum nam totam expedita laudantium itaque delectus commodi quis sit
          molestiae iste enim magnam? Modi dolor sunt soluta libero, veniam iste
          vero id molestias facilis aperiam saepe ducimus velit ex illo quidem
          neque, cum voluptatem rem? Repellendus est eaque reprehenderit magni?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          illum nam totam expedita laudantium itaque delectus commodi quis sit
          molestiae iste enim magnam? Modi dolor sunt soluta libero, veniam iste
          vero id molestias facilis aperiam saepe ducimus velit ex illo quidem
          neque, cum voluptatem rem? Repellendus est eaque reprehenderit magni?
        </Text>
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/237/250/250.jpg?hmac=tNmO3YWXALG9JM81cghI9nflo3dWc3e5vlNsf_jmKWw",
          }}
          style={{ width: 100, height: 100 }}
        />
      </ScrollView>
    </View>
  );
}
