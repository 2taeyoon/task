import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
//import { composeWithDevTools } from 'redux-devtools-extension';

export interface UserState {
    isAuthenticated: boolean;
    uid: string | null;
    photoURL: string | null;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        uid: null,
        photoURL: null
    } as UserState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.isAuthenticated = true;
            state.uid = action.payload.uid;
            state.photoURL = action.payload.photoURL;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.uid = null;
            state.photoURL = null;
        }
    }
});

export const { setUser, logoutUser } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})