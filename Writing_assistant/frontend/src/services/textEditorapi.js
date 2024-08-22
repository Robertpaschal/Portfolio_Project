import axios from 'axios';

const fetchCardDataFromAPI = async (session) => {
  try {
    const response = await axios.post('',session, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(session),
    });
    return response.data.session
  } catch (error) {
    console.error('Failed to fetch data from the API', error);
    throw new Error('Failed to fetch data from the API');
  }
};

export default fetchCardDataFromAPI;