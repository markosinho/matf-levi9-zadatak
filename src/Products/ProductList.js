import React, { useState, useEffect } from 'react';
import axios from 'axios';


// import User from '../Users/User';
// import CreateForm from './CreateForm';
// import { Link } from 'react-router-dom';

import Product from '../Products/Product';
import '../Shared/Shared.css'
import CreateForm from './CreateForm';
import config from '../config.json';

const ProductList = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Method that gets all products

    // Method for posting product

    // Method for deleting product

    // Method for updating product

    /**
     * Simulation of getting all products
     */
    const getAllProducts = async () => {
        const url = `${config.webshop.url}/products/all`;
        try {
            const products = await axios.get(url);
            return products.data;
        } catch (err) {
            console.error(err);
        }
        return [];
    }

    const showProducts = async () => {
        setLoading(true);
        const productsResponse = await getAllProducts();
        setProducts(productsResponse.map(product => {
            const price = Math.floor((Math.random() * 100000) % 1000);
            return { ...product, price }
        }));
        setLoading(false);
    }

    useEffect(() => {
        showProducts();
    }, []);

    return <div className="container topMargin productList">
        <div>
            <CreateForm productListHandlers={{showProducts: showProducts}} />
            <hr />
            <h2>Products ({products.length})</h2>

            <span hidden={!loading}>Loading...</span>

            {/* <div className="col-md-8"> */}
            <div className="d-flex flex-row flex-wrap align-items-center" >
                {
                    products.map(product => {
                        return <Product product={{ ...product }} productListHandlers={{showProducts: showProducts}}
                            key={product.id} />
                    })
                }
            </div>
            {/* </div> */}

        </div>

    </div>
}

export default ProductList;