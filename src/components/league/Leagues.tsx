import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";
import React, { useState } from "react";
import LeagueBox from "./LeagueBox";
import { UniqueTournament } from "../../types/api.Interface";
import { useAppSelector } from "../../Hooks/redux.hooks";

const Leagues = () => {
  const leagues = useAppSelector((state) => state.events.leagues);

  const renderItem = ({ item }: { item: UniqueTournament }) => (
    <LeagueBox item={item} />
  );
  return (
    <View>
      <FlatList
        data={leagues}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Leagues;
