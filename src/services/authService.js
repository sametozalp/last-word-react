import api from "./axiosInstance";

export default class AuthService {
    register(data) {
        return api.post("/api/auth/v1/register", data)
    }

    login(data) {
        return api.post("/api/auth/v1/login", data)
    }

    refreshToken(token) {
        return api.post("/api/auth/v1/refresh-token/" + token)
    }
}