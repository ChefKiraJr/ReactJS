import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import CardApp from './component/CardApp';
// import StateFullComponent from './container/StateFullComponent';
// import Head from './component/Head';
// import Kartu from './component/Kartu';
// import Tabel from './component/Tabel';
// import Login from './component/Login';
// import Signup from './component/Signup';
// import Header from './component//Header';
import Home from './page/index';
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
