import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieReducer from './slicers/MovieSlice';

import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key:"root",
    version :1,
    storage
};

const rootReducer = combineReducers({
    movie:movieReducer
});

const persistedReducer = persistReducer(persistConfig,rootReducer)


 const store = configureStore({
    reducer : persistedReducer
})

export default store