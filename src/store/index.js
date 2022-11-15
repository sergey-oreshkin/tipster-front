import { configureStore } from "@reduxjs/toolkit";

import AppReducer from "./AppSlice";

export default store = configureStore({
    reducer: AppReducer
});