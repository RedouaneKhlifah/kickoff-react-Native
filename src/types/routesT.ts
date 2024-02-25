import { IPlayer, Imatch } from "./api.Interface";

export type RootScreenRoutesT = {
  Home: undefined;
  PlayerDetails: { player: IPlayer };
  MatcheDetailsScreen: { match: Imatch };
  matches: undefined;
  players: undefined;
};
