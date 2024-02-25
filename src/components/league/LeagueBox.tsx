import { Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { UniqueTournament } from "../../types/api.Interface";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux.hooks";
import { filterByleague } from "../../redux/reducers/matches.reducer";

const LeagueBox: React.FC<{ item: UniqueTournament }> = ({ item }) => {
  const dispatch = useAppDispatch();
  const selctedLeague = useAppSelector((state) => state.events.selectedLeague);

  return (
    <Pressable onPress={() => dispatch(filterByleague(item))}>
      <TeamItemBox>
        <TeamImage
          style={
            item.id == selctedLeague?.id ? { opacity: 1 } : { opacity: 0.5 }
          }
          source={{
            uri: `https://api.sofascore.com/api/v1/unique-tournament/${item.id}/image`,
          }}
        />
      </TeamItemBox>
    </Pressable>
  );
};

const TeamImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100px;
`;

const TeamItemBox = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export default LeagueBox;
