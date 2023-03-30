import { createSlice } from "@reduxjs/toolkit";

import { getThemes, createTheme, getTip, createTip, updateTip, deleteTip, deleteTheme } from "./API/NoteApi";

const NoteSlice = createSlice({
    name: 'notes',
    initialState: {
        themes: [],
        tips: [],
        message: '',
        showModal: '',
        activeTheme: 0,
        activeTip: 0
    },
    reducers: {
        setShowModal(state, { payload }) {
            state.showModal = payload;
        },
        setActiveTip(state, { payload }) {
            state.activeTip = payload;
        },
        setActiveTheme(state, { payload }) {
            state.activeTheme = payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getThemes.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.themes = payload;
                } else {
                    state.message = 'Создайте новый раздел чтобы начать.';
                }
            })
            .addCase(getThemes.rejected, state => {
                state.message = 'УПС.. Что то пошло не так...';
            })

            .addCase(createTheme.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.themes.push(payload);
                    state.message = 'Раздел добавлен';
                } else {
                    state.message = 'УПС.. Что то пошло не так...';
                }
            })
            .addCase(createTheme.rejected, state => {
                state.message = 'УПС.. Что то пошло не так...';
            })

            .addCase(getTip.fulfilled, (state, { payload }) => {
                state.message = '';
                if (payload && payload.length !== 0) {
                    state.tips = payload;
                }
            })
            .addCase(getTip.rejected, (state) => {
                state.message = 'УПС.. Что то пошло не так...';
            })

            .addCase(createTip.fulfilled, (state, { payload }) => {
                state.message = '';
                if (payload && payload.length !== 0) {
                    state.tips.push(payload);
                    state.message = 'Заметка добавлена';
                } else {
                    state.message = 'УПС.. Что то пошло не так...';
                }
            })
            .addCase(createTip.rejected, state => {
                state.message = 'УПС.. Что то пошло не так...';
            })

            .addCase(updateTip.fulfilled, (state, { payload }) => {
                state.message = '';
                if (payload && payload.length !== 0) {
                    const arr = state.tips.filter(tip => tip.id !== payload.id);
                    state.tips = arr;
                    state.tips.push(payload);
                    state.message = 'Заметка обновлена';
                } else {
                    state.message = 'УПС.. Что то пошло не так...';
                }
            })
            .addCase(updateTip.rejected, state => {
                state.message = 'УПС.. Что то пошло не так...';
            })

            .addCase(deleteTip.fulfilled, state => {
                const arr = state.tips.filter(tip => tip.id !== state.activeTip);
                state.tips = arr;
                state.activeTip = 0;
                state.message = 'Заметка удалена';
            })
            .addCase(deleteTip.rejected, state => {
                state.message = 'УПС.. Что то пошло не так...';
            })

            .addCase(deleteTheme.fulfilled, state => {
                const arr = state.themes.filter(theme => theme.id !== state.activeTheme);
                state.themes = arr;
                state.tips = [];
                state.activeTip = 0;
                state.activeTheme = 0;
                state.message = 'Раздел удален';
            })
            .addCase(deleteTheme.rejected, state => {
                state.message = 'УПС.. Что то пошло не так...';
            })
    }
});

export const { setShowModal, setActiveTheme, setActiveTip } = NoteSlice.actions;

export default NoteSlice.reducer;