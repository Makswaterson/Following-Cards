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

const CardInfo = ({
  card: { user, tweets, followers, avatar, following, id },
}) => {
  const [active, setActive] = useState([following]);

  let falseFollow = !active;

  const activeToggleBtn = async () => {
    if (falseFollow) {
      followers += 1;
    } else {
      followers -= 1;
    }
    await updateTweet(id, falseFollow);
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
          <CardText>{followers} Followers</CardText>
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
