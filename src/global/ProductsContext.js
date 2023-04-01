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
        <ProductsContext.Provider value ={{products:[...this.state.products]}}>
            {this.props.children}
        </ProductsContext.Provider>
    )
   }
}