import React, {Component} from "react";
import {courseProducts, detailedMapProducts, mapProducts} from "./data";

const ProductContext = React.createContext();

//2 components in context, provider and consumer

class ProductProvider extends Component {
    componentDidMount() {
        this.setCourses();
        this.setMapProducts();
    }

    //hence use copy method to "pass by value"
    setCourses = () => {
        let tempCourses = [];
        courseProducts.forEach(item => {
            const singleItem = {...item};
            tempCourses = [...tempCourses, singleItem];
        });
        this.setState(() => {
            return {courses: tempCourses};
        });
    };

    setMapProducts = () => {
        let tempMapProducts = [];
        mapProducts.forEach(item => {
            const singleItem = {...item};
            tempMapProducts = [...tempMapProducts, singleItem];
        });
        this.setState(() => {
            return {mapProducts: tempMapProducts};
        });
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalMapProduct: product, isModalOpen: true};
        });
    };

    closeModal = () => {
        this.setState(() => {
            return {isModalOpen: false};
        });
    };

    state = {
        // if products: storeProducts -> actually pass by reference so any change to products will also change storeProducts in data
        courses: [],
        mapProducts: [],
        detailedMapProduct: detailedMapProducts,
        isModalOpen: false,
        modalMapProduct: detailedMapProducts,
        openModal: this.openModal,
        closeModal: this.closeModal
    };

    getItem = (id) => {
        return this.state.products.find(item => item.id === id);
    };

    handleDetail = (id) => {
        const courses = this.getItem(id);
        this.setState(() => {
            return {detailedProduct: courses};
        });
    };

    render() {
        return (
            //Add all the functions here, for methods available in the consumer
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    openModal: this.openModal,
                    closeModal: this.closeModal
                }}>
                {this.props.children}
            </ProductContext.Provider>
            //pass props to child of context.
        );
    }
}


const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer, ProductContext};