import axios from "axios";
import i18n from '../messages'

const BASE_URL = 'https://tpl.sanly.pro/api'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,

    headers: {
        'Content-Type':'application/json',
        'Accept':"*/*",
        'Accept-Language': i18n.locale
    }
})

export default axiosInstance