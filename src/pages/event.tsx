import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function EventPage() {
  return <View>
    <Text>

    This is an event page.
    </Text>
    
  </View>;
}

const PagesStyles = StyleSheet.create({
  event: {
    backgroundColor: "#ff23f2",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  },
});
