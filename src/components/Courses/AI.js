import React from 'react'
import { ProductConsumer, ProductContext } from '../Context';

function AI() {
    return (
        <ProductConsumer>
            {/* can get data from context here */}
        <h1>
            ALL ABOUT AI
        </h1>
        </ProductConsumer>
       
    )
}

export default AI
