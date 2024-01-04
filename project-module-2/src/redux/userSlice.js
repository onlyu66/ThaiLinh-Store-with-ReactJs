import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const reponse = await axios.get("http://localhost:8000/users");
  return reponse.data;
});

// export const postUsers = createAsyncThunk(
//   "postUsers",
//   async (user) => {
//     const response = await axios.post(
//       "http://localhost:8000/users",
//       user
//     );
//     return response.data;
//   }
// );
export const deleteUsers = createAsyncThunk("deleteUsers", async (idUser) => {
  await axios.delete(`http://localhost:8000/users/${idUser}`);
  return idUser;
});
export const patchUsers = createAsyncThunk("patchUsers", async (objUser) => {
  const response = await axios.patch(
    `http://localhost:8000/users/${objUser.id}`,
    objUser.userLogged
  );
  return response.data;
});
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userLogged: null,
    // token: [],
    status: "idle",
    error: null,
    usersPerPage: 10,
    currentPage: 1,
  },
  reducers: {
    // fetchUsers: (state, action) => {
    //   state.users = [...action.payload];
    // },
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
    // onNavigateNext:()=>{},
    onClickCurentPage: (state, action) => {
      state.currentPage = action.payload;
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "Success";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = "Error";
      });

    // builder.addCase(postUsers.fulfilled, (state, action) => {
    //   state.users.push(action.payload);
    // });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(patchUsers.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
  },
});

export default userSlice.reducer;
export const userAction = userSlice.actions;
