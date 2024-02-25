import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Leagues from "../components/league/Leagues";
import LeaguesContainer from "../components/league/LeaguesContainer";
import Matches from "../components/matches/Matches";
import { useAppDispatch } from "../Hooks/redux.hooks";
import { fetchALLMatches, fetchLeagues, } from "../redux/reducers/matches.reducer";

const MatchesScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
    dispatch(fetchALLMatches());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <LeaguesContainer />
      <Leagues />
      <Matches />
    </View>
  );
};

export default MatchesScreen;
