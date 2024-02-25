import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Imatch,
  Tournament,
  UniqueTournament,
} from "../../types/api.Interface";
import { getAllRecords } from "../../api/Axios";
import axios, { AxiosError } from "axios";

// Define the initial state using that type
export interface IMatchReducer {
  match_isLoading: boolean;
  match_error: string;
  league_isLoading: boolean;
  league_error: string;
  matches: Imatch[];
  allMatches: Imatch[];
  leagues: UniqueTournament[];
  selectedLeague: UniqueTournament | null;
}
const initialState: IMatchReducer = {
  matches: [],
  leagues: [],
  allMatches: [],
  match_isLoading: false,
  match_error: "",
  league_isLoading: false,
  league_error: "",
  selectedLeague: null,
};

export const fetchALLMatches = createAsyncThunk<Imatch[], void>(
  "matches/fetchALLMatches",
  async (_, thunkAPI) => {
    try {
      const response = await getAllRecords(
        "https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-02-21"
      );
      return response.data.events;
    } catch (error) {
      // Use `rejectWithValue` to handle errors
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        return thunkAPI.rejectWithValue({ message: axiosError.message });
      } else {
        return thunkAPI.rejectWithValue({ message: "An error occurred." });
      }
    }
  }
);

export const fetchLeagues = createAsyncThunk<UniqueTournament[], void>(
  "leagues/fetchLeagues",
  async (_, thunkAPI) => {
    try {
      const response = await getAllRecords(
        "https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football"
      );
      return response.data.uniqueTournaments;
    } catch (error) {
      // Use `rejectWithValue` to handle errors
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        return thunkAPI.rejectWithValue({ message: axiosError.message });
      } else {
        return thunkAPI.rejectWithValue({ message: "An error occurred." });
      }
    }
  }
);

const filterMatches = (state: IMatchReducer, payload: UniqueTournament) => {
  const filterdmatches = state.allMatches.filter(
    (match) => match.tournament.uniqueTournament.id === payload.id
  );

  return filterdmatches;
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setMatchesToAll: (state) => {
      state.matches = state.allMatches;
      state.selectedLeague = null;
    },
    filterByleague: (state, action: PayloadAction<UniqueTournament>) => {
      state.selectedLeague = action.payload;
      state.matches = filterMatches(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling fetchLeagues
      .addCase(fetchALLMatches.pending, (state) => {
        state.match_isLoading = true;
      })
      .addCase(fetchALLMatches.fulfilled, (state, action) => {
        state.match_isLoading = false;
        state.matches = action.payload;
        state.allMatches = action.payload;
      })
      .addCase(fetchALLMatches.rejected, (state, action) => {
        state.match_isLoading = false;
        if (action.error.message) {
          state.match_error = action.error.message;
        }
      })

      // Handling fetchLeagues
      .addCase(fetchLeagues.pending, (state) => {
        state.league_isLoading = true;
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.league_isLoading = false;
        state.leagues = action.payload;
      })
      .addCase(fetchLeagues.rejected, (state, action) => {
        state.league_isLoading = false;
        if (action.error.message) {
          state.league_error = action.error.message;
        }
      });
  },
});

export const { setMatchesToAll, filterByleague } = eventsSlice.actions;

export default eventsSlice.reducer;
