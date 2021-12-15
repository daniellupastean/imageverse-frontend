import styled from 'styled-components';
import { Link } from "react-router-dom";
import {FaArrowUp} from 'react-icons/fa';
import {FaImages} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi'

const Span = styled.span`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 32px;
    line-height: 59px;
    color: #359AEF;
`;
const MenuBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100vh;
    font-size: 16px;
    background: #0F1319;

`;
const Logout = styled.div`
    width: 100%;
    margin-top: auto;
    margin-bottom: 20px;
    
    a{
        padding-left:10%;
        text-decoration: none;
        color: #FFFFFF;
        font-family: Montserrat;
        cursor: pointer;
    }
    a:hover {
        filter: brightness(0.8);
    }
    svg{
        margin-right: 30px;
    }
`;
const ImageUser = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
    background-image: url("https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100px;
    height: 100px;
`;
const PageButton = styled.button`
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    text-align: left;
    padding-left:10%;
    :hover{
    filter: brightness(0.8);
    background: #1F2329;
  }
  svg{
      margin-right: 30px;
  }
`;
const Text = styled.h3`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
`;

export default function Desktop1(){
    return (
        <div>
            <MenuBar>
                <div><Span>IMAGE</Span><Span style={{"color": "#FFFFFF"}}>VERSE</Span></div>
                <ImageUser></ImageUser>
                <PageButton>
                    <p><Text><FaArrowUp size="17px"/>Upload pictures</Text></p>
                </PageButton>
                <PageButton><Text><FaImages size="17px"/>My gallery</Text></PageButton>
                <Logout><Link to="/login"><FiLogOut size="14px"/>Log out</Link></Logout>
            </MenuBar>
        </div>
    );
}