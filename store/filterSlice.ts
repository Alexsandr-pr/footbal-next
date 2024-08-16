import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface FilterState {
    showLiveGames: boolean;
    coefficient: boolean;
    liveGamesCount: number;
    sound: boolean;
    loadingShowLiveGames: boolean;
}

const initialState: FilterState = {
    showLiveGames: false,
    coefficient: true,
    liveGamesCount: 0,
    sound: true,
    loadingShowLiveGames: true
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setLoadingOnLiveGame: (state) => {

            state.loadingShowLiveGames = true;
        },
        setShowLiveGames: (state, action: PayloadAction<boolean>) => {
            state.showLiveGames = action.payload;
        },
        toggleCoefficient: (state) => {
            state.coefficient = !state.coefficient;
            Cookies.set("coefficient", JSON.stringify(state.coefficient), {
                expires: 7,
                sameSite: "strict",
            });
        },
        setLiveGamesCount: (state, action: PayloadAction<number>) => {
            state.liveGamesCount = action.payload;
            state.loadingShowLiveGames = false;
        },
        loadCoefficientFromCookies: (state) => {
            const savedCoefficient = Cookies.get("coefficient");
            if (savedCoefficient !== undefined) {
                state.coefficient = JSON.parse(savedCoefficient);
            }
        },
        toggleSound: (state) => {
            state.sound = !state.sound;
            Cookies.set("sound", JSON.stringify(state.sound), {
                expires: 7,
                sameSite: "strict",
            });
        },
        loadSoundFromCookies: (state) => {
            const savedSound = Cookies.get("sound");
            if (savedSound !== undefined) {
                state.sound = JSON.parse(savedSound);
            }
        },
    },
});

export const {
    setShowLiveGames,
    toggleCoefficient,
    setLiveGamesCount,
    loadCoefficientFromCookies,
    toggleSound,
    loadSoundFromCookies,
    setLoadingOnLiveGame
} = filterSlice.actions;

export default filterSlice.reducer;
