import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import userReducer from './features/user/userSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  }
})
export default store

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>