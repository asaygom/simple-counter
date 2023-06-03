import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let seconds = 0;

setInterval(()=>{
  const one = Math.floor(seconds/1);
  const two = Math.floor(seconds/10);
  const three = Math.floor(seconds/100);
  const four = Math.floor(seconds/1000);
  const five = Math.floor(seconds/10000);
  seconds++
  root.render(
    <React.StrictMode>
      <App digitOne={one%10} digitTwo={two%10} digitThree={three%10} digitFour={four%10} digitFive={five%10}/>
    </React.StrictMode>
  );
},1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
