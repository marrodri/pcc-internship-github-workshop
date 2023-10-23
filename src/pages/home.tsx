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
    <View style={EventButtonStyle.mainBody}>
      <View>
        <Text>Image</Text>
      </View>
      {/* quick view of event details. */}
      <View>
        <Text>Event Title</Text>
        <Text>Organizers: First Organizer - Person's Name</Text>
        <Text>Dates: Start Date - End Date</Text>
        {/* last part, in small letters bottom of the button */}
        <Text>Date of publishment(## days ago)</Text>
      </View>
      
    </View>
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
    padding: 10,
    height: 250,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    marginVertical: 10,
  },
  descriptionBody:{},
  title:{},
  organizers:{},
  eventDates:{},
  publishedDate:{},
});
