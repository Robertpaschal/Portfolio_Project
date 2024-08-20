import axios from 'axios';

const API_URL = 'http://localhost:8000';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const loginUser = async (username, password) => {
    try {
        const response = await apiClient.post('/auth/login', { username, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const signupUser = async (email, full_name, password) => {
    try {
        const response = await apiClient.post('/auth/signup', { email, full_name, password});
        return response.data;
    } catch (error) {
        console.error('Error signing Up:', error);
        throw error;
    }
};

export const callClerkWebhook = async (userData) => {
    try {
        const response = await apiClient.post('/webhook/clerk', userData);
        return response.data;
    } catch (error) {
        console.error('Error calling Clerk webhook:', error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await apiClient.post('/auth/logout');
        localStorage.removeItem('token');
    } catch (error) {
        console.log('Error logging out:', error);
        throw error;
    }
};

export const createDocument = async (title, content) => {
    try {
        const response = await apiClient.post('/writing/documents', { title, content });
        return response.data;
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

export const getDocuments = async () => {
    try {
        const response = await apiClient.get("/writing/documents");
        return response.data;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
};

export const getDocumentById = async (documentId) => {
    try {
        const response = await apiClient.get(`/writing/documents/${documentId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching document by ID:', error);
        throw error;
    }
};

export const generateContent = async (prompt, title) => {
    try {
        const response = await apiClient.post('/writing/generate', { prompt, title });
        return response.data;
    }   catch (error) {
        console.error('Error fetching generated content:', error);
        throw error;
    }
};
