import React from 'react'

export const AddProducts = () => {
    return (
        <div className='container'>
            <br />
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group'>
                <label htmlFor="product-name">Product Name</label>
                <br />
                <input type="text" className='form-control' required />

                <label htmlFor="product-price">Product price</label>
                <br />
                <input type="number" className='form-control' required />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <br />
                <input type="file" className='form-control' />
                <br />
                <buttom className='btn btn-success btn-md'>ADD</buttom>  
            </form>
        </div>
    )
}