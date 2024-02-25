import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { Imatch } from "../../types/api.Interface";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootScreenRoutesT } from "../../types/routesT";

const MatchBox: React.FC<{ match: Imatch }> = ({ match }) => {
  const {
    tournament,
    homeTeam,
    awayTeam,
    startTimestamp,
    homeScore,
    awayScore,
  } = match;
  const date = new Date(Number(startTimestamp * 1000));
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  const navigation = useNavigation<NavigationProp<RootScreenRoutesT>>();

  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
      onPress={() =>
        navigation.navigate("MatcheDetailsScreen", { match: match })
      }
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.leagueimage}
            source={{
              uri: `https://api.sofascore.com/api/v1/unique-tournament/${tournament.uniqueTournament.id}/image`,
            }}
          />
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {tournament.name}
          </Text>
        </View>
        <View style={styles.cardMatch}>
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: "35%",
            }}
          >
            <Image
              source={{
                uri: `https://api.sofascore.app/api/v1/team/${homeTeam.id}/image`,
              }}
              style={styles.teamImg}
            />
            <Text style={styles.text}>{homeTeam.name}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>{homeScore.current}</Text>
            <Icon name="remove-outline" color={"black"} size={22} />
            <Text style={{ fontSize: 18 }}>{awayScore.current}</Text>
          </View>
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: "35%",
            }}
          >
            <Image
              source={{
                uri: `https://api.sofascore.app/api/v1/team/${awayTeam.id}/image`,
              }}
              style={styles.teamImg}
            />
            <Text style={styles.text}>{awayTeam.name}</Text>
          </View>
        </View>
        <View style={styles.calendar}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="time" color={"black"} size={15} />
            <Text style={styles.text}>{formattedTime}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MatchBox;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    gap: 14,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    elevation: 3, // Elevation for Android shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardMatch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  teamImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  leagueimage: {
    width: 25,
    height: 25,
    borderRadius: 100,
  },

  calendar: {
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 10,
  },
});
