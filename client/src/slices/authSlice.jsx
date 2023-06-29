import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const player = JSON.parse(localStorage.getItem('player'));

const initialState = {
    player: player? player : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const register = createAsyncThunk('auth/register', async (player, thunkAPI) => {
        try {
            return await authService.register(player)
        } catch (error) {
            const errorResponse = (error.response && error.response.data.errors);
            console.log(errorResponse);
            const errorFields = Object.keys(errorResponse);
            const errors = {};
            errorFields.forEach(field => {
                errors[field] = errorResponse[field].message;
            });
            return thunkAPI.rejectWithValue(errors);
        }
    })

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
})

export const login = createAsyncThunk('auth/login', async (player, thunkAPI) => {
        try {
            const response = await authService.login(player);
            return response;
        } catch (error) {
            const errorResponse = (error.response && error.response.data.message);
            console.log(error.response);
            console.log(error.response.data.message);
            return thunkAPI.rejectWithValue(errorResponse);
        }
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
            state.errors = {};
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.player = action.payload;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errors = action.payload || {};

            if (action.payload && typeof action.payload === 'object') {
                Object.keys(action.payload).forEach((fieldName) => {
                    state.errors[fieldName] = action.payload[fieldName];
                })
            }
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.player = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload || {};
            state.player = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.player = null;
        })
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;