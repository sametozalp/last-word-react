import api from "./axiosInstance";

export default class LastWordService {
    getLastWord() {
        return api.get("/api/last-word/v1/get-last-word")
    }

    getLeaderBoard() {
        return api.get("/api/last-word/v1/get-leader-board")
    }

    saveAnon(data) {
        return api.post("/api/last-word/v1/save-anon", data)
    }

    save(data, token) {
        return api.post("/api/last-word/v1/save", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}