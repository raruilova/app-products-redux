import axios from "axios";

const api = import.meta.env.VITE_BASE_URL;

export const axiosClient = axios.create({
    baseURL: `${api}`
})
