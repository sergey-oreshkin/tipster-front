import { combineReducers, configureStore} from "@reduxjs/toolkit";
import ProfileReducer from "./ProfileSlice";

const store = configureStore({
    reducer: ProfileReducer,
});

export default store;