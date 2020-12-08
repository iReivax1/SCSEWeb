import React, { Component } from 'react';
import {courseProducts, detailedProduct} from './data';

const ProductContext = React.createContext();
//2 components in context, provider and consumer

class ProductProvider extends Component {
    state = {
        // if products: storeProducts -> actually pass by reference so any change to products will also change storeProducts in data
        courses: [],
        detailedProduct: detailedProduct,
        }
    componentDidMount(){
        this.setCourses();
    }
    //hence use copy method to "pass by value"
    setCourses = () => {
        let tempCourses= [];
        courseProducts.forEach(item => {
            const singleItem = {...item};
            tempCourses = [...tempCourses, singleItem];
        })
        this.setState(() => {
            return {courses : tempCourses};
        });
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const courses = this.getItem(id);
        this.setState(()=>{
            return{detailedProduct:courses};
        });
    };
    render() {
        return (
            //Add all the functions here, for methods available in the consumer
            <ProductContext.Provider 
            value={{
                ...this.state, 
                handleDetail:this.handleDetail,
            }}>
            {this.props.children}
            </ProductContext.Provider>
            //pass props to child of context.
        )
    }
}


const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer, ProductContext};