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

export default function RegisterPage() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email,
      password,
      name,
    };
    const url = `${process.env.REACT_APP_API_URL}/register`;
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
      if (!data || !data?.accessToken) {
        console.log(data?.message || 'Something went wrong');
        return;
      }
      localStorage.setItem('token', data.accessToken);
      console.log(data.message);
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
        <Title>Create an account</Title>
        <Input
          type={'text'}
          placeholder="Name"
          value={name}
          onChange={onNameChange}
        />
        <Input
          type={'text'}
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <Input
          type={'password'}
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <Input type={'password'} placeholder="Confirm password" />
        <Button type="submit">REGISTER</Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
}
