import React from 'react'

export const AddProducts = () => {
    return (
        <div className='container'>
            <br/>
            <h2>ADD PRODUCTS</h2>
            <br/>
            <form autoComplete="off" className='form-group'>
                <label htmlFor="product-name">Product Name</label>
                <br/>
                <input type="text" className='form-control' required />

                <label htmlFor="product-price">Product price</label>
                <br/>
                <input type="number" className='form-control' required />
                <input type="file" />
                <br/>
            <buttom className='btn btn-0succes btn-md'>ADD</buttom>  
            </form>
        </div>
    )
}