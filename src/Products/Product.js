import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from 'axios';
// import User from '../Users/User';
// import CreateForm from './CreateForm';
import './Products.css';
import '../Shared/Shared.css'

// class Product extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentTime: this.getCurrentTime(),
//             users: []
//         }
//     }


//     // Method that gets all products

//     // Method for posting product

//     // Method for deleting product

//     // Method for updating product


//     getAllProducts = async () => {
//         const url = 'https://gorest.co.in/public-api/users';
//         try {
//             const users = await axios.get(url);
//             return users.data?.data;
//         } catch (err) {
//             console.error(err);
//         }
//         return [];
//     }

//     handleCurrentTimeClick = async () => {
//         const allUsers = await this.getAllProducts();
//         this.setState({
//             currentTime: this.getCurrentTime(),
//             users: allUsers 
//         });
//     }

//     getCurrentTime = () => {
//         return new Date().getTime();
//     }

//     render() {
//         return <div className="container">
//             <h1>Add new product</h1>
//             <hr />
//             <CreateForm />
//             <hr />

//             <span> {this.state.currentTime} </span>

//             <div className="d-flex flex-row flex-wrap justify-content-between">
//                 {
//                     this.state.users.map(user => {
//                         return <User {...user} key={user.id}/>
//                     })
//                 }
//             </div>

//         </div>;
//     }
// }

// export default Product;


const Product = (props) => {
    const product = props.product;

    return <div className="card cardProduct">
        <div className="card-header d-flex flex-row flex-wrap cardProductHeader">
            <div className="userHeaderInfo">
                <FontAwesomeIcon icon={["fas", "box"]} className="iconMargin" />{product.id} {product.name}
            </div>
            {/* <div className="userHeaderControl">
                <FontAwesomeIcon icon={["fas", "trash"]} onClick={deleteUser} className="deleteIconCustom" />
            </div> */}
        </div>
        <div className="card-body">
            {product.name}
        </div>
        <div className="card-footer text-dark cardProductFooter">
            <span>Price: {product.price}</span><FontAwesomeIcon icon={["fas", "euro-sign"]} className="iconMargin" />
        </div>
    </div>
}

export default Product;