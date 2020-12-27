import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

import CreateForm from './CreateForm';
import UserService from './UserService'
import User from './User';

// const UsersDispatch = React.createContext(null);

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    
    const [strongFlag, setStrongFlag] = useState(true);
    const [userNameMessage, setUserNameMessage] = useState('');

    const alertSuccessRef = React.createRef();
    const alertFailureRef = React.createRef();

    async function showUsers () {
        const data = await UserService.fetchUsers();
        setUsers(data);
    }

    useEffect(() => {
        showUsers();
    }, []);

    const showToaster = (success, message, userName) => {
        const alertSuccess = alertSuccessRef.current;
        const alertFailure = alertFailureRef.current;

        setUserNameMessage(userName);
        setStrongFlag(false);

        if (success) {
            setAlertMessage(message);
            alertSuccess.hidden = false;
            setTimeout(() => {
                alertSuccess.hidden = true;
            }, 3000)
        } else {
            setAlertMessage(message);
            console.log(alertFailure);
            alertFailure.hidden = false;
            setTimeout(() => {
                console.log(alertFailure);
                alertFailure.hidden = true;
            }, 3000)
        }
    }
    

    return <div className="container topMargin">

        <div className="row">

            <div className="col-md-3 createFormWrapper">
                <CreateForm userListHandlers={{showUsers: showUsers, showToaster: showToaster}}/>

                <div className="topMargin">
                    <Alert key='allertCreated' variant="success" hidden={true} id="successAlert" ref={alertSuccessRef}>
                        User <strong hidden={strongFlag}> {userNameMessage} </strong> {alertMessage}
                    </Alert>

                    <Alert key='allertNotCreated' variant="danger" hidden={true} id="failureAlert" ref={alertFailureRef}>
                        User <strong hidden={strongFlag}> {userNameMessage} </strong> {alertMessage}
                    </Alert>
                </div>
            </div>

            
            

            <div className="col-md-8">
                <div className="d-flex flex-row flex-wrap align-items-center" >
                    {
                        users.map(user => {
                            return <User user={{...user}} userListHandlers={{showUsers: showUsers, showToaster: showToaster}}
                                key={user.userName}/>
                        })
                    }
                </div>
            </div>
        </div>
        <hr />
        
    </div>
}

export default UserList;