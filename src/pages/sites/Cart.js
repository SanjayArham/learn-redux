import React from 'react'

// LAYOUT
import SiteLayout from '../../layouts/SiteLayout';

// COMPONENTS
import CartItems from '../../components/cart/CartItems';


function Cart() {
  return (
    <SiteLayout>
        <div className='page-cart'>
            <div className='container'>
                <CartItems />
            </div>
        </div>
    </SiteLayout>
  )
}

export default Cart;
