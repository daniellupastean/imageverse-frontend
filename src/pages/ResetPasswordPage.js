import {Form,Title,Button,Input,TxtSpan,TxtP,Container} from "../components/form.styled"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    let navigate = useNavigate();
  return (
    <Container>
    <div><TxtSpan style={{"color": "#359AEF"}}>IMAGE</TxtSpan><TxtSpan style={{"color": "#FFFFFF"}}>VERSE</TxtSpan></div>
    <TxtP>A place for your pictures</TxtP>
  <Form>
    <Title>Set a new password</Title>
    <Input type={"password"} placeholder='Password'/>
    <Input type={"password"} placeholder='Confirm password'/>
    <Button onClick={() => {navigate("/login")}}>RESET</Button>
  </Form>
  </Container>); 
    }