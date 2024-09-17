import { configureStore } from "@reduxjs/toolkit"
import jokeSlice from "../features/jokeGenerator/jokeSlice"

export const store = configureStore({
    reducer: {
        jokeReducer: jokeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
