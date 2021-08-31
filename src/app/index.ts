import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stockReducer from './Stock.store'
import bolleanReducer from './Bollean.store'

const store = configureStore({
    reducer: {
        stock: stockReducer,
        bollean: bolleanReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store