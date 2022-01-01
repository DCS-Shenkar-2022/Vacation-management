import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import VacationList from './components/vacationsList/vacationsList.js';

import Search from './components/search/search'

import MainSection from './components/mainSection/mainSection.js'

import Form from './components/form/form.js'

import FormSection from './components/formSection/formSection.js'
import './style/font.css';

import App from './components/app/app.js'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// reportWebVitals();
