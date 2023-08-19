import { createStore } from 'redux';

const initialState = {
    isLoggedIn: false
};

export const login = () => ({
    type: 'LOGIN'
});

export const logout = () => ({
    type: 'LOGOUT'
});

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};

export const store = createStore(rootReducer);