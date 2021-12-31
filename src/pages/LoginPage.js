import {
  Form,
  Title,
  Button,
  Input,
  Motto,
  Container,
} from '../components/form.styled';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { useState } from 'react';

export default function LoginPage() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        return;
      }
      localStorage.setItem('token', data.accessToken);
      console.log('Successful login');
      navigate('/gallery');
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
          required
        />
        <Input
          value={password}
          onChange={onPasswordChange}
          type={'password'}
          placeholder="Password"
          required
        />
        <p style={{ width: '75%', textAlign: 'right', marginTop: '5px' }}>
          Forgot your <Link to="/reset-password">password</Link> ?
        </p>
        {/*Aici ar fi trebuit sa fie un input type="submit"*/}
        <Button type="submit">LOGIN</Button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
}
