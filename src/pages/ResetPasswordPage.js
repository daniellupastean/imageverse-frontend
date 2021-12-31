import {
  Form,
  Title,
  Button,
  Input,
  Motto,
  Container,
} from '../components/form.styled';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

export default function ResetPasswordPage() {
  let navigate = useNavigate();
  return (
    <Container>
      <Logo />
      <Motto>A place for your pictures</Motto>
      <Form>
        <Title>Set a new password</Title>
        <Input type={'password'} placeholder="Password" />
        <Input type={'password'} placeholder="Confirm password" />
        <Button
          onClick={() => {
            navigate('/login');
          }}
        >
          RESET
        </Button>
      </Form>
    </Container>
  );
}
