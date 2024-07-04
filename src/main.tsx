import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='242262845309-39bpg52tudhjf6qiokeomqincs4h4h3n.apps.googleusercontent.com'>
     <App />
     </GoogleOAuthProvider>
)
