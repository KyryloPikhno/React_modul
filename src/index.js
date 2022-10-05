import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import {userReducer} from "./reducers";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={userReducer}>
             <App />
        </Provider>
    </BrowserRouter>
);

