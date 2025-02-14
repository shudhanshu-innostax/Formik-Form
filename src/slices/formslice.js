import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  formData: [],
};

export const fetchData = createAsyncThunk("fetchData",async () => {
  const response = await axios.get('http://localhost:3000/api/form');
  return response;
})

const formSlice = createSlice({
  name: "studentform",
  initialState,
  reducers: {
    removeForm: (state,action) => {
        state.formData = state.formData.filter((_, i) => i !== action.payload.index);
    },
    updateForm: (state,action) => {
        state.formData = action.payload.text;
    },    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state,action) => {
      state.formData = action.payload.data.allData;
    });
  }
});

export const { addForm, removeForm,updateForm } = formSlice.actions;
export default formSlice.reducer;