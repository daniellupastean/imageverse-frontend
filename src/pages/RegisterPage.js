import {
  Form,
  Title,
  Button,
  Input,
  TxtSpan,
  Motto,
  Container,
} from '../components/form.styled';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

export default function RegisterPage() {
  let navigate = useNavigate();
  return (
    <Container>
      <Logo />
      <Motto>A place for your pictures</Motto>
      <Form autoComplete="off">
        <Title>Create an account</Title>
        <Input type={'text'} placeholder="Email" />
        <Input type={'password'} placeholder="Password" />
        <Input type={'password'} placeholder="Confirm password" />
        <Button
          onClick={() => {
            navigate('/login');
          }}
        >
          REGISTER
        </Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
}
