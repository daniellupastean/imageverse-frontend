import {
  Form,
  Title,
  Button,
  Input,
  Motto,
  Container,
  ErrorMessage,
} from '../components/form.styled';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { useState } from 'react';

export default function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    const url = `${process.env.REACT_APP_API_URL}/login`;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    try {
      const fetchResponse = await fetch(url, config);
      const data = await fetchResponse.json();
      if (!data || data.message || !data.accessToken) {
        console.log('Something went wrong');
        setPassword('');
        setEmail('');
        setError('Invalid credentials');
        return;
      }
      setError(null);
      localStorage.setItem('token', data.accessToken);
      props.setToken(data.accessToken);
      console.log('Successful login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Logo />
      <Motto>A place for your pictures</Motto>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Title>Login to continue</Title>
        <Input
          value={email}
          onChange={onEmailChange}
          type={'text'}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={onPasswordChange}
          type={'password'}
          placeholder="Password"
        />
        <p style={{ width: '75%', textAlign: 'right', marginTop: '5px' }}>
          Forgot your <Link to="/reset-password">password</Link> ?
        </p>
        {/*Aici ar fi trebuit sa fie un input type="submit"*/}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">LOGIN</Button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
}
