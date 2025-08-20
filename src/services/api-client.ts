import axios from 'axios'

const api_client = axios.create({
    params: ({
        key: '2c7cbe420c0f4f4f8d36518d29e7a990'
    }),
    baseURL: 'https://api.rawg.io/api'
});

export default api_client;