import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productSelectors, updateProducts } from '../features/productSlice';
import {useParams, useNavigate} from "react-router-dom";


const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const product = useSelector((state) => productSelectors.selectById(state, id));

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if (product) {
            setTitle(product.title);
            setPrice(product.price);
        }
    }, [product]);

    const handleUpdate = async(e) => {
        e.preventDefault();
        await dispatch(updateProducts({id, title, price}));
        navigate('/');
    }
    
  return (
    <div>
        <form onSubmit={handleUpdate} className='card mt-5 p-4'>
            <div className=''>
                <label for="title" className='form-label'>Title</label>
                <input type="text" className='form-control' placeholder='Title' value={title} onChange= {(e) => setTitle(e.target.value)} />
            </div>
            <div className='mt-2'>
                <label for="price" className='form-label'>Price</label>
                <input type="text" className='form-control' placeholder='Price' value={price} onChange= {(e) => setPrice(e.target.value)}/>
                
            </div>

            <div className=''>
            <button type="submit" class="btn btn-primary mb-3 mt-4">Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct