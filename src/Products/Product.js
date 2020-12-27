import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from 'axios';
// import User from '../Users/User';
// import CreateForm from './CreateForm';
import './Products.css';
import '../Shared/Shared.css'

import config from '../config.json';
import categories from './Categories';

const Product = (props) => {

    const categoryText = Object.keys(categories).map(key => key.toLowerCase());

    const showProducts = props.productListHandlers.showProducts;
    const product = props.product;

    const deleteProduct = async () => {
        console.log('delete product: ' + JSON.stringify(product))

        const url = `${config.webshop.url}/product/${product.codename}`;
        
        try {
            await axios.delete(url);
            showProducts();
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="card cardProduct">
        <div className="card-header d-flex flex-row flex-wrap cardProductHeader">
            <div className="userHeaderInfo">
                <FontAwesomeIcon icon={["fas", "box"]} className="iconMargin" />{product.title}
            </div>
            <div className="headerControl">
                <FontAwesomeIcon icon={["fas", "trash"]} onClick={deleteProduct} className="deleteIconCustom" />
            </div>
        </div>
        <div className="card-body">
            <strong>Category: </strong>{categoryText[product.category]} <br />
            <strong>Description: </strong>{product.description}
            
        </div>
        <div className="card-footer text-dark cardProductFooter">
            <span>Price: {product.price}</span><FontAwesomeIcon icon={["fas", "euro-sign"]} className="iconMargin" />
        </div>
    </div>
}

export default Product;