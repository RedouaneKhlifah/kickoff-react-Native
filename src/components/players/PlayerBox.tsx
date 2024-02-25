import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { IPlayer } from "../../types/api.Interface";

const PlayerBox: React.FC<{ player: IPlayer }> = ({ player }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View style={styles.container}>
        <View style={styles.cardMatch}>
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: "35%",
            }}
          >
            <Text style={styles.text}>{"homeTeam.name"}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>current</Text>
            <Icon name="remove-outline" color={"black"} size={22} />
            <Text style={{ fontSize: 18 }}>awayScore.current</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerBox;

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
