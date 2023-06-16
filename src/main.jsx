import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormContextProvider } from './components/context/form.context.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
