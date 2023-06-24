import axios from "axios";

const REG_URL = "http://localhost:8000/api/register";
const LOGIN_URL = "http://localhost:8000/api/login";

const register = async (playerData) => {
    const response = await axios.post(REG_URL, playerData);
    if (response.data) {
        localStorage.setItem("player", JSON.stringify(response.data));
    }
    return response.data;
};

const login = async (playerData) => {
    const response = await axios.post(LOGIN_URL, playerData, {withCredentials: true});
    if (response.data) {
        localStorage.setItem("player", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("player")
}

const authService = {
    register,
    login,
    logout,
}

export default authService;