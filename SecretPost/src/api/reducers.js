import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => action.payload,
        logoutUser: (state) => null,
    }
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})