import axios from 'axios';

const instance = axios.create(
    {
        baseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        withCredentials: false,
        headers: {
            'Access-Control_Allow_Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
        }
    }
    );
    export default instance;