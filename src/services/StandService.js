import axios from 'axios';

const API_URL = 'http://localhost:3000/stands';

export const getAllStands = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};