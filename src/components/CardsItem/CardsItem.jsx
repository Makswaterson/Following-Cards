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
  // const { tweets, followers, avatar, following, id } = card;
  const [active, setActive] = useState(card.following);
  // const [followerNumber, setFollowerNumber] = useState(followers);

  let falseFollow = !active;
  const activeToggleBtn = async () => {
    if (!active) {
      card.followers += 1;
    } else {
      card.followers -= 1;
    }
    await updateTweet(card.id, falseFollow, card.followers).then(
      setActive(!active)
    );
  };

  // const activeToggleBtn = async () => {
  //   let falseFollow = !active;
  //   if (!active) {
  //     setFollowerNumber(followers);
  //     await updateTweet(id, falseFollow, followers + 1);
  //     // setActive(falseFollow);
  //   } else {
  //     setFollowerNumber(followers);
  //     await updateTweet(id, falseFollow, followers - 1);
  //     // setActive(falseFollow);
  //   }
  //   // console.log(!active);
  //   await updateTweet(id, falseFollow, followers);
  //   setActive(falseFollow);
  // };
  return (
    <div>
      <ContainerList>
        <Picture></Picture>
        <Rectangle></Rectangle>
        <Boy>
          <AvatarUser src={card.avatar} alt="photos" />
        </Boy>
        <TextContainer>
          <CardText>{card.tweets} Tweets</CardText>
          <CardText>{card.followers} Followers</CardText>
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
