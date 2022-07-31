import axios from "axios";

const instance = axios.create({
    baseURL: "https://webflowofficial.herokuapp.com",
});

export default instance;
