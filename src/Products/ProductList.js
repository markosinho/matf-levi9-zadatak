import React from 'react';
import axios from 'axios';
// import User from '../Users/User';
// import CreateForm from './CreateForm';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this.getCurrentTime(),
            users: []
        }
    }


    // Method that gets all products

    // Method for posting product

    // Method for deleting product

    // Method for updating product


    getAllProducts = async () => {
        const url = 'https://gorest.co.in/public-api/users';
        try {
            const users = await axios.get(url);
            return users.data?.data;
        } catch (err) {
            console.error(err);
        }
        return [];
    }

    handleCurrentTimeClick = async () => {
        const allUsers = await this.getAllProducts();
        this.setState({
            currentTime: this.getCurrentTime(),
            users: allUsers 
        });
    }

    getCurrentTime = () => {
        return new Date().getTime();
    }

    render() {
        return <div className="container">
            <h2>Products </h2>
            <Link to="/users" className="btn btn-primary">Users</Link>
        </div>;
    }
}

export default ProductList;