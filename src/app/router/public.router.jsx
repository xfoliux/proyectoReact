import {Navigate} from 'react-router-dom';

export const PublicRouter = ({ children }) => {
    const token = localStorage.getItem('token');

    if (token) return <Navigate to="/" />

    return children;
}