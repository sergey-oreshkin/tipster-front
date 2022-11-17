import { createSlice } from "@reduxjs/toolkit";

import updateThemes from "./API/ThemesApi";
import getTips from "./API/TipApi";

const AppSlice = createSlice({
    name: 'themes',
    initialState: {
        themes: [],
        tips: {}, // structure map {theme.id.toString: array of tips}
        activeTheme: 0,
        activeTip: 0,
        error: {}
    },
    reducers: {
        setActiveTheme(state, { payload }) {
            state.activeTheme = payload;
        },
        setActiveTip(state, { payload }) {
            state.activeTip = payload;
        },
        setError(state, { payload }) {
            state.error.message = payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(updateThemes.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.themes = payload;
                } else {
                    state.error.message = 'Oops.. Something goes wrong..';
                }
            })
            .addCase(updateThemes.rejected, (state) => {
                state.error.message = 'Oops.. Something goes wrong..';
            })
            .addCase(getTips.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.tips[state.activeTheme] = payload;
                } else {
                    state.error.message = 'Oops.. Something goes wrong..';
                }
            })
            .addCase(getTips.rejected, (state) => {
                state.error.message = 'Oops.. Something goes wrong..';
            })
    }
});

export const { setActiveTheme, setActiveTip, setError } = AppSlice.actions;

export default AppSlice.reducer;