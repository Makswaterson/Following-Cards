import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style: none;
`;
export const Links = styled(Link)`
  margin-bottom: 50px;
  text-decoration: none;
  :hover {
    box-shadow: 42.5777px 46.87386px 40.6216px rgba(35, 5, 132, 0.23);
  }
`;
