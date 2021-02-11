import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import { toast } from "react-toastify";
import registerServiceWorker from './registerServiceWorker';

import {store, persitor} from './Redux/store'


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <PersistGate persistor={persitor} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </PersistGate>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker(toast);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

