import axios from "axios";

axios.defaults.baseURL = "http://localhost:5555/api/"

const apiCalls = async (method, url, data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`
    
    try {
        const res = await axios({
            method: method,
            url: url,
            data:data
          });
        return res.data
    }
    catch (error) {
    }
}

export default apiCalls