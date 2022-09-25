import React, {useState, useEffect} from 'react';
import FileBase64 from 'react-file-base64';
import {isAuthenticated} from '../../auth/index';
import {createItem} from '../../api/api'

export default function CreateItem() {
    const [item,
        setItem] = useState({
        title: '',
        description: '',
        price: '',
        quantity: '',
        color:'',
        categories: [
             'ELECTRONICS', 'GAMES', 'FASHION'
        ],
        title: '',
        image: '',
        description: '',
        quantity:'' ,
        color:'',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false
    });
    const {user, token} = isAuthenticated();
    const {
        title,
        description,
        price,
        categories,
        quantity,
        image,
        color,
        loading,
        error,
        createdProduct,
        redirectToProfile
    } = item;

    const handleChange = name => event => {
        const value = event.target.value;
        setItem({
            ...item,
            [name]: value,
            loading: false,
            createdProduct: ''
        });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setItem({
            ...item,
            error: '',
            loading: true
        });

        createItem(user._id, token, item).then(data => {
            if (data.error) {
                setItem({
                    ...item,
                    error: data.error
                });
            } else {
                setItem({
                    ...item,
                    title: '',
                    description: '',
                    image: '',
                    price: '',
                    category: '',
                    color:'',
                    quantity: '',
                    loading: false,
                    createdProduct: data.data.name
                });
            }
            window
                .location
                .reload();
        });
    };

    const newItemForm = () => (
        <div className="container">
            <form className="mb-3" onSubmit={clickSubmit}>
                {/* <div className="form-group">
                    <label className="text-muted">Image</label>
                    <FileBase64
                        required
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setItem({
                        ...item,
                        image: base64
                    })}/>
                </div> */}

                <div className="form-group">
                    <label className="text-muted">title</label>
                    <input
                        required
                        onChange={handleChange('title')}
                        type="text"
                        className="form-control"
                        value={title}/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea
                        required
                        onChange={handleChange('description')}
                        className="form-control"
                        value={description}/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Price</label>
                    <input
                        required
                        onChange={handleChange('price')}
                        type="number"
                        className="form-control"
                        value={price}/>
                </div>

                <div className="form-group">
                    <label className="text-muted">color</label>
                    <input
                        required
                        onChange={handleChange('color')}
                        type="text"
                        className="form-control"
                        value={color}/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Category</label>
                    <select onChange={handleChange('category')} className="form-control">
                        <option>Please select</option>
                        {categories && categories.map((c, i) => (
                            <option key={i} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="text-muted">quantity</label>
                    <input
                        required
                        onChange={handleChange('quantity')}
                        type="number"
                        className="form-control"
                        value={quantity}/>
                </div>

                <div className="form-group">
                    <label className="text-muted">image</label>
                    <input
                        required
                        onChange={handleChange('image')}
                        type="text"
                        className="form-control"
                        value={image}/>
                  </div>
                <button className="btn btn-outline-primary">Create Item</button>
            </form>
        </div>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{
            display: error
                ? ''
                : 'none'
        }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{
            display: createdProduct
                ? ''
                : 'none'
        }}>
            <h2>{`${createdProduct}`}
                is created!</h2>
        </div>
    );

    const showLoading = () => loading && (
        <div className="alert alert-success">
            <h2>Loading...</h2>
        </div>
    );

    return (
        <div>
            {showLoading()}
            {showSuccess()}
            {showError()}
            {newItemForm()}
        </div>
    );
};