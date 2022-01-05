import { createGlobalStyle } from 'styled-components';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import ResetPasswordPage from './pages/ResetPasswordPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Gallery from './pages/Gallery';
import { useEffect, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #0A0D11;
    font-family: Montserrat;
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;


  }
  
  #root{
    width: 100vw;
  }
`;

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_API_URL}/me`;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };

      try {
        const fetchResponse = await fetch(url, config);
        const data = await fetchResponse.json();
        if (!data || data.message) {
          console.log('Something went wrong');
          localStorage.removeItem('token');
          setToken(null);
          return;
        }

        setToken(localStorage.getItem('token'));

        const userData = data;

        console.log(userData);
        console.log('Data retrieved successfully');
      } catch (e) {
        console.log(e);
        localStorage.removeItem('token');
        setToken(null);
      }
    }
    token && fetchData();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {!token && (
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
        )}
        {!token && <Route path="/register" element={<RegisterPage />} />}
        {/* <Route path="/reset-password" element={<ResetPasswordPage />} /> */}
        {token && (
          <Route path="/gallery" element={<Gallery setToken={setToken} />} />
        )}
        <Route
          path="*"
          element={
            token ? (
              <Navigate to="/gallery" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
