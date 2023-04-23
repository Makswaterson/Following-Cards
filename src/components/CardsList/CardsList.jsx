import { List, Links } from './CardsList.styled';
import CardInfo from '../CardsItem/CardsItem';

export const CardList = ({ cards }) => {
  return (
    <List>
      {cards.map(card => (
        <li key={card.id}>
          <CardInfo card={card} />
        </li>
      ))}
    </List>
  );
};
