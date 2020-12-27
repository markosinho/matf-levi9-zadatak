import React from 'react';
import axios from 'axios';
import config from '../config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const userTypes = {
    customer: {
        text: 'Customer',
        code: 'CUSTOMER'
    },
    salesAdmin: {
        text: 'Sales',
        code: 'SALES'
    },
    admin: {
        text: 'Admin',
        code: 'ADMIN'
    }
}

const User = (props) => {

    const user = props.user;
    const userHandlers = props.userListHandlers;

    const isAdmin = user.userType === userTypes.admin.code;

    const deleteUser = async () => {
        try {
            const url = `${config.webshop.url}/user/${user.userName}`;
            await axios.delete(url);
            userHandlers.showToaster(true, 'deleted', user.userName);
            userHandlers.showUsers();
        } catch (err) {
            userHandlers.showToaster(false, 'not deleted', user.userName);
        }
    }

    const updateUserType = async (newType) => {
        try {
            const url = `${config.webshop.url}/user/${user.userName}/type/${newType}`;
            await axios.patch(url);
            userHandlers.showToaster(true, 'updated', user.userName);
            userHandlers.showUsers();
        } catch (err) {
            userHandlers.showToaster(false, 'not updated', user.userName);
        }
    }

    return <div className="card cardUser"
        key={user.userName}>
        <div className="card-header d-flex flex-row flex-wrap">
            <div className="userHeaderInfo">
                <FontAwesomeIcon icon={["fas", "user"]} className="userIconCustom" />{user.firstName} {user.lastName}
            </div>
            <div className="headerControl" hidden={isAdmin}>
                <FontAwesomeIcon icon={["fas", "trash"]} onClick={deleteUser} className="deleteIconCustom" />
            </div>
        </div>
        <div className="card-body">
            <strong>email: </strong>{user.email} <br />
            <strong>username: </strong>{user.userName} <br />
            {/* <strong>registered: </strong>{user.registrationDate} <br /><hr /> */}
            <hr />

            {/* TODO: Extract to another component */}
            <div className="d-flex flex-row flex-wrap userBodyItem">
                <input type="radio" className="btn-check" name={'options-' + user.userName} id={"customer-" + user.userName}
                    hidden={isAdmin}
                    autoComplete="off"
                    checked={user.userType === userTypes.customer.code ? true : false}
                    onChange={e => {
                        updateUserType(userTypes.customer.code);
                    }} />
                <label className="btn-sm btn-outline-primary userTypeButton"
                    htmlFor={"customer-" + user.userName}
                    hidden={isAdmin}>
                    {userTypes.customer.text}
                </label>

                <input type="radio" className="btn-check" name={'options-' + user.userName} id={"salesAdmin-" + user.userName}
                    autoComplete="off"
                    checked={user.userType === userTypes.salesAdmin.code ? true : false}
                    onChange={e => {
                        updateUserType(userTypes.salesAdmin.code);
                    }} />
                <label className="btn-sm btn-outline-primary userTypeButton"
                    htmlFor={"salesAdmin-" + user.userName}
                    hidden={isAdmin}>
                    {userTypes.salesAdmin.text}
                </label>

                <label className="btn-sm btn-outline-success userTypeButton disabled"
                    hidden={!isAdmin}>
                    {userTypes.admin.text}
                </label>
            </div>
        </div>
    </div>
}

export default User;