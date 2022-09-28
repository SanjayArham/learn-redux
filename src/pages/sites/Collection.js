import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import ProductCardSkeleton from '../../skeleton/ProductCardSkeleton';

// LAYOUT
import SiteLayout from '../../layouts/SiteLayout';
const ProductCard = React.lazy(() => import('../../components/product/ProductCard'));

function Collection() {

    const products = useSelector((state) => state.products.products);

    const displayProducts = products.map((product) =>
        <div className='col-md-3' key={product.id}>
            <Suspense fallback={<ProductCardSkeleton className="mb-5" />}>
                <ProductCard className="mb-5" product={product}></ProductCard>
            </Suspense>
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
