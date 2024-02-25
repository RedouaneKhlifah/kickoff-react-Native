import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { IPlayer } from "../../types/api.Interface";
import PlayerBox from "./PlayerBox";
import { useAppSelector } from "../../Hooks/redux.hooks";
import SearchInput from "./SearchInput";

const records = [
  {
    id: "78187",
    player_id: "506100",
    player_name: "Jude Bellingham",
    player_slug: "jude-bellingham",
    player_picture:
      "https://static.footballtransfers.com/resources/players/506100.png",
    age: "20",
    position_key: "2944839123_1060745282_498629140",
    position_short_name: "M (C), DM (RL)",
    team_name: "Real Madrid",
    team_short_name: "Real Madrid",
    team_slug: "es/real-madrid",
    team_picture: "https://static.footballtransfers.com/resources/teams/48.png",
    estimated_value: "€140.1M",
    country_id: "202",
    country_code: "uk",
    country_name: "England",
    sci_skill_smg: "81.0",
    sci_potential_smg: "98.4",
    sci_skill_color: "#274e13",
    sci_potential_color: "#2a0a43",
  },
];
const Players = () => {
  let players = useAppSelector((state) => state.palyers.records);
  const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>(players);

  const [text, onChangeText] = useState<string>("");

  useEffect(() => {
    setFilteredPlayers(
      players.filter((player) =>
        player.player_name.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [text, players]);

  const renderItem = ({ item }: { item: IPlayer }) => (
    <PlayerBox player={item} />
  );

  return (
    <>
      <SearchInput text={text} onChangeText={onChangeText} />
      <FlatList
        data={filteredPlayers}
        keyExtractor={(item: IPlayer) => item.id.toString()}
        renderItem={renderItem}
      />
    </>
  );
};

export default Players;
