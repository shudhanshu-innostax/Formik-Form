import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
};

const formSlice = createSlice({
  name: "studentform",
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.formData.push(action.payload.text);
    },
    removeForm: (state,action) => {
        state.formData = state.formData.filter((_, i) => i !== action.payload.index);
    },
    updateForm: (state,action) => {
        state.formData = action.payload.text;
    },
  },
});

export const { addForm, removeForm,updateForm } = formSlice.actions;
export default formSlice.reducer;