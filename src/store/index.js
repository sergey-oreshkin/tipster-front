import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileSlice";
import noteReducer from "./NoteSlice";

const store = configureStore({
    reducer: {
        profile: profileReducer,
        note: noteReducer
    }
});

export default store;