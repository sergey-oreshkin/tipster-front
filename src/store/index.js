import { configureStore } from "@reduxjs/toolkit";

import AppReducer from "./AppSlice";

export const store = configureStore({
    reducer: AppReducer
});