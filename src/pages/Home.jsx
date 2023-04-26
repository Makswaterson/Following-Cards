import { useState, useEffect } from 'react';
// import { homeTweet } from '../services/GetCards';
import { Loader } from 'components/Loader/Loader';

function Home() {
  // const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const getStartCard = async () => {
  //     try {
  //       const { results } = await homeTweet(1);
  //       setCard(results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getStartCard();
  // }, []);

  return (
    <>
      <h1>The perfect cards for today:</h1>
      {loading && <Loader />}
    </>
  );
}

export default Home;
