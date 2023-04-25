import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1199px;
  margin: 0 auto;
  padding: 0 30px;
`;
export const Header = styled.header`
  display: flex;
  width: 1179px;
  height: 50px;
  padding: 10px 15px;
  border-bottom: 2px solid gray;
  border-radius: 10.3108px;
  box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  padding: 10px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;
export const Nav = styled.nav`
  display: flex;
`;
export const NavLinks = styled(NavLink)`
  color: black;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const StyledLink = styled(NavLink)`
  color: black;
  padding: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: larger;
  font-weight: bold;

  &.active {
    color: #ae84de;
    scale: 1.2;
  }
`;
