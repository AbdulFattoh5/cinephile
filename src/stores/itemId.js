import axios from "axios"
import {
    defineStore
} from "pinia"
import {
    apiKey
} from "../static"

export const useItemId = defineStore('itemId', {
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null,
    }),
    actions: {
        async getItemId({
            type,
            id
        }) {
            try {
                let response = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`)
                type == 'movie' ? this.movie = response.data : this.tv = response.data
                console.log(type,response.data);
            } catch (error) {
                console.log('error Id: ' + type, error);
            }
        }
    }
})