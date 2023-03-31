import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersType } from "@/types/UsersType";
import { searchUser } from "@/Network/API";

export const getUsers = createAsyncThunk(
  "search/fetchUser",
  async (userName: string) => {
    const data = await searchUser(userName);
    return data;
  }
);

interface SearchUserState {
  searchUsers: Array<UsersType>;
  isLoading: boolean | undefined;
  error: string | undefined;
}

const initialState: SearchUserState = {
  searchUsers: [],
  isLoading: undefined,
  error: "",
};

export const { reducer, actions } = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.searchUsers = action.payload;
      state.isLoading = false;
      console.log("fullfilled");
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      console.log("error");
    });
  },
});
