// là file chạy đầu tiên, nơi khai báo react, nơi react bắt nguồn, bắt đầu khởi chạy
//file tổng hợp all code rect và nhúng vào div có id root
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
    <Layout></Layout>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
