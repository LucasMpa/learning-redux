import { createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
  name: 'teste',
  initialState: {
    test: false
  },
  reducers: {
    toggle(state) {
      state.test = !state.test
    },
  }


})

export const {toggle} = stock.actions
export default stock.reducer