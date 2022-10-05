import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";

import App from './App';
import {reducer} from "./reducers";


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
             <App />
        </Provider>
    </BrowserRouter>
);

