import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "./";

const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: 0
  },
  reducers: {
    increment(state) {
      state.counter += 1
    },
    incrementAmount(state, action: PayloadAction<number>) {
      state.counter += action.payload 
    },
    decrement(state) {
      state.counter -= 1
    }
  }


})

function sleep(ms: number){
 return new Promise(resolve => setTimeout(resolve, ms));
}

export function asyncIncrement(): AppThunk{
  return async function (dispatch: AppDispatch){
    //await fetch('www.dadosapi.com')
    await sleep(1000)
    dispatch(increment())
  }

}

export const {increment, incrementAmount, decrement} = stock.actions
export default stock.reducer