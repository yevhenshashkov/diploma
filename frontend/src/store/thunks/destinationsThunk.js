import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const getDestinations = createAsyncThunk(
    "destinations/getDestinations",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/destinations`);
            if (!res.ok) throw new Error("Не удалось загрузить города");
            const data = await res.json();
            return data.destination;  // убедись, что JSON: { "destination": [...] }
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
