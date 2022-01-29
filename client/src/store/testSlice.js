import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
   name: "test",
   initialState: {
      count: 0,
   },
   reducers: {
      increment(state) {
         state.count = state.count + 1
      },
      decrement(state) {
         state.count = state.count - 1
      },
   }
})

export default testSlice.reducer
export const { increment, decrement } = testSlice.actions