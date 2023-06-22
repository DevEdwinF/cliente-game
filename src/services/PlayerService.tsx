import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const url = 'http://localhost:8080';

export const PlayerServices = {
    getPlayer: async (id: number) => {
        try {
            const response = await axios.get(`${url}/player/${id}`);
            console.log(response)
            return response
        } catch (error) {
            console.log(error);
        }
    }
};
