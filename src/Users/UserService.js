import config from '../config.json';
import axios from 'axios';

const hostUrl = config.webshop.url;

class UserService {
    static async fetchUsers() {
        try {
            const users = await axios.get(hostUrl + '/users/all/');
            console.log(users.data);
            return users.data;
        } catch (err) {
            console.log(err.stack);
        }
        return [];
    }
}

// const fetchUsers = async () => {
//     try {
//         const users = await axios.get(hostUrl + '/users/all/');
//         return users;
//     } catch (err) {
//         console.log(err.stack);
//     }
//     return [];
// };

export default UserService;