import axios from "axios";

const fetchApi = axios.create({
  baseURL: 'https://bookyourshow-backend.herokuapp.com',
})

export default fetchApi;