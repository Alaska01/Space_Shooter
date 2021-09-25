const id = 'cDBVAVTstGDE19RprsSq ';
const getBoard = async () => {
  try {
    const endPoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const response = await fetch(endPoint);
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const postScore = async (user, score) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ user, score }),
    });

    return await response.json();
  } catch (err) {
    throw new Error(err);
  }
};
export { getBoard, postScore };