import { createGlobalStyle } from 'styled-components';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #0A0D11;
    font-family: Montserrat;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
