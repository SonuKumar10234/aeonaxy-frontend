import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { AuthProvider } from './contexts/auth-context';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ToastContainer transition={Slide} />
      <App />
    </AuthProvider>
  </React.StrictMode>
);

