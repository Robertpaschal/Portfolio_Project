import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAutoCompletion = async (prompt) => {
    try {
        const response = await api.post('/writing/autocomplete', { prompt });
        return response.data.completion;
    }   catch (error) {
        console.error('Error fetching autocomplete:', error);
        throw error;
    }
};

export default api;
