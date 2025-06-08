import {configureStore, createStore} from "@reduxjs/toolkit";
import hotelsReducer from "./slices/hotelsSlice.js";
import authReducer from "./slices/authSlice.js";
import destinationsReducer from "./slices/destinationsSlice.js";


export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        auth: authReducer,
        destinations: destinationsReducer,
    }
})