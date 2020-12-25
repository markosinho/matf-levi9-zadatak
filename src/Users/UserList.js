import React, {useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap';

import CreateForm from './CreateForm';
import UserService from './UserService'
import User from './User';

// const UsersDispatch = React.createContext(null);

const UserList = () => {

    const [users, setUsers] = useState([]);

    const alertSuccessRef = React.createRef();
    const alertFailureRef = React.createRef();

    async function showUsers () {
        const data = await UserService.fetchUsers();
        setUsers(data);
    }

    const showToaster = (success) => {
        const alertSuccess = alertSuccessRef.current;
        const alertFailure = alertFailureRef.current;
        if (success) {
            alertSuccess.hidden = false;
            setTimeout(() => {
                alertSuccess.hidden = true;
            }, 3000)
        } else {
            alertFailure.hidden = false;
            setTimeout(() => {
                alertFailure.hidden = true;
            }, 3000)
        }
    }
    
    useEffect(() => {
        showUsers();
    }, [])

    return <div className="container" style={{marginTop: '20px'}}>

        <div className="row">

            <div className="col-md-4">
                <CreateForm formParentHandlers={{mare: 10, showUsers: showUsers, showToaster: showToaster}}/>
            </div>

            <div className="col-md-8">
                <div className="d-flex flex-row flex-wrap align-items-center" >
                    {
                        users.map(user => {
                            return <User {...user} key={user.userName}/>
                        })
                    }
                </div>
            </div>
        </div>
        <hr />
        <Alert key='allertCreated' variant="success" hidden={true} id="successAlert" ref={alertSuccessRef}>
            User created
        </Alert>

        <Alert key='allertNotCreated' variant="danger" hidden={true} id="failureAlert" ref={alertFailureRef}>
            User not created
        </Alert>
    </div>
}

export default UserList;