import React from 'react'

// ROUTER DOM
import { useParams } from 'react-router-dom';

// REDUX
import { useSelector } from 'react-redux';

// LAYOUT
import SiteLayout from '../../layouts/SiteLayout';

// COMPONENTS
import ProductDetail from '../../components/product/ProductDetail';

function Product() {
    let { productParamUrl } = useParams();
    let products = useSelector((state) => state.products.products);

    for(let productsKey in products){
        if((products[productsKey].url) === ('/' + productParamUrl)){
            var currentProduct = products[productsKey];
        }
        console.log(products[productsKey].url);
    }

    return (
        <SiteLayout>
            <div className='page-product'>
                <div className='container'>
                    <ProductDetail product={currentProduct}/>
                </div>
            </div>
        </SiteLayout>
    )
}

export default Product;
