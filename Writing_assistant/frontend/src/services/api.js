import axios from 'axios';

const API_URL = 'http://localhost:8000';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    const tokenSource = localStorage.getItem('tokenSource');
    if (token) {
        if (tokenSource !== 'manual'){
            config.headers.Authorization = `Bearer ${token}`;
            config.headers['X-Token-Source'] = 'clerk';
        } else {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export const loginUser = async (formData) => {
    try {
        const response = await apiClient.post('/auth/login', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const { access_token } = response.data;
        return access_token;
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);
        throw error;
    }
};


export const signupUser = async (email, full_name, password) => {
    try {
        const response = await apiClient.post('/auth/signup', {
            email,
            full_name,
            password }, {
            headers: {
                'Content-Type': 'application/json' 
            }
            });
        return response.data;
    } catch (error) {
        console.error('Error signing Up:', error.response?.data || error.message);
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
