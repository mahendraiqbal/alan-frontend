import axios from "axios";
const host = "http://localhost:8000/"
export const getFood = () => {
    const url = host + 'api/food';
    return axios.get(url);
}

export const addFood = (body) => {
    const url = host + 'api/food';
    return axios.post(url, body);
}