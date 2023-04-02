import React, { createContext } from 'react';
import { db } from '../config/Config';
import { collection, addDoc } from "firebase/firestore"; 

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component{

   state={
    products:[]
   } 

   async componentDidMount(){

    const prevProducts = this.state.products;
    await addDoc(collection(db, "Products")).onSnapshot(snapshot=>{
        let changes = snapshot.docChanges();
        changes.forEach(change=>{
            if(change.type==='added'){
                prevProducts.push({
                    ProductID: change.doc.id,
                    ProductName: change.doc.data().ProductName,
                    ProductPrice: change.doc.data().ProductPrice,
                    ProductImg: change.doc.data().ProductImg,

                })
            }
            this.setState({
                products: prevProducts

            })
        })    

    })
   }

   render(){
    return(
        <>
            {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
   }
}