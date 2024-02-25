import { FlatList } from "react-native";
import React, { useEffect } from "react";
import { Imatch } from "../../types/api.Interface";
import MatchBox from "./MatchBox";
import { useAppSelector } from "../../Hooks/redux.hooks";

const Matches = () => {
  const matches = useAppSelector((state) => state.events.matches);

  const renderItem = ({ item }: { item: Imatch }) => <MatchBox match={item} />;
  return (
    <FlatList
      data={matches}
      keyExtractor={(item: Imatch) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default Matches;
