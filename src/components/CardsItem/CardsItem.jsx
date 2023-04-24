// import { Link, useLocation } from 'react-router-dom';
// import { useRef } from 'react';
import {
  Btn,
  ContainerList,
  Picture,
  Rectangle,
  Boy,
  TextContainer,
  CardText,
  AvatarUser,
} from './CardsItem.styled';

const CardInfo = ({ card: { user, tweets, followers, avatar, id } }) => {
  return (
    <div>
      <ContainerList>
        <Picture></Picture>
        <Rectangle></Rectangle>
        <Boy>
          <AvatarUser src={avatar} alt={avatar} />
        </Boy>
        <TextContainer>
          <CardText>{tweets} Tweets</CardText>
          <CardText>{followers} Followers</CardText>
        </TextContainer>
        <Btn type="button">Follow</Btn>
      </ContainerList>
    </div>
  );
};
export default CardInfo;
