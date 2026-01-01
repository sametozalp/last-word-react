import axios from 'axios';
import { toast } from 'react-hot-toast';

const api = axios.create({
    baseURL: 'https://prickly-terrie-ozalp-e022064e.koyeb.app'
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || "Bir şeyler ters gitti!"
        console.log("INTERCEPTOR ÇALIŞTI!"
            + message
        ); // Bunu konsolda görüyor musunuz?
        toast.error(message, {
            duration: 5000,
            style: {
                background: '#333',
                color: '#fff',
                fontSize: '18px',
                padding: '20px 30px',
                minWidth: '350px',
                borderRadius: '12px',
                fontWeight: 'bold',
            },
        });
        return Promise.reject(error);
    }
);

export default api;