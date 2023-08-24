import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';


interface UserState {
    uid: string | null;
}

const userSlice = createSlice({
    name: 'user',
    initialState: { uid: null } as UserState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.uid = action.payload.uid;
        },
        logoutUser: (state) => {
            state.uid = null;
        }
    }
});

export const { setUser, logoutUser } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})