import { GameCenterResponse } from "@/types/response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameCenter {
    game: GameCenterResponse | null; 
}

const initialState: GameCenter = {
    game: null, 
};

export const gameCenterSlice = createSlice({
    name: "gameCenter",
    initialState,
    reducers: {
        setGameData: (state, action: PayloadAction<GameCenterResponse>) => {
            state.game = action.payload;
        },
    }
});

export const {setGameData } = gameCenterSlice.actions;
export default gameCenterSlice.reducer;