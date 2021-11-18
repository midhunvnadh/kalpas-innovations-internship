import { configureStore } from '@reduxjs/toolkit'
import siteReducer from './data/siteSlice';

export default configureStore({
    reducer: { posts: siteReducer },
})