import React, { useState } from 'react';
import config from '../config.json';

import axios from 'axios';



export default (props) => {

    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const userType = 'CUSTOMER';

        
        const url = config.webshop.url + '/user';
        console.log(url);

        const postData = {email, userName, password, firstName, lastName, userType};
        console.log(postData);

        try {
            const response = await axios.post(url, postData);
            console.log(response);
        } catch (err) {
            console.error(err.stack);
        }

        console.log(JSON.stringify(props));

        // Next line is called from parrent component
        props.onFix.refreshUsers();

        console.log(props.refreshUsers);
    };
    
    // const [email, setTitle] = useState('');
    // const [price, setPrice] = useState(0);

    return <div style={{borderRight: '1px solid #e4e4e4', paddingRight: '10%'}}>
        <h2> Create user </h2>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>email</label><br/>
                <input name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control" />
            </div>
            <div className="form-group">
                <label >User name</label><br/>
                <input name="userName"
                value={userName}
                onChange={e => setUsername(e.target.value)}
                className="form-control" />
            </div>
            <div className="form-group">
                <label >Password</label><br/>
                <input name="password" type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control" />
            </div>
            <div className="form-group">
                <label >First name</label><br/>
                <input name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="form-control" />
            </div>
            <div className="form-group">
                <label>Last name</label><br/>
                <input name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="form-control" />
            </div>
            <br/>
            <button className="btn btn-primary">Submit</button>
        </form>
        
    </div>;
};