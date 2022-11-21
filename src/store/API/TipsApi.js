import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import baseUrl from './ApiSetup';

const getTips = createAsyncThunk(
    'get/tips',
    async (state, { rejectWithValue }) => {
        try {
            const config = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
            const uri = '/tips?themeId=' + state.currentThemeId;
            const endpoint = baseUrl + uri;
            const response = await axios.get(endpoint, config);
            return response.data
        } catch (err) {
            if (err.isAxiosError) {
                if (err.response.status !== 0) {
                    return rejectWithValue({ data: err.response.data, status: err.response.status });
                }
                return rejectWithValue({ error: 'Сервер не доступен!' });
            }
            return rejectWithValue({ error: 'Неизвестная ошибка ' + err });
        }

    }
);

export default getTips;