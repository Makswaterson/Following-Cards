import styled from 'styled-components';
import boy from '../../Images/Boy.png';
import picture from '../../Images/picture2 1.png';
import rectangle from '../../Images/Rectangle 1.png';

export const Btn = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;

  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: orangered;
  }
`;
export const ContainerList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  padding-bottom: 28px;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  display: 'block';
  gap: 50px;
  border-bottom: 2px solid orangered;
  /* @media (min-width: 600px) {
    display: flex;
    max-width: 1200;
  } */
`;
