import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchAddToCart, dispatchRemoveFromCart } from '../../features/products/ProductsSlice';
import { dispatchAddCart } from '../../features/cart/CartSlice';


// MUI
import { Card, CardMedia, CardContent, Grid, Typography, Button } from '@mui/material';

function ProductDetail(props) {
    const dispatch = useDispatch();
    let products = useSelector((state) => state.products.products);
    
    const [ product, setProduct ] = useState(props.product);
    const productId = product.id;

    const handleRemoveFromCart = () => {
        dispatch(dispatchRemoveFromCart(productId));
    }
    const handleAddToCart = (passId) => {
        dispatch(dispatchAddToCart(productId));
        dispatch(dispatchAddCart(productId));
    }

    useEffect(() => {
        setProduct(props.product);
    });

    return (
        <Card sx={{p:5}}>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={product.image}
                        alt={product.title}
                    />
                </Grid>
                <Grid item sm={6}>
                    <CardContent>
                        <Typography variant="h3" component="h3">{ product.title }</Typography>
                        <Typography variant="h6" component="h6" sx={{mb:5}}>{ product.vendor }</Typography>
                        <Typography gutterBottom variant="h5" component="h5" sx={{mb:5}}>
                            {product.comparePrice
                                ? <span className='product_with_compare' style={{color: 'red'}}>${product.salesPrice}.00 <strike style={{color: 'black'}}>${product.comparePrice}.00</strike></span>
                                : <span className='product_without_compare'>${product.salesPrice}.00</span>
                            }
                        </Typography>
                        <Typography variant="p" component="p" sx={{mb:5}}>Free Shipping On All Orders Above $200</Typography>
                        {product.inCart
                            ? <Button variant="outlined" size="small" color="error" onClick={handleRemoveFromCart}>REMOVE FROM CART</Button>
                            : <Button variant="outlined" size="small" color="success" onClick={handleAddToCart}>ADD TO CART</Button>
                        }
                        <Typography variant="p" component="p" sx={{mt:5}}>{product.description}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProductDetail;
