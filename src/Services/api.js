import axios from "axios";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export const getImages = async (text , count) => {
    try {
        return await axios.get(`${API_URL}/?keys=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`);
    } catch (err) {
        console.log("Error While calling API : ", err);
    }
}