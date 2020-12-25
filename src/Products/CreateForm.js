import React, { useState } from 'react';


const CreateForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);

    const onSubmit = async (event) => {
        event.preventDefault();


    };

    return <div>
        <h2> Create product </h2>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label for="title">Title</label><br/>
                <input name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="form control" />
            </div>
            <div className="form-group">
                <label for="price">Price</label><br/>
                <input name="price" type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="form control" />
            </div>
        </form>
        <br/>
        <button className="btn btn-primary">Submit</button>
    </div>;
};


export default CreateForm;