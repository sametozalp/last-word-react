import axios from "axios";

export default class LastWordService {
    getLastWord() {
        return axios.get("http://localhost:8082/api/last-word/v1/get-last-word")
    }

    getLeaderBoard() {
        return axios.get("http://localhost:8082/api/last-word/v1/get-leader-board")
    }
}