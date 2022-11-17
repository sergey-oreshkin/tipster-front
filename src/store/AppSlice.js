import { createSlice } from "@reduxjs/toolkit";

import updateThemes, { createTheme } from "./API/ThemesApi";
import getTips from "./API/TipApi";

const AppSlice = createSlice({
    name: 'themes',
    initialState: {
        themes: [],
        tips: {}, // structure map {theme.id.toString: array of tips}
        activeTheme: 0,
        activeTip: 0,
        showModal: '',
        message: ''
    },
    reducers: {
        setShowModal(state, { payload }) {
            state.showModal = payload;
        },
        setActiveTheme(state, { payload }) {
            state.activeTheme = payload;
        },
        setActiveTip(state, { payload }) {
            state.activeTip = payload;
        },
        setMessage(state, { payload }) {
            state.message = payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(updateThemes.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.themes = payload;
                } else {
                    state.message = 'Создайте новый раздел чтоб начать.';
                }
            })
            .addCase(updateThemes.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
            .addCase(getTips.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.tips[state.activeTheme] = payload;
                } else {
                    state.message = 'В данном разделе пока пусто.';
                }
            })
            .addCase(getTips.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
            .addCase(createTheme.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.themes.push(payload);
                } else {
                    state.message = 'Oops.. Something goes wrong..';
                }
            })
            .addCase(createTheme.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
    }
});

export const { setActiveTheme, setActiveTip, setMessage, setShowModal } = AppSlice.actions;

export default AppSlice.reducer;