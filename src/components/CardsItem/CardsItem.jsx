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

const CardInfo = ({ card: { tweets, followers, avatar, following, id } }) => {
  const [active, setActive] = useState(following);
  const [followerNumber, setFollowerNumber] = useState(followers);
  console.log(following);
  let falseFollow = !active;

  // const activeToggleBtn = async () => {
  //   if (!active) {
  //     followers += 1;
  //   } else {
  //     followers -= 1;
  //     console.log(!active);
  //   }
  //   await updateTweet(id, falseFollow, followers);
  //   setActive(falseFollow);
  // };

  const activeToggleBtn = async () => {
    if (!active) {
      setFollowerNumber(followers);
      await updateTweet(id, falseFollow, followers + 1);
      // setActive(falseFollow);
    } else {
      setFollowerNumber(followers);
      await updateTweet(id, falseFollow, followers - 1);
      // setActive(falseFollow);
    }
    console.log(!active);
    await updateTweet(id, falseFollow, followers);
    setActive(falseFollow);
  };
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
          <CardText>{followerNumber} Followers</CardText>
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
