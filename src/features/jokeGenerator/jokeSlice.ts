import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type JokeState = {
    joke: any
    isLoading: boolean
    error: string | null
}

const initialState: JokeState = {
    joke: {},
    isLoading: false,
    error: null
}

// fetch joke action
export const fetchJoke = createAsyncThunk("joke/fetchJoke", async () => {
    const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
    )

    if (!response.ok) {
        throw new Error("Error in joke fetching")
    }

    const data = await response.json()
    return data
})

const jokeSlice = createSlice({
    name: "jokeReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchJoke.pending, (state) => {
            state.isLoading = true
            state.joke = null
            state.error = null
        })
        builder.addCase(fetchJoke.fulfilled, (state, action) => {
            state.isLoading = false
            state.joke = action.payload
            state.error = null
        })
        builder.addCase(fetchJoke.rejected, (state, action) => {
            state.isLoading = false
            state.joke = null
            state.error = action.error.message ?? "Failed to fetch joke"
        })
    }
})

export default jokeSlice.reducer
