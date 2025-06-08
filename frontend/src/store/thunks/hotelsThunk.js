import {createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const getHotels = createAsyncThunk(
    "hotels/getHotels",
    async ({ destinationID, query }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/search`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ destinationID, query })
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || "Failed to fetch hotels!");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);