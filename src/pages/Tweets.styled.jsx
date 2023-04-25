import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  font-size: 600;
  color: black;

  :hover {
    color: orangered;
    background: gray;
    opacity: 0.7;
  }
  &.active {
    color: orangered;
    border: 1px solid red;
  }
`;
