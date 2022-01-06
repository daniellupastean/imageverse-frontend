import styled, { css } from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { FaImages } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { useEffect, useState } from 'react';

export default function Gallery(props) {
  const [images, setImages] = useState([]);
  const [sidebar, setSidebar] = useState(
    window.innerWidth <= 1200 ? false : true
  );

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    setSidebar(!(window.innerWidth <= 1000));
  }, [dimensions.width]);

  useEffect(() => {
    sidebar
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll');
  }, [sidebar]);

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
      <Sidebar sidebar={sidebar}>
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
      <CardsContainer sidebar={sidebar}>{images}</CardsContainer>
      <Hamburger onClick={toggleSidebar} width={dimensions.width}>
        {sidebar ? (
          <CgClose size="30px" color="white" />
        ) : (
          <GiHamburgerMenu size="30px" color="white" />
        )}
      </Hamburger>
    </PageContainer>
  );
}

const Hamburger = styled.div`
  background: #0f1319;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  padding: 10px;
  position: fixed;
  top: 15px;
  left: 20px;
  cursor: pointer;
  z-index: 4;
  ${(props) =>
    props.width > 1000 &&
    css`
      display: none;
    `}
`;

const Span = styled.span`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 32px;
  line-height: 59px;
  color: #359aef;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  padding: 20px 0;
  min-height: 100vh;
  font-size: 16px;
  background: #0f1319;
  max-height: 100vh;
  position: sticky;
  top: 0;
  z-index: 3;

  transition: 1s;

  ${(props) =>
    props.sidebar && window.innerWidth <= 1000
      ? css`
          position: fixed;
          margin-left: 0;
          padding-top: 60px;
        `
      : !props.sidebar && window.innerWidth <= 1000
      ? css`
          position: fixed;
          margin-left: -300px;
          padding-top: 60px;
        `
      : css`
          position: sticky;
        `}
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
`;
const Text = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
`;
const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: min(40px, 4%);
  margin-top: 60px;
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
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }

  @media (max-width: 676px) {
    width: 100%;
    padding-bottom: 75%;
  }
`;
