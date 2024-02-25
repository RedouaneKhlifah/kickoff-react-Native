import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useAppDispatch } from "../../Hooks/redux.hooks";
import { setMatchesToAll } from "../../redux/reducers/matches.reducer";

const LeaguesContainer = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={leaguesStyles.conatainer}>
      <View style={leaguesStyles.headConatiner}>
        <Text style={leaguesStyles.headText}>Leagues</Text>
        <Pressable
          onPress={() => {
            console.log("setMatchesToAll");
            dispatch(setMatchesToAll());
          }}
        >
          <Text style={[leaguesStyles.headText, { color: "blue" }]}>
            See All
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export const leaguesStyles = StyleSheet.create({
  conatainer: {
    marginVertical: 10,
  },
  headConatiner: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 20,
  },
  headText: {
    fontSize: 14,
    fontWeight: "700",
  },
});

export default LeaguesContainer;
