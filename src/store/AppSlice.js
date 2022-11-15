import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'themes',
    initialState: {
        themes: [],
        tips: [],
        err: {}
    },

});

export default AppSlice.reducer;