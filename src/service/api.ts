import axios from 'axios';

const API_URL = 'https://viacep.com.br/ws/';

const api = (cep: string) => {
    return axios(`${API_URL}/${cep}/json/`)
}

export default api;