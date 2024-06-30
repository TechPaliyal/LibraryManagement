import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-1prw0ebk7dps1wbj.us.auth0.com"
    clientId="mhqpHw7Wn6biOx16hB96FgFnhMmwOrhx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <App />
  </Auth0Provider>
 
    
  
)
