import getData from './getData';

const addScores = async (name, score) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eq3gWA8NAqVBKKFNmQmM/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    .then(() => getData());
  const postedScore = await response.json();
  return postedScore;
};

export default addScores;