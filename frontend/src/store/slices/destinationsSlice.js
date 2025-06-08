import { createSlice } from '@reduxjs/toolkit';
import { getDestinations } from "../thunks/destinationsThunk";


const destinationsSlice = createSlice( {
    name: 'destinations',
    initialState: {
        items: [],
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getDestinations.pending, state => {
            state.loading = true;
            state.error = "";
        })
            .addCase(getDestinations.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(getDestinations.rejected, (state , action) => {
                state.error = action.payload;
                state.loading = false;
            })
    },
});

export default destinationsSlice.reducer;
