import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import baseUrl from './ApiSetup';

const fetchTips = async (id, rejectWithValue) => {
    try {
        const config = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
        const uri = '/tips?themeId=' + id;
        const endpoint = baseUrl + uri;
        const response = await axios.get(endpoint, config);
        return response.data;
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

export const createTip = createAsyncThunk(
    'post/tips',
    async (data, { rejectWithValue }) => {
        try {
            const config = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
            const uri = '/tips';
            const endpoint = baseUrl + uri;
            const response = await axios.post(endpoint, JSON.stringify(data), config);
            return response.data;
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

export const updateTip = createAsyncThunk(
    'put/tips',
    async (data, { rejectWithValue }) => {
        try {
            const config = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
            const uri = '/tips';
            const endpoint = baseUrl + uri;
            const response = await axios.put(endpoint, JSON.stringify(data), config);
            return response.data;
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

const getTips = createAsyncThunk(
    'get/tips',
    async (id, { rejectWithValue, getState }) => {
        const state = getState();
        if (!state.tips[id]) {
            return fetchTips(id, rejectWithValue);
        }
    }
);

export default getTips;