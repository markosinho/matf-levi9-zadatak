import axios from 'axios';
import React, { useState } from 'react';

import config from '../config.json';

import categories from './Categories';

const CreateForm = (props) => {
    const showProducts = props.productListHandlers.showProducts;

    const [codename, setCodename] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(categories.GENERAL);

    const onSubmit = async (event) => {
        event.preventDefault();
        const newProduct = {codename, title, price, description, category}
        console.log(newProduct);
        try {
            axios.post(`${config.webshop.url}/product`, newProduct)
            showProducts();
        } catch (err) {
            console.log(err);
        }
    };

    return <div className="container">
        <h2> Create product </h2>
        <form>
            <div className="form-group">
                <label htmlFor="codename">Codename</label><br />
                <input name="codename"
                    value={codename}
                    onChange={e => setCodename(e.target.value)}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label><br />
                <input name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label><br />
                <input name="price" type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label><br />
                <textarea name="description" rows="4"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="form-control"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="categoryOptions">Select category</label>
                <select className="form-control" id="categoryOptions" 
                    onChange={e => setCategory(categories[e.target.value])}>
                    {Object.keys(categories).map(option => {
                        return <option key={option}>{option}</option>;
                    })}
                </select>
            </div>
        </form>
        <br />
        <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </div>;
};


export default CreateForm;