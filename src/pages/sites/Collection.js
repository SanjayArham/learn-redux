import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product/ProductCard';

// LAYOUT
import SiteLayout from '../../layouts/SiteLayout'

function Collection() {

    const products = useSelector((state) => state.products.products);


    const displayProducts = products.map((product) =>
        <div className='col-md-3' key={product.id}>
            <ProductCard className="mb-5" product={product}></ProductCard>
        </div>
    )

    return (
        <SiteLayout>
            <div className='page-collection'>
                <div className='container'>
                    <div className='collection-title'>
                        <h1>Product Collection</h1>
                    </div>
                    <div className='row'>
                        {displayProducts}
                    </div>
                </div>
            </div>
        </SiteLayout>
    )
}

export default Collection;
