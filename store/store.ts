import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slise";
import filterReducer from "./filterSlice";
import gameCenterSlice  from './gameCenterSlice';
import { useDispatch } from 'react-redux';
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            filter:filterReducer,
            gameCenter: gameCenterSlice
        }
    })
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch;