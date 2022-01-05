import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px;
  width: 100%;
  max-width: 500px;
  background: #0f1319;
  border-radius: 20px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #359aef;
    text-decoration: none;
  }
  p {
    font-family: 'Montserrat';
    font-size: 14px;
    color: #787c82;
  }
`;
export const Title = styled.h3`
  margin: 50px 0;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 26px;
  color: #787c82;

  @media (max-width: 450px) {
    margin: 30px 0;
  }
`;
export const Input = styled.input`
  margin-top: 20px;
  width: 75%;
  background: url(icons/emaillogo.png) no-repeat scroll 7px 7px;
  border: 1px solid #55595e;
  box-sizing: border-box;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 200;
  padding: 15px 50px;
  color: #ffffff;

  @media (max-width: 450px) {
    padding: 15px 30px;
  }
`;

export const Button = styled.button`
  width: 75%;
  background: #359aef;
  border: 1px solid #55595e;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 15px 50px;
  font-style: 'Montserrat';
  font-size: 16px;
  color: white;
  font-weight: 900;
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    filter: brightness(0.8);
  }
`;

export const Motto = styled.p`
  padding: 5px;
  margin-bottom: 10px;
  font-family: Montserrat;
  font-size: 16px;
  color: #787c82;

  @media (max-width: 450px) {
    font-size: 14px;
    margin-bottom: 0;
  }
`;
export const Container = styled.div`
  padding: 20px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    padding: 15px;
  }
`;
