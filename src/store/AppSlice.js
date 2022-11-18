import { createSlice } from "@reduxjs/toolkit";

import updateThemes, { createTheme } from "./API/ThemesApi";
import getTips, { createTip } from "./API/TipApi";

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
                state.message = '';
                if (payload && payload.length !== 0) {
                    state.tips[state.activeTheme] = payload;
                } else if (!state.tips[state.activeTheme]) {
                    state.message = 'В этом разделе пока пусто.';
                }
            })
            .addCase(getTips.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
            .addCase(createTheme.fulfilled, (state, { payload }) => {
                state.message = '';
                if (payload && payload.length !== 0) {
                    state.themes.push(payload);
                    state.message = 'Раздел добавлен';
                } else {
                    state.message = 'Oops.. Something goes wrong..';
                }
            })
            .addCase(createTheme.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
            .addCase(createTip.fulfilled, (state, { payload }) => {
                state.message = '';
                if (payload && payload.length !== 0) {
                    if (state.tips[payload.theme.id]) {
                        state.tips[payload.theme.id].push(payload);
                    } else {
                        state.tips[payload.theme.id] = [payload];
                    }
                    state.message = 'Подсказка добавлена';
                } else {
                    state.message = 'Oops.. Something goes wrong..';
                }
            })
            .addCase(createTip.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
    }
});

export const { setActiveTheme, setActiveTip, setMessage, setShowModal } = AppSlice.actions;

export default AppSlice.reducer;