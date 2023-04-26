import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getPage } from '../services/GetCards';
import { Links } from './Tweets.styled';
import { BtnFunc } from '../components/CardsItem/CardsItem.styled';
import { CardList } from '../components/CardsList/CardsList';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showBtn, setshowBtn] = useState(false);

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    const allTweetsFetch = async () => {
      try {
        const data = await getPage(page);
        if (cards === []) {
          setCards(data);
        } else {
          setCards([...cards, ...data]);
        }
        setshowBtn(page < Math.ceil(12 / 3));
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    allTweetsFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPage, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <section>
      {loading && <Loader />}
      {error && <p>Sorry,there is no cards...</p>}
      <Links to={backLinkLocationRef.current}>
        <BtnFunc type="button">Return back</BtnFunc>
      </Links>
      <CardList cards={cards} />
      {loading ? (
        <Loader />
      ) : (
        showBtn && (
          <BtnFunc type="button" onClick={onLoadMore}>
            Load more
          </BtnFunc>
        )
      )}
    </section>
  );
};

export default Cards;
