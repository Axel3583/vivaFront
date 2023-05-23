import axios from 'axios';

const API_URL = 'http://localhost:3000/tickets';

export const getAllTickets = async () => {

    const response = await axios.get(API_URL);
    return response.data;
};

export const getTicketByCode = async (code) => {
    const response = await axios.get(`${API_URL}/${code}`);
    return response.data;
};

export const validateTicket = async (code) => {
    try {
        const response = await axios.post(`${API_URL}/${code}/validate`);
        return { isValid: true, ticket: response.data };
    }
    catch (error) {
        return { isValid: false, ticket: null };
    }
};