import {createSlice} from '@reduxjs/toolkit';

import { getHotels } from '../thunks/hotelsThunk.js';

const hotelsSlice = createSlice( {
    name: 'hotels',
    initialState: {
        items: [],
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getHotels.pending, state => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getHotels.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(getHotels.rejected, (state , action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

export default hotelsSlice.reducer;
