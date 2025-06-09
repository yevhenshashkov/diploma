import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const getHotels = createAsyncThunk(
    "hotels/getHotels",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/hotels`);
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const message = errorData?.message || `Server error: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);
