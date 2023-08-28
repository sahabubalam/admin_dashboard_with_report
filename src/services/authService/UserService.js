import API from "../apiService/API";


class UserService {
    signingIn(value) {
        return API.post('/auth/signingIn', value);
    }
}

export default new UserService();