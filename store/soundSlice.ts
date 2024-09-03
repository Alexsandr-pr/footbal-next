import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface SoundState {
    play: boolean;
}

const initialState: SoundState = {
    play: false,
};

const soundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        enableSound: (state) => {
            state.play = true;
        },
        disableSound: (state) => {
            state.play = false;
        },
    },
});

export const { enableSound, disableSound } = soundSlice.actions;

export default soundSlice.reducer;
