import styled from 'styled-components';
import picture from '../../images/picture.png';
import rectangle from '../../images/rectangle.png';
import boy from '../../images/boy.png';

export const Btn = styled.button`
  background: #ebd8ff;
  margin-top: 25px;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms scale 1;
  text-decoration: none;
  &:hover {
    background-color: #ae84de;
    transform: scale(1.1);
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

  gap: 50px;
`;
export const Picture = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${picture});
`;
export const Rectangle = styled.div`
  width: 100%;
  height: 8px;
  background-image: url(${rectangle});
`;
export const Boy = styled.div`
  position: absolute;
  top: 190px;
  left: 140px;
  width: 83px;
  height: 80px;
  padding: 0px;
  background-image: url(${boy});
  padding: 7px 1px 2px 11px;
  border-radius: 85.9232px;
  overflow: hidden;
`;
export const TextContainer = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const CardText = styled.section`
  width: fit-content;
  height: 24px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const FollowingBtn = styled.button`
  margin-top: 25px;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms scale 1;
  &:hover {
    background-color: #ae84de;
    scale: 1.1;
  }
`;
export const AvatarUser = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 60%;
`;
export const BtnFunc = styled.button`
  display: block;
  margin: 25px auto;
  background: #ebd8ff;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms scale 1;
  text-decoration: none;
  &:hover {
    background-color: #ae84de;
    transform: scale(1.1);
  }
`;
