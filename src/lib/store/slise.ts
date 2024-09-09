import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CounterState {
    header:boolean;
    calendar: boolean;
}


const initialState: CounterState = {
    header: false,
    calendar: false,
}


export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        toggleHeader: (state) => {
            state.header = !state.header;
        },
        openCalendar: (state) => {
            if(state.header) {
                state.header = false;
            }
            state.calendar = true;
        },
        closeCalendar: (state) => {
            state.calendar = false;
        }
    }
})

export const { toggleHeader, closeCalendar, openCalendar } = counterSlice.actions;
export default counterSlice.reducer;