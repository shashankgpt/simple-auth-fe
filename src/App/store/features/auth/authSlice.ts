import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authActions'


export type AuthState = {
  loading: boolean
  userInfo: any
  userToken: string | null
  error: string | null
  success: boolean
}

const initialState: AuthState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: "hello",
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(registerUser.fulfilled, (state) => {
          state.loading = false
          state.success = true
        })
        .addCase(registerUser.rejected, (state, { payload }: any) => {
          state.loading = false
          state.error = payload
        })
    },
})

export default authSlice.reducer