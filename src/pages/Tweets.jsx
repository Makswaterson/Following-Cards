import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getAllCards } from '../services/GetCards';
import { List, Links } from './Tweets.styled';
import { Btn } from '../components/CardsItem/CardsItem.styled';
import { CardList } from '../components/CardsList/CardsList';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    // if (cards === null) {
    //   return;
    // }
    setLoading(true);
    const allTweetsFetch = async () => {
      try {
        const data = await getAllCards();
        setCards(data);
        console.log(data);
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
      <Link to={backLinkLocationRef.current}>
        <Btn type="button">Return back</Btn>
      </Link>
      <CardList cards={cards} />
      <Btn type="button">Load more</Btn>
    </section>
  );
};

export default Cards;
