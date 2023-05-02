import axios from 'axios';

export default axios.create({
    baseURL:'https://5be7-99-192-40-35.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});