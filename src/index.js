import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mega from './Mega';
import Quina from './Quina';
import Pagamento from './Pagamento';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>   
  </React.StrictMode>,
  document.getElementById('root'),  
);
ReactDOM.render(
  <React.StrictMode>
    <Mega/>
  </React.StrictMode>,
  document.getElementById('resultado'),  
);





reportWebVitals();
