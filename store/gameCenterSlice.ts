import { GameCenterResponse } from "@/types/response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameCenter {
    leagueName: string;
    game: GameCenterResponse | null; 
}

const initialState: GameCenter = {
    leagueName: "",
    game: null, // Изначально null
};

export const gameCenterSlice = createSlice({
    name: "gameCenter",
    initialState,
    reducers: {
        changeLeagueName: (state, action: PayloadAction<string>) => {
            state.leagueName = action.payload;
        },
        setGameData: (state, action: PayloadAction<GameCenterResponse>) => {
            state.game = action.payload;
        },
    }
});

export const { changeLeagueName, setGameData } = gameCenterSlice.actions;
export default gameCenterSlice.reducer;