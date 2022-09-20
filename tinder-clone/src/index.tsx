import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AUTH0_BASE_URL = "https://localhost:3000";

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-opmozjaa.us.auth0.com"
      clientId="c2myyEju3WbyPYQLqrzTb5wdqoxBbqsF"
      redirectUri={`${AUTH0_BASE_URL}/api/auth/callback`}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
