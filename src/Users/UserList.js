import React, {useState, useEffect} from 'react';
import CreateForm from './CreateForm';
import UserService from './UserService'
import User from './User';

const UsersDispatch = React.createContext(null);

export default () => {

    const [users, setUsers] = useState([]);

    async function showUsers () {
        const data = await UserService.fetchUsers();
        setUsers(data);
    }

    const submitCallback = async() => {

    }
    
    useEffect(() => {
        showUsers();
    }, [])

    return <div className="container" style={{marginTop: '20px'}}>

        <div className="row">

            <div class="col-md-4">
                <CreateForm onFix={{mare: 10, refreshUsers: showUsers}}/>
            </div>

            <div class="col-md-8">
                <div className="d-flex flex-row flex-wrap align-items-center" >
                    {
                        users.map(user => {
                            return <User {...user} key={user.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}