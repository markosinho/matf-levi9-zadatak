import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

import config from '../config.json';
import '../Shared/Shared.css';
import './Users.css';

const formFieldsNames = {
    email: 'email',
    userName: 'userName',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName'
}


const isSupportedLanguage = (str) => {
    return validator.isAlpha(str, 'sr-RS')
    || validator.isAlpha(str, 'sr-RS@latin')
    || validator.isAlpha(str, 'en-US');
}

const formCheckers = {
    email: (value) => {
        return validator.isEmail(value);
    },
    userName: (value) => {
        return !validator.isEmpty(value) &&
            validator.isAlpha(value);
    },
    password: (value) => {
        return validator.isLength(value, 8, 16);
    },
    firstName: (value) => {
        return !validator.isEmpty(value) &&
            isSupportedLanguage(value);
    },
    lastName: (value) => {
        return !validator.isEmpty(value) &&
            isSupportedLanguage(value);
    }
}

const emailRef = React.createRef();
const emailRefErr = React.createRef();

const userNameRef = React.createRef();
const userNameRefErr = React.createRef();

const passRef = React.createRef();
const passRefErr = React.createRef();

const firstNameRef = React.createRef();
const firstNameRefErr = React.createRef();

const lastNameRef = React.createRef();
const lastNameRefErr = React.createRef();

const formFields = {
    email: {
        formRef: emailRef,
        errRef: emailRefErr,
        valid: false
    },
    userName: {
        formRef: userNameRef,
        errRef: userNameRefErr,
        valid: false
    },
    password: {
        formRef: passRef,
        errRef: passRefErr,
        valid: false
    },
    firstName: {
        formRef: firstNameRef,
        errRef: firstNameRefErr,
        valid: false
    },
    lastName: {
        formRef: lastNameRef,
        errRef: lastNameRefErr,
        valid: false
    }
};

const CreateForm = (props) => {

    const formHandlers = props.userListHandlers;

    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const resetState = () => {
        setEmail('');
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
        const formInputNames = Object.keys(formFields);
        formInputNames.forEach(inputName => formFields[inputName].valid = false);
    }

    const checkInput = (inputName, value) => {
        const isInputValid = formCheckers[inputName](value);

        if (isInputValid) {
            formFields[inputName].errRef.current.hidden = true;
            formFields[inputName].valid = true;
        } else {
            formFields[inputName].errRef.current.hidden = false;
            formFields[inputName].valid = false;
        }
    }

    const validateForm = () => {
        const formInputNames = Object.keys(formFields);
        // If some input is invalid, validation will fail
        console.log(formFields);
        const allInputsValid = !formInputNames.some(inputName => !(formFields[inputName].valid));
        return allInputsValid;
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const userType = 'CUSTOMER';

        if (!validateForm()) {
            formHandlers.showToaster(false, 'not created', userName);
            return;
        }

        const url = config.webshop.url + '/user';
        console.log(url);

        const postData = { email, userName, password, firstName, lastName, userType };
        console.log(postData);

        try {
            const response = await axios.post(url, postData);
            console.log(response);
            formHandlers.showToaster(true, 'created', userName);
            resetState();
        } catch (err) {
            console.error(err.stack);
            formHandlers.showToaster(false, 'not created', userName);
        }

        // Next line is called from parrent component
        formHandlers.showUsers();
    };

    return <div className="userFormCustom">
        <h2> Create user </h2>
        <form onSubmit={onSubmit}>
            <div className="form-group" >
                <label>email</label><br />
                <input name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={e => checkInput(formFieldsNames.email, e.target.value)}
                    className="form-control"
                    ref={emailRef} />
            </div>
            <span ref={emailRefErr} hidden={true} className='text-danger'>Email invalid</span>

            <div className="form-group">
                <label>User name</label><br />
                <input name="userName"
                    value={userName}
                    onChange={e => setUsername(e.target.value)}
                    onBlur={e => checkInput(formFieldsNames.userName, e.target.value)}
                    className="form-control" 
                    ref={userNameRef}/>
            </div>
            <span ref={userNameRefErr} hidden={true} className='text-danger'>Username invalid</span>

            <div className="form-group">
                <label>Password</label><br />
                <input name="password" type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={e => checkInput(formFieldsNames.password, e.target.value)}
                    className="form-control" 
                    ref={passRef}/>
            </div>
            <span ref={passRefErr} hidden={true} className='text-danger'>Password must be from 8 to 16 characters long</span>

            <div className="form-group">
                <label>First name</label><br />
                <input name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    onBlur={e => checkInput(formFieldsNames.firstName, e.target.value)}
                    className="form-control"
                    ref={firstNameRef} />
            </div>
            <span ref={firstNameRefErr} hidden={true} className='text-danger'>First name invalid</span>

            <div className="form-group">
                <label>Last name</label><br />
                <input name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    onBlur={e => checkInput(formFieldsNames.lastName, e.target.value)}
                    className="form-control"
                    ref={lastNameRef} />
            </div>
            <span ref={lastNameRefErr} hidden={true} className='text-danger'>Last name invalid</span>

            <br />
            <button className="btn btn-primary">Submit</button>
        </form>

    </div>;
};


export default CreateForm;