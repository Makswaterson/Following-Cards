import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Btn, ContainerList } from './CardsItem.styled';

const CardInfo = ({ card: { user, tweets, followers, avatar, id } }) => {
  return (
    <div>
      <ContainerList>
        <img src={avatar} alt={user} width="300px"></img>

        <section>
          <span>{tweets} Tweets</span>
          <p>{followers} Followers</p>
        </section>
        <Btn type="button">Follow</Btn>
      </ContainerList>
    </div>
  );
};
export default CardInfo;
