import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import menuReducer from '../../redux/reducers/menu.reducer';


const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    menu: menuReducer,
});

const persistedState = persistReducer(persistConfig, reducer)
    ? persistReducer(persistConfig, reducer)
    : {};

const store = configureStore({
    reducer: persistedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export default store;
