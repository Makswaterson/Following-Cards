import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getAllCards } from '../services/GetCards';
import { Links } from './Tweets.styled';
import { BtnFunc } from '../components/CardsItem/CardsItem.styled';
import { CardList } from '../components/CardsList/CardsList';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    const allTweetsFetch = async () => {
      try {
        const data = await getAllCards();
        setCards(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    allTweetsFetch();
  }, []);

  return (
    <section>
      {loading && <Loader />}
      {error !== null && <p>Sorry,there is no cards</p>}
      <Links to={backLinkLocationRef.current}>
        <BtnFunc type="button">Return back</BtnFunc>
      </Links>
      <CardList cards={cards} />
      <BtnFunc type="button">Load more</BtnFunc>
    </section>
  );
};

export default Cards;
