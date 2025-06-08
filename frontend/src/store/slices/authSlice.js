import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice( {
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: "",
    },
    reducers: {},
});

export default authSlice.reducer;
