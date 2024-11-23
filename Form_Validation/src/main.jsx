import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Signup from './components/Signup';
// import LoginButton from './components/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ialhkwhp0luo5twv.us.auth0.com"
      clientId="7UeZxgpB3vSyk1ec5sdgn51Dqh0xLdkR"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="login" element={<LoginButton />} /> */}
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
