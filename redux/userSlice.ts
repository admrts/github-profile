import { UserType } from "@/types/UsersType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "@/Network/API";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (url: string) => {
    const data = await fetchUserData(url);
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
      console.log("pending");
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(action.payload);

      state.isLoading = false;
      console.log("fullfilled");
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      console.log("error");
    });
  },
});
