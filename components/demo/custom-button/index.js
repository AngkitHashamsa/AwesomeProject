import { useState } from "react";
import { Button, View, Text, Modal } from "react-native";
export default function CustomButton() {
  const [first, setfirst] = useState("My first");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <View style={{ padding: 60, flex: 1, backgroundColor: "plum" }}>
      <Text>Hello {first}</Text>
      <Button
        title="Left button"
        color="#00FF00"
        onPress={() => setfirst(first === "My first" ? "second" : "My first")}
      />
      <Button
        title="Open Modal"
        color="#00FF00"
        onPress={() => setIsModalOpen(true)}
      />
      <Modal
        animationType="slide"
        visible={isModalOpen}
        presentationStyle="pageSheet"
        onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          setIsModalOpen(false);
        }}
      >
        <View>
          <Text>Modal is open</Text>
          <Button
            title="close Modal"
            color="#00FF00"
            onPress={() => setIsModalOpen(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
