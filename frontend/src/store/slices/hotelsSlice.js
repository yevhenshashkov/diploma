
import { createSlice } from "@reduxjs/toolkit";
import { getHotelsByCity } from "../thunks/hotelsThunk";

const initialState = {
    items: [],
    loading: false,
    error: null,
    selectedCity: "",
    filters: {
        minPrice: 0,
        maxPrice: 500,
        childrenFriendly: false,
        petsAllowed: false
    }
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        setSelectedCity(state, action) {
            state.selectedCity = action.payload;
        },
        setFilters(state, action) {
            state.filters = { ...state.filters, ...action.payload };
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getHotelsByCity.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHotelsByCity.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(getHotelsByCity.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const { setSelectedCity, setFilters } = hotelsSlice.actions;

export const selectFilteredHotels = state => {
    const { items, filters } = state.hotels;
    return items.filter(hotel =>
        hotel.pricePerNight >= filters.minPrice &&
        hotel.pricePerNight <= filters.maxPrice &&
        (!filters.childrenFriendly || hotel.childrenFriendly) &&
        (!filters.petsAllowed || hotel.petsAllowed)
    );
};

export default hotelsSlice.reducer;
