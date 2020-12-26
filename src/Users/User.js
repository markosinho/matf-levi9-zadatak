import React from 'react';
import axios from 'axios';
import config from '../config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User = (props) => {

    const user = props.user;
    const userHandlers = props.userListHandlers;

    const deleteUser = async () => {
        try {
            const url = `${config.webshop.url}/user/${user.userName}`;
            console.log(url);
            await axios.delete(url);
            console.log(`User ${user.userName} deleted successfully`)
            userHandlers.showToaster(true, `User ${user.userName} deleted`);
            userHandlers.showUsers();
        } catch (err) {
            userHandlers.showToaster(false, `User ${user.userName} not deleted`);
        }
    }

    return <div className="card cardCustom"
                key={user.userName}>
            <div className="card-header d-flex flex-row flex-wrap">
                <div className="userHeaderInfo">
                    <FontAwesomeIcon icon={["fas", "user"]} className="userIconCustom"/>{user.firstName} {user.lastName} 
                </div>
                <div className="userHeaderControl">
                    <FontAwesomeIcon icon={["fas", "trash"]} onClick={deleteUser} className="deleteIconCustom" />
                </div>
            </div>
            <div className="card-body">
                {user.email}
            </div>
            {/* <div className="card-footer bg-secondary text-white">
                <span>React version: {React.version}</span>
            </div> */}
    </div>
}

export default User;