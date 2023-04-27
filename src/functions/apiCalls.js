import axios from "axios";

axios.defaults.baseURL = "http://localhost:5555/api/"

const apiCalls = async (method, url, data=undefined,params=undefined) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`
    
    try {
        const res = await axios({
            method: method,
            url: url,
            data:data,
            params:params
          });
          console.log(res.data);
        return res.data
    }
    catch (error) {
    }
}

export default apiCalls