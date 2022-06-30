import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "customer/register",
  async (info, { rejectWithValue }) => {
    try {
      const response = await axios.post("/customer/register", info);
      if (response.status === 201) {
        return response.data;
      } else {
        // console.log(response.data.msg, "error");
        return rejectWithValue(response.data.msg);
      }
    } catch (error) {
      //   console.log(error);
      return rejectWithValue(error);
    }
  }
);
//login user
export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("/customer/login", data);
      if (result.status === 201) {
        return result.data;
      } else {
        // console.log(result.data.msg, "error");
        return rejectWithValue(result.data.msg);
      }
    } catch (error) {
      //   console.log(error);
      return rejectWithValue(error);
    }
  }
);
//get user
export const getUser = createAsyncThunk(
  "user/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.get(`/customer/current/customer`, {
        headers: { token: localStorage.getItem("token") },
      });
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//delete user
export const deleteUser = createAsyncThunk(
  "posts/deleteUser",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.delete(
        `/customer/deleteuser/${info.id}`,
        info.data,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      dispatch(logout());
      // dispatch(getCustomers())
      // history.push("/");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//get all users
export const getCustomers = createAsyncThunk(
  "users/getCustomers",
  async (info, { rejectWithValue }) => {
    try {
      const result = await axios.get("/customer/");
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//get all users
export const searchUsers = createAsyncThunk(
  "users/searchUsers",
  async (search, { rejectWithValue }) => {
    try {
      const result = await axios.get(`/customer/searchuser?search=${search}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//Update user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.put(`/customer/update/${info.id}`, info.data, {
        headers: { token: localStorage.getItem("token") },
      });
      console.log(info.id);
      dispatch(getUser(info.id));
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//get all Doctors
export const getDocs = createAsyncThunk(
  "users/getDocs",
  async (info, { rejectWithValue }) => {
    try {
      const result = await axios.get("/customer/doctors");
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//update avatar
export const avatarUpdate = createAsyncThunk(
  "user/avatarUpdate",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      formData.append("userImg", info.file);
      const res = await axios.put(
        `/customer/uploadimg/${info.id}`,
        // const res = await axios.put(`/customer/uploadimg/${info.id}`
        formData,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      dispatch(getCustomers());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const customerSlice = createSlice({
  name: "user",
  initialState: {
    customers: [],
    customer: {},
    searchcustomer: [],
    customerInfo: JSON.parse(localStorage.getItem("customer")),
    loading: false,
    registerErrors: null,
    loginErrors: null,
    usersErrors: null,
    token: localStorage.getItem("token"),
    isAuth: Boolean(localStorage.getItem("isAuth")),
    registerSuccess: false,
    loginSuccess: false,
  },
  reducers: {
    logout: (state) => {
      // localStorage.clear();
      state.isAuth = false;
      state.customerInfo = {};
      state.token = null;
      state.registerSuccess = false;
      state.loginSuccess = false;
      localStorage.removeItem("token");
      localStorage.removeItem("customer");
      localStorage.removeItem("isAuth");
    },
    clearErrors: (state) => {
      state.registerErrors = null;
      state.loginErrors = null;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.registerSuccess = true;
      state.loading = false;
      state.customerInfo = action.payload.customer;
      state.token = action.payload.token;
      state.isAuth = true;
      state.errors = null;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("customer", JSON.stringify(action.payload.customer));
      localStorage.setItem("isAuth", true);
    },
    [register.rejected]: (state, action) => {
      state.registerErrors = action.payload;
      state.isAuth = false;
      state.registerSuccess = false;
      console.log(action.payload);
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loginSuccess = true;
      state.customerInfo = action.payload.customer;
      state.token = action.payload.token;
      state.isAuth = true;
      state.errors = null;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("customer", JSON.stringify(action.payload.customer));
      localStorage.setItem("isAuth", true);
    },
    [login.rejected]: (state, action) => {
      state.loginSuccess = false;
      state.loginErrors = action.payload;
      state.isAuth = false;
    },
    //get user
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.customer = action.payload;
      state.loading = false;
      state.errors = null;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //get users
    [getCustomers.pending]: (state) => {
      state.loading = true;
    },
    [getCustomers.fulfilled]: (state, action) => {
      state.loading = false;
      state.customers = action.payload;
      state.usersErrors = null;
    },
    [getCustomers.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //search users
    [searchUsers.pending]: (state) => {
      state.loading = true;
    },
    [searchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.searchUsers = action.payload;
      state.usersErrors = null;
    },
    [searchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //get users
    [getDocs.pending]: (state) => {
      state.loading = true;
    },
    [getDocs.fulfilled]: (state, action) => {
      state.loading = false;
      state.customers = action.payload;
      state.usersErrors = null;
    },
    [getDocs.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { logout, clearErrors, loginErrors } = customerSlice.actions;
