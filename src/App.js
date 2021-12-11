import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './LoginPage';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    font-family: "Roboto", sans-serif;
  }

`;

const Container = styled.div`
  background: red;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <LoginPage />
    </Container>
  );
}

export default App;
