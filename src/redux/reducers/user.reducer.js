import { createSlice } from "@reduxjs/toolkit";

export const initialUser = {
    userName: '',
    email: '',
    isLoggedIn: false,
    token: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        setUser: (state, action) => {
            const {  token, userName,email, id  } = action.payload;
            return {
                ...state,
                isLoggedIn: !!id,
                email,
                token,
                userName,
                userId: id ? Number(id) : null,
            }
        },

        removeUser: () => {
            return initialUser;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;