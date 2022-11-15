import { createSlice } from "@reduxjs/toolkit";

import updateThemes from "./API/ThemesApi";

const AppSlice = createSlice({
    name: 'themes',
    initialState: {
        themes: [],
        tips: [],
        error: {}
    },
    reducers: {
        setThemes(state, { payload }) {
            state.themes = payload;
        },
        setError(state, { payload }) {
            state.error.message = payload;
        }
    },
    extraReducers: {
        [updateThemes.fulfilled]: (state, { payload }) => {
            if (payload && payload.length !== 0) {
                state.themes = payload;
            } else {
                state.error.message = 'У вас нет ни одного RSS источника!';
            }
        },
        [updateThemes.rejected]: (state) => {
            state.error.message = 'Oops.. Something goes wrong..';
        }
    }
});

export const { setThemes, setError } = AppSlice.actions;

export default AppSlice.reducer;