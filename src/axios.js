import axios from 'axios'

const instance =axios.create({
    baseURL:'https://5d11b2ce84e906001457646a.mockapi.io'
});
export default instance;