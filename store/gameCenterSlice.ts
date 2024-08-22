import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameCenter {
    leagueName: string;
}

const initialState: GameCenter = {
    leagueName: ""
};

export const gameCenterSlice = createSlice({
    name: "gameCenter",
    initialState,
    reducers: {
        changeLeagueName: (state, action: PayloadAction<string>) => {
            state.leagueName = action.payload;
        },
    }
});

export const { changeLeagueName } = gameCenterSlice.actions;
export default gameCenterSlice.reducer;
