import { createSlice } from "@reduxjs/toolkit";
const inputSlice = createSlice({
  name: "input",
  initialState: {
    inputValue: "",
    inputList: [],
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addInputList: (state) => {
      if (state.inputValue) {
        console.log(state.inputValue);
        state.inputList.push(state.inputValue);
        state.inputValue = "";
      }
    },
    deleteFromInputList: (state, action) => {
      state.inputList = state.inputList.filter(
        (item) => item !== action.payload
      );
    },
  },
});
export const { setInputValue, addInputList, deleteFromInputList } =
  inputSlice.actions;
export default inputSlice.reducer;
