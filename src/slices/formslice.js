import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  formData: [],
  status: "idle",
};

// Fetch Data
export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get("http://localhost:3000/api/form");
  return response.data.allData;
});

// Delete Data
export const deleteData = createAsyncThunk("deleteData", async (id) => {
  await axios.delete(`http://localhost:3000/api/form/delete/${id}`);
  return id; 
});

// Update Data
export const updateData = createAsyncThunk("updateData", async ({ id, updatedData }) => {
  if (typeof id === "object") {
    id = id._id; 
  }
  console.log(id);
  
  const response = await axios.put(`http://localhost:3000/api/form/update/${id}`, updatedData);
  return response.data.updatedForm;
});
const formSlice = createSlice({
  name: "studentform",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.formData = action.payload;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.formData = state.formData.filter((form) => form._id !== action.payload);
      })
      .addCase(updateData.fulfilled, (state, action) => {
        if (!action.payload || !action.payload._id) return; 
        state.formData = state.formData.map((form) =>
          form._id === action.payload._id ? action.payload : form
        );
      });  
  },
});

export default formSlice.reducer;
