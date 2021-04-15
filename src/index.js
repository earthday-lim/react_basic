import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //component made by react App.js의 js는 생략. 실제 구현 코드는 해당 파일에 있음
//component : customize html tag처럼 쓸 수 있음
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
