import { createSlice } from "@reduxjs/toolkit";

interface GameCenter {
    tabsButtonParams: string;
}

const initialState: GameCenter = {
    tabsButtonParams: "first"
};

export const gameCenterSlice = createSlice({
    name: "gameCenter",
    initialState,
    reducers: {
        openFirstTab: (state) => {
            state.tabsButtonParams = "first";
        },
        openSecondTab: (state) => {
            state.tabsButtonParams = "second";
        },
    }
})

export const { openFirstTab, openSecondTab } = gameCenterSlice.actions;
export default gameCenterSlice.reducer;