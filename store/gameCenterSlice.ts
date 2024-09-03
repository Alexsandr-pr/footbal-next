import { GameCenterResponse } from "@/types/response";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getDataGameCenter, getDataGameCenterThunk } from '@/lib/api';

interface GameCenterState {
    data: GameCenterResponse | null; 
    loading: boolean;
    error: string | null;
}

const initialState: GameCenterState = {
    data: null,
    loading: false,
    error: null,
};


export const fetchGameData = createAsyncThunk(
    'gameCenter/fetchGameData',
    async (gameId: string) => {
        const response = await getDataGameCenterThunk(gameId);
        return response; 
    }
);

export const gameCenterSlice = createSlice({
    name: "gameCenter",
    initialState,
    reducers: {
        setGameData: (state, action: PayloadAction<GameCenterResponse>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGameData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGameData.fulfilled, (state, action: PayloadAction<GameCenterResponse>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGameData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load game data';
            });
    },
});

export const { setGameData } = gameCenterSlice.actions;
export default gameCenterSlice.reducer;
