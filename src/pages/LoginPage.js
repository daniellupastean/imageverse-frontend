<<<<<<< HEAD
import {Form,Title,Button,Input,TxtP,TxtSpan,Container} from "../components/form.styled"
import { Link, useNavigate } from "react-router-dom";
=======
import {
  Form,
  Title,
  Button,
  Input,
  Motto,
  TxtSpan,
  Container,
} from '../components/form.styled';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
>>>>>>> 40669658d1dc8915c05d39ec786c3f5cfd04e7a6

export default function LoginPage() {
  let navigate = useNavigate();
  return (
    <Container>
<<<<<<< HEAD
    <div><TxtSpan style={{"color": "#359AEF"}}>IMAGE</TxtSpan><TxtSpan style={{"color": "#FFFFFF"}}>VERSE</TxtSpan></div>
    <TxtP>A place for your pictures</TxtP>
  <Form>
    <Title>Login to continue</Title>
    <Input type={"text"} placeholder='Email' required/>
    <Input type={"password"} placeholder='Password' required/>
    <p style={{"width":"75%","text-align":"right","margin-top":"5px"}}>Forgot your <Link to="/reset-password">password</Link> ?</p>
    {/*Aici ar fi trebuit sa fie un input type="submit"*/}
    <Button onClick={() => {navigate("/home")}}>LOGIN</Button>
    <p>Don't have an account? <Link to="/register">Register</Link></p>
  </Form>
  </Container>); 
    }
=======
      <Logo />
      <Motto>A place for your pictures</Motto>
      <Form autoComplete="off">
        <Title>Login to continue</Title>
        <Input type={'text'} placeholder="Email" required />
        <Input type={'password'} placeholder="Password" required />
        <p style={{ width: '75%', 'text-align': 'right', 'margin-top': '5px' }}>
          Forgot your <Link to="/reset-password">password</Link> ?
        </p>
        {/*Aici ar fi trebuit sa fie un input type="submit"*/}
        <Button
          onClick={() => {
            navigate('/home');
          }}
        >
          LOGIN
        </Button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
}
>>>>>>> 40669658d1dc8915c05d39ec786c3f5cfd04e7a6
