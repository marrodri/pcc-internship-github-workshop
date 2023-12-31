import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
export default function Home({navigation}:{navigation:any}) {
  return (
    <View style={PagesStyles.home}>
      <ScrollView>
        <EventButton navigation={navigation} />
        <EventButton navigation={navigation} />
        <EventButton navigation={navigation} />
        <EventButton navigation={navigation} />
        <EventButton navigation={navigation} />
        <EventButton navigation={navigation} />
        <EventButton navigation={navigation} />
      </ScrollView>
    </View>
  );
}

function EventButton({navigation}:{navigation:any}) {
  return (
    <TouchableOpacity onPress={()=>{
      console.log("redirecting to event\n");
      navigation.push("event");
      }}>
      <View style={EventButtonStyle.mainBody}>
        <View style={EventButtonStyle.eventImage}>
          <Text>Image</Text>
        </View>
        {/* quick view of event details. */}
        <View style={EventButtonStyle.descriptionBody}>
          <Text style={EventButtonStyle.title}>Event Title</Text>
          <Text style={EventButtonStyle.eventDates}>
            Dates: Start Date - End Date
          </Text>
          <Text style={EventButtonStyle.organizers}>
            Organizers: First Organizer - Person's Name
          </Text>
          {/* last part, in small letters bottom of the button */}
          <Text style={EventButtonStyle.publishedDate}>
            published ## days ago.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const PagesStyles = StyleSheet.create({
  home: {
    backgroundColor: "#ff23f2",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  },
});

const EventButtonStyle = StyleSheet.create({
  mainBody: {
    backgroundColor: "#4287f5",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    gap: 5,
    marginVertical: 5,
    shadowColor: "black",
    borderRadius: 8,
  },
  eventImage: {
    width: 330,
    borderRadius: 8,
    height: 150,
    backgroundColor: "#42f5c2",
  },
  descriptionBody: {
    flex: 0,
    width: 330,
    gap: 2,

    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "#cbf542",
  },
  eventDates: { backgroundColor: "#cbf542", fontSize: 20, fontWeight: "600" },
  organizers: { fontSize: 18, fontWeight: "400", backgroundColor: "#cbf542" },
  publishedDate: { backgroundColor: "#cbf542" },
});
