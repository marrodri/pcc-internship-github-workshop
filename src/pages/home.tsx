import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={PagesStyles.home}>
      <ScrollView>
        <EventButton />
        <EventButton />
        <EventButton />
        <EventButton />
        <EventButton />
        <EventButton />
        <EventButton />
      </ScrollView>
      
    </View>
  );
}

function EventButton() {
  return (
    <View style={ComponentsStyle.eventButton}>
      <Text>Hi this is an event button</Text>
    </View>
  );
}

const PagesStyles = StyleSheet.create({
  home: {
    backgroundColor: "#ff23f2",
    alignItems:"center",
    justifyContent:"center",
    flex: 1,
    flexDirection:"column",
  },
  
});

const ComponentsStyle= StyleSheet.create({
  eventButton: {
    backgroundColor: "#4287f5",
    padding: 10,
    height:250,
    width:350,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:10,
  },
});
