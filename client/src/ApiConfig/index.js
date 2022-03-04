import axios from "axios";
const url = "http://localhost:5000"
// axios.create({ baseURL: url });
export default function CallApi(endpoint, method="GET", body){
    return axios({
        url:`${url}/${endpoint}`,
        method:method,
        data:body
    })
}