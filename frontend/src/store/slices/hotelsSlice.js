import { createSlice } from "@reduxjs/toolkit";
import { getHotelsByCity } from "../thunks/hotelsThunk";

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: {
        items: [],
        loading: false,
        error: null,
        selectedCity: "",
    },
    reducers: {
        setSelectedCity(state, action) {
            state.selectedCity = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHotelsByCity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHotelsByCity.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getHotelsByCity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setSelectedCity } = hotelsSlice.actions;
export default hotelsSlice.reducer;
