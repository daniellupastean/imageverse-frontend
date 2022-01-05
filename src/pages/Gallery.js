import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import { FaImages } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Gallery(props) {
  let navigate = useNavigate();
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('token');
      const url = `${process.env.REACT_APP_API_URL}/gallery`;
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };

      try {
        const fetchResponse = await fetch(url, config);
        const data = await fetchResponse.json();
        if (!data || data.message) {
          console.log('Something went wrong');
          return;
        }

        const imagesFromDB = data;
        const newImages = imagesFromDB.map((image, i) => (
          <Card key={i} link={image.link} />
        ));
        setImages(newImages);

        console.log(imagesFromDB);
        console.log('Images retrieved successfully');
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const handleLogout = (event) => {
    localStorage.removeItem('token');
    props.setToken(null);
  };

  return (
    <PageContainer>
      <Sidebar>
        <div>
          <Span>IMAGE</Span>
          <Span style={{ color: '#FFFFFF' }}>VERSE</Span>
        </div>
        <ImageUser></ImageUser>
        <PageButton>
          <div>
            <Text>
              <FaArrowUp />
              Upload pictures
            </Text>
          </div>
        </PageButton>
        <PageButton>
          <Text>
            <FaImages />
            My gallery
          </Text>
        </PageButton>
        <Logout onClick={handleLogout}>
          <FiLogOut />
          Log out
        </Logout>
      </Sidebar>
      <CardsContainer>{images}</CardsContainer>
    </PageContainer>
  );
}

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

  transition: margin 1s;

  @media (max-width: 1000px) {
    margin-left: -300px;
  }
`;
const Logout = styled.button`
  width: 100%;
  margin-top: auto;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px 0;
  padding-left: 10%;
  color: #ffffff;
  background: none;
  border: none;
  text-align: left;
  font-size: 18px;
  font-weight: 400;

  a {
    text-decoration: none;
    font-family: Montserrat;
  }
  &:hover {
    filter: brightness(0.8);
    background: #1f2329;
  }
  svg {
    margin-right: 30px;
    size: 17px;
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
const Text = styled.p`
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
  width: 100%;
  justify-content: center;
  align-content: flex-start;
`;
const Card = styled.div`
  background: url(${(p) => p.link});
  border-radius: 8px;
  padding-bottom: 200px;
  width: 260px;
  margin: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 676px) {
    width: 100%;
    padding-bottom: 75%;
  }
`;
