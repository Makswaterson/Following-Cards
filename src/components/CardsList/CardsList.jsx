import { List, Links } from './CardsList.styled';
import CardInfo from '../CardsItem/CardsItem';

export const CardList = ({ cards }) => {
  return (
    <List>
      {cards.map(card => (
        <Links key={card.id}>
          <CardInfo card={card} />
        </Links>
      ))}
    </List>
  );
};
