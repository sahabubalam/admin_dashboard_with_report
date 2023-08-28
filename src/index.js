import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import store from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import Loading from "./components/lib/common/Loading";
import { Suspense } from 'react';

const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <PersistGate
            loading={null}
            persistor={persistor}
        >
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
