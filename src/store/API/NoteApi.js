import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../utils/AxiosApiInstance";
import { apiPrefix, hostUrl, themesUri, tipsUri } from "../../utils/constants";

export const getThemes = createAsyncThunk(
    'get/themes',
    async (data, { rejectWithValue }) => {
        try {
            const endpoint = hostUrl + apiPrefix + themesUri;
            const response = await apiClient.get(endpoint);
            return response.data;
        } catch (err) {
            if (err.isAxiosError) {
                if (err.response.status !== 0) {
                    return rejectWithValue({ data: err.response.data, status: err.response.status });
                }
                return rejectWithValue({ data: { message: 'Сервер не доступен!' } });
            }
            return rejectWithValue({ data: { message: 'Неизвестная ошибка ' + err } });
        }
    }
);

export const createTheme = createAsyncThunk(
    'post/theme',
    async (data, { rejectWithValue }) => {
        try {
            const endpoint = hostUrl + apiPrefix + themesUri;
            const response = await apiClient.post(endpoint, JSON.stringify(data));
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

export const getTip = createAsyncThunk(
    'get/tip',
    async (themeId, { rejectWithValue }) => {
        try {
            const endpoint = hostUrl + apiPrefix + tipsUri + '?themeId=' + themeId;
            const response = await apiClient.get(endpoint);
            console.log(response)
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

export const createTip = createAsyncThunk(
    'post/tip',
    async (data, { rejectWithValue }) => {
        try {
            const endpoint = hostUrl + apiPrefix + tipsUri;
            const response = await apiClient.post(endpoint, JSON.stringify(data));
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

export const updateTip = createAsyncThunk(
    'put/tips',
    async (data, { rejectWithValue }) => {
        try {
            const endpoint = hostUrl + apiPrefix + tipsUri;
            const response = await apiClient.put(endpoint, JSON.stringify(data));
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