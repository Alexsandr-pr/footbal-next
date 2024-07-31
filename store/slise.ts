import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CounterState {
    header:boolean;
}


const initialState: CounterState = {
    header: false,
}


export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        toggleHeader: (state) => {
            state.header = !state.header;
        },
    }
})

export const { toggleHeader} = counterSlice.actions;
export default counterSlice.reducer;