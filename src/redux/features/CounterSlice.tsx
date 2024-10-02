/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type TInitialValue = {
    count: number
}

const initialState: TInitialValue = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {

            state.count++;
        },
        decrement: (state) => {
            if (state.count === 0) {
                alert("value can't be negative")
                return;
            }
            state.count--;
        },
        reset: (state) => {
            state.count = 0;
        },
        addByValue: (state, action: PayloadAction<{ value: number }>) => {
            state.count = state.count + action.payload.value
        },
    }
})


export const { increment, decrement, reset, addByValue } = counterSlice.actions;
export default counterSlice.reducer;