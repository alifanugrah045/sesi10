import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { saveProducts } from '../features/productSlice';
import {useNavigate} from "react-router-dom";


const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProducts({title, price}));
    navigate('/');

}

  return (
    <div>
        <form onSubmit={createProduct} className='card mt-5 p-4'>
            <div className=''>
                <label for="title" className='form-label'>Title</label>
                <input type="text" className='form-control' placeholder='title' value={title} onChange= {(e) => setTitle(e.target.value)} />
            </div>
            <div className='mt-2'>
                <label for="price" className='form-label'>Price</label>
                <input type="text" className='form-control' placeholder='price' value={price} onChange= {(e) => setPrice(e.target.value)}/>
                
            </div>

            <div className=''>
            <button type="submit" class="btn btn-primary mb-3 mt-4">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct