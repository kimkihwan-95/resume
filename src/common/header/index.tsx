import styled from "styled-components";
import { MENU } from "../../constant/Menu";

const Header = () => {
  const handleScroll = (id: string, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;

      const isMobile = window.innerWidth <= 768;
      const scrollOffset = isMobile ? 0 : offset;

      window.scrollTo({
        top: elementPosition - scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper>
      <MenuItem onClick={() => handleScroll("home")}>KI HWAN's</MenuItem>
      <MenuWrapper>
        {MENU.map((item, index) => (
          <MenuItem key={index} onClick={() => handleScroll(item.link.toLowerCase(), 60)}>
            {item.title}
          </MenuItem>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px; /* 모바일에서는 여백을 줄임 */
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 0.5px solid black;
  z-index: 10;
  font-size: 18px;

  @media (max-width: 768px) {
    height: 50px; 
    font-size: 16px; 
    padding: 0 15px; 
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    color: lightblue;
    transition: all 0.3s;
  }
`;
