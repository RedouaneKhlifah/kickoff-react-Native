import { IPlayer, Imatch } from "./api.Interface";

export type RootScreenRoutesT = {
  Home: undefined;
  PlayerDetailsScreen: { player: IPlayer };
  MatcheDetailsScreen: { match: Imatch };
  matches: undefined;
  players: undefined;
};
