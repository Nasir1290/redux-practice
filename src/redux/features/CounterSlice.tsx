import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const conterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {}
})