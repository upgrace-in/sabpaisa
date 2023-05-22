import axios from 'axios';

const API_KEY = 'P8c3WQ7ei';

const sabPaisaAPI = axios.create({
    baseURL: 'https://api.sabpaisa.in',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Access-Control-Allow-Headers': 'Authorization'
    },
});

export const makeAPICall = async (endpoint, method = 'get', data = null) => {
    try {
        const response = await sabPaisaAPI.request({
            url: endpoint,
            method,
            data,
        });

        return response.data;
    } catch (error) {
        console.error('API Request failed:', error);
        throw error;
    }
};
