import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: "application/json"

    },
    params: {
        api_key: "5f9a4e5b8a8bb36893e7d2f856ee60cb"
    }
})