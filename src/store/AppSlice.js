import { createSlice } from "@reduxjs/toolkit";

import updateThemes, { createTheme } from "./API/ThemesApi";
import getTips, { createTip, updateTip } from "./API/TipsApi";

const AppSlice = createSlice({
    name: 'themes',
    initialState: {
        themes: [],
        tips: [],
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
                    state.tips = payload;
                } else if (!state.tips.filter(tip => tip.theme.id === state.activeTheme)) {
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
                    state.tips.push(payload);
                    state.message = 'Подсказка добавлена';
                } else {
                    state.message = 'Oops.. Something goes wrong..';
                }
            })
            .addCase(createTip.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
            .addCase(updateTip.fulfilled, (state, { payload }) => {
                state.message = '';
                if (payload && payload.length !== 0) {
                    const { tips } = state;
                    const updated = tips.filter(t => t.id !== payload.id);
                    updated.push(payload);
                    state.tips = updated;
                } else {
                    state.message = 'Oops.. Something goes wrong..';
                }
            })
            .addCase(updateTip.rejected, (state) => {
                state.message = 'Oops.. Something goes wrong..';
            })
    }
});

export const { setActiveTheme, setActiveTip, setMessage, setShowModal } = AppSlice.actions;

export default AppSlice.reducer;