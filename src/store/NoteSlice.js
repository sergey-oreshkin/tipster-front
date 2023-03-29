import { createSlice } from "@reduxjs/toolkit";

import { getThemes, createTheme, getTip, createTip } from "./API/NoteApi";

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
        setActiveTip(state, {payload}){
            state.activeTip = payload;
        },
        setActiveTheme(state, {payload}){
            state.activeTheme = payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getThemes.fulfilled, (state, { payload }) => {
                if (payload && payload.length !== 0) {
                    state.themes = payload;
                }
                state.message = 'Создайте новый раздел чтоб начать.';
            })
            .addCase(getThemes.rejected, (state) => {
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
            .addCase(createTheme.rejected, (state) => {
                state.message = 'УПС.. Что то пошло не так...';
            })
            .addCase(getTip.fulfilled, (state, {payload})=>{
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
                    state.message = 'Подсказка добавлена';
                } else {
                    state.message = 'УПС.. Что то пошло не так...';
                }
            })
            .addCase(createTip.rejected, (state) => {
                state.message = 'УПС.. Что то пошло не так...';
            })
            
    }
});

export const { setShowModal, setActiveTheme, setActiveTip } = NoteSlice.actions;

export default NoteSlice.reducer;