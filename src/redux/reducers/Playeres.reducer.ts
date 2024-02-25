import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "../../types/api.Interface";
import { getAllRecords } from "../../api/Axios";
import axios, { AxiosError } from "axios";

interface IPlayerReducer {
  players_isLoading: boolean;
  players_error: string;
  records: IPlayer[];
}
const initialState: IPlayerReducer = {
  players_isLoading: false,
  players_error: "string",
  records: [],
};

export const fetchPlayers = createAsyncThunk<IPlayer[], void>(
  "player/fetchPlayers",
  async (_, thunkAPI) => {
    try {
      const response = await getAllRecords(
        "https://www.footballtransfers.com/en/players/actions/overview/overview"
      );
      return response.data.records;
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

export const playersSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setPlayers: (state) => {
      [...state.records];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlayers.pending, (state) => {
      state.players_isLoading = true;
    });
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      state.players_isLoading = false;
      state.records = action.payload;
    });
    builder.addCase(fetchPlayers.rejected, (state, action) => {
      state.players_isLoading = false;
      if (action.error.message) {
        state.players_error = action.error.message;
      }
    });
  },
});

export default playersSlice.reducer;
