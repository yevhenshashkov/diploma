import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";


export const getHotelsByCity = createAsyncThunk(
    "hotels/getHotelsByCity",
    async (city, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/hotels?city=${encodeURIComponent(city)}`);
            if (!res.ok) throw new Error("Failed to fetch hotels");
            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
