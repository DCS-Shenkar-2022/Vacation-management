import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import VacationList from './components/vacationsList/vacationsList.js';

import Search from './components/search/search'

import MainSection from './components/mainSection/mainSection.js'
import './style/font.css';

ReactDOM.render(
  <React.StrictMode>
    <MainSection />
  </React.StrictMode>,
  document.getElementById('root')
);



// reportWebVitals();
