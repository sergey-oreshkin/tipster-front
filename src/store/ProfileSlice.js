import { createSlice } from "@reduxjs/toolkit";

import { getProfile } from "./API/ProfileApi";

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        loggedIn: false,
        username: '',
        userPic: ''
    },
    reducers: {
        logout(state) {
            state.loggedIn = false;
            state.username = '';
            state.userPic = '';
            console.log('logout');
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProfile.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.loggedIn = true;
                    state.username = payload.username;
                    state.userPic = payload.pictureUrl;
                } else {
                    state.loggedIn = false;
                    state.username = '';
                    state.userPic = '';
                }
            })
            .addCase(getProfile.rejected, (state, { payload }) => {
                state.loggedIn = false;
                state.username = '';
                state.userPic = '';
                console.error(payload.message);
            })
    }
});

export const { logout } = ProfileSlice.actions;

export default ProfileSlice.reducer;