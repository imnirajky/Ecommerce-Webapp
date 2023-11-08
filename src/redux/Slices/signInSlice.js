import { createSlice } from "@reduxjs/toolkit";



const SignInSlice = createSlice({
    name: "SignInSlice",
    initialState: {
        user: ""
    },
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { logIn } = SignInSlice.actions;
export default SignInSlice.reducer;