const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eq3gWA8NAqVBKKFNmQmM/scores',
  );
  const endScore = await response.json();
  return endScore.result;
};

export default getData;