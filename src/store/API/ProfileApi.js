import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../utils/AxiosApiInstance";
import { apiPrefix, hostUrl, userProfileUri } from "../../utils/constants";

export const getProfile = createAsyncThunk(
    'get/profile',
    async (data, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(hostUrl+ apiPrefix + userProfileUri);
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