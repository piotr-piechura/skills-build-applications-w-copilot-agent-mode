import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { StrictMode } from 'react';


import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
