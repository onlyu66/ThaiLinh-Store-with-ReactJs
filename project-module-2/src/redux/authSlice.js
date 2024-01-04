import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const reponse = await axios.get("http://localhost:8000/user");
  return reponse.data;
});
export const loginUser = createAsyncThunk("user", async (user) => {
  const response = await axios.post("http://localhost:8000/user", user);
  return response.data;
});
export const putUser = createAsyncThunk("putUser", async (objUser) => {
  const response = await axios.put(
    `http://localhost:8000/user/${objUser.id}`,
    objUser.existed
  );
  return response.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
  },
  reducers: {
    // login: (state, action) => {
    //   state.user = action.payload;
    //   localStorage.setItem("user", JSON.stringify(action.payload));
    // },
    // // setToken: (state,action)=>{

    // // },
    logout: () => {
      localStorage.removeItem("user");
    },
    addUser: (state) => {
      state.user = localStorage.getItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "Success";
      })
      .addCase(fetchUser.rejected, (state) => {
        state.error = "Error";
      });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user.push(action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(putUser.fulfilled, (state, action) => {
      state.user = state.user.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
  },
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
