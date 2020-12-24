import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (user, userId) => {

    return <div className="card"
        style={{width: '30%', marginBottom: '20px', marginLeft: '3%' }}
        key={userId}>
            <div className="card-header">
                {/* <i className="far fa-user"></i> {this.props.name} - {this.props.id} */}
                <h6> <FontAwesomeIcon icon={["fas", "user"]} /> {user.name} </h6>
                

            </div>
            <div className="card-body">
                {user.email}
            </div>
            <div className="card-footer bg-secondary text-white">
                <span>React version: {React.version}</span>
            </div>
    </div>
}