import { View, Text, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreenRoutesT } from "../types/routesT";
import { PlayerBoxStyles } from "../components/players/PlayerBox";
import Icon from "react-native-vector-icons/Ionicons";

type PlayerDetailsScreenProps = NativeStackScreenProps<
  RootScreenRoutesT,
  "PlayerDetailsScreen"
>;

const PlayerdetailsScreen: React.FC<PlayerDetailsScreenProps> = ({ route }) => {
  const { player } = route.params;
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

  return (
    <View style={PlayerBoxStyles.container}>
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
    </View>
  );
};

export default PlayerdetailsScreen;
