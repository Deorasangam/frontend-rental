import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Change to your backend URL if needed

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
