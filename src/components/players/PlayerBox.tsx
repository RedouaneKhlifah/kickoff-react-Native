import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { IPlayer } from "../../types/api.Interface";

import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootScreenRoutesT } from "../../types/routesT";

const PlayerBox: React.FC<{ player: IPlayer }> = ({ player }) => {
  const {
    player_name,
    country_name,
    player_picture,
    team_picture,
    team_slug,
    age,
    estimated_value,
    position_short_name,
    sci_skill_color,
    sci_skill_smg,
  } = player;

  const navigation = useNavigation<NavigationProp<RootScreenRoutesT>>();

  return (
    <TouchableOpacity
      key="1"
      style={PlayerBoxStyles.container}
      onPress={() =>
        navigation.navigate("PlayerDetailsScreen", { player: player })
      }
      activeOpacity={0.7}
    >
      <Image source={{ uri: player_picture }} style={PlayerBoxStyles.image} />
      <View
        style={{
          width: 120,
          height: 25,
          backgroundColor: sci_skill_color,
          position: "absolute",
          top: "10%",
          right: "0%",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          {position_short_name}
        </Text>
      </View>
      <View
        style={{
          width: 100,
          height: 18,
          backgroundColor: sci_skill_color,
          position: "absolute",
          top: "25%",
          right: "1%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>{sci_skill_smg}</Text>
      </View>
      <View style={PlayerBoxStyles.content}>
        <View style={PlayerBoxStyles.row}>
          <Text style={PlayerBoxStyles.playerName}>{player_name}</Text>
          <View style={PlayerBoxStyles.clubContainer}>
            <Image
              source={{ uri: team_picture }}
              style={PlayerBoxStyles.icon}
            />
            <Text style={PlayerBoxStyles.clubName}>{team_slug}</Text>
          </View>
        </View>
        <Text style={PlayerBoxStyles.location}>
          <Icon name="flag" size={15} color="black" />
          {country_name}
        </Text>
        <View style={PlayerBoxStyles.row}>
          <View style={PlayerBoxStyles.awardContainer}>
            <Text style={[PlayerBoxStyles.award, { color: sci_skill_color }]}>
              {estimated_value}
            </Text>
          </View>
          <Text style={PlayerBoxStyles.year}>Age : {age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerBox;

export const PlayerBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 4,
    width: "95%",
    alignSelf: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    resizeMode: "cover",
    marginTop: 3,
  },
  content: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  clubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  clubName: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "black",
  },
  location: {
    fontSize: 12,
    color: "gray",
    marginBottom: 8,
  },
  awardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  award: {
    fontSize: 20,
    fontWeight: "bold",
  },
  year: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
});
