import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import VacationList from './components/vacationsList/vacationsList.js'
import './style/font.css'

ReactDOM.render(
  <React.StrictMode>
    <VacationList />
  </React.StrictMode>,
  document.getElementById('root')
);



// reportWebVitals();
