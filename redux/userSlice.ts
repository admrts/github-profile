import { UserType } from "@/types/UsersType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "@/Network/API";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userName: string) => {
    const data = await fetchUserData(userName);
    return data;
  }
);

interface UserState {
  user: UserType | undefined;
  isLoading: boolean | null;
  error: string | undefined;
}

const initialState: UserState = {
  user: undefined,
  isLoading: null,
  error: undefined,
};

export const { reducer, actions } = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.user = undefined;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;

      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});
