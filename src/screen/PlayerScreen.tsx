import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Players from "../components/players/Players";
import { useAppDispatch } from "../Hooks/redux.hooks";
import { fetchPlayers } from "../redux/reducers/Playeres.reducer";

const PlayerScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  return (
    <View>
      <Players />
    </View>
  );
};

export default PlayerScreen;
