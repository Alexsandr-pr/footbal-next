import { Game } from "@/types/game-center";
import { GameCenterResponse } from "@/types/response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameCenter {
    game: Game | null; 
}

const initialState: GameCenter = {
    game: null, 
};

export const gameCenterSlice = createSlice({
    name: "gameCenter",
    initialState,
    reducers: {
        setGameData: (state, action: PayloadAction<Game>) => {
            state.game = action.payload;
        },
    }
});

export const {setGameData } = gameCenterSlice.actions;
export default gameCenterSlice.reducer;