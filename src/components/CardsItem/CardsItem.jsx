import { useState } from 'react';
import { updateTweet } from 'services/GetCards';
import {
  Btn,
  FollowingBtn,
  ContainerList,
  Picture,
  Rectangle,
  Boy,
  TextContainer,
  CardText,
  AvatarUser,
} from './CardsItem.styled';

const CardInfo = ({ card }) => {
  const [active, setActive] = useState(card.following);

  const formatFollowers = (followers, tweets) =>
    new Intl.NumberFormat('en-US').format(card.followers, card.tweets);

  let falseFollow = !active;
  const activeToggleBtn = async () => {
    if (active) {
      card.followers += 1;
    } else {
      card.followers -= 1;
    }
    await updateTweet(card.id, falseFollow, card.followers).then(
      setActive(!active)
    );
  };

  return (
    <div>
      <ContainerList>
        <Picture></Picture>
        <Rectangle></Rectangle>
        <Boy>
          <AvatarUser src={card.avatar} alt="photos" />
        </Boy>
        <TextContainer>
          <CardText>{formatFollowers()} Tweets</CardText>
          <CardText>{formatFollowers()} Followers</CardText>
        </TextContainer>
        {active ? (
          <Btn type="button" onClick={activeToggleBtn}>
            Follow
          </Btn>
        ) : (
          <FollowingBtn type="button" onClick={activeToggleBtn}>
            Following
          </FollowingBtn>
        )}
      </ContainerList>
    </div>
  );
};
export default CardInfo;
