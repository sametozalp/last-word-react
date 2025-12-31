import axios from "axios";

export default class AuthService {
    register(data) {
        return axios.post("http://localhost:8080/api/auth/v1/register", data)
    }

    login(data) {
        return axios.post("http://localhost:8080/api/auth/v1/login", data)
    }
}