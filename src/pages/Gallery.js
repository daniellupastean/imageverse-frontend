import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import { FaImages } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Span = styled.span`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 32px;
  line-height: 59px;
  color: #359aef;
  @media (max-width: 400px) {
    font-size: 0;
  }
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  padding: 20px 0;
  height: calc(100vh-20px);
  font-size: 16px;
  background: #0f1319;
  max-height: 100vh;
  position: sticky;
  top: 0;
`;
const Logout = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 20px;

  a {
    padding-left: 10%;
    text-decoration: none;
    color: #ffffff;
    font-family: Montserrat;
    cursor: pointer;
  }
  a:hover {
    filter: brightness(0.8);
  }
  svg {
    margin-right: 30px;
    size: 17px;
  }
  @media (max-width: 400px) {
    width: 0;
    margin: 0;
    Link {
      font-size: 0;
    }
    svg {
      size: 0;
      margin-right: 0;
    }
  }
`;
const ImageUser = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  background-image: url('https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png');
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
  padding-left: 10%;
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
    background: #1f2329;
  }
  svg {
    margin-right: 30px;
    size: 14px;
  }
  @media (max-width: 400px) {
    width: 0;
  }
`;
const Text = styled.h3`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 400px) {
    font-size: 0;
  }
`;
const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px;

  justify-content: center;
  align-content: flex-start;
`;
const Card = styled.div`
  background: #1f2329;
  border-radius: 8px;
  height: 206px;
  width: 171px;
  margin: 15px;
`;
export default function Gallery() {
  const cards = [];
  for (let i = 0; i < 1000; i++) cards.push(<Card />);
  return (
    <PageContainer>
      <Sidebar>
        <div>
          <Span>IMAGE</Span>
          <Span style={{ color: '#FFFFFF' }}>VERSE</Span>
        </div>
        <ImageUser></ImageUser>
        <PageButton>
          <p>
            <Text>
              <FaArrowUp />
              Upload pictures
            </Text>
          </p>
        </PageButton>
        <PageButton>
          <Text>
            <FaImages />
            My gallery
          </Text>
        </PageButton>
        <Logout>
          <Link to="/login">
            <FiLogOut />
            Log out
          </Link>
        </Logout>
      </Sidebar>
      <CardsContainer>{cards}</CardsContainer>
    </PageContainer>
  );
}
