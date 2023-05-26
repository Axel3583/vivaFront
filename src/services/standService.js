import axios from 'axios'

const API_URL = 'http://localhost:3000/tickets';

export const getAllStands = async () => {
    const reponse = await axios.get(API_URL)
    return reponse.data;
}