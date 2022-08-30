import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchAddToCart, dispatchRemoveFromCart } from '../../features/products/ProductsSlice';
import { dispatchUpdateCart } from '../../features/cart/CartSlice';

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard(props) {
    const dispatch = useDispatch();
    const product = props.product;
    const productId = product.id;
    const products = useSelector((state) => state.products.products);

    const handleRemoveFromCart = () => {
        dispatch(dispatchRemoveFromCart(productId));
    }
    const handleAddToCart = () => {
        dispatch(dispatchAddToCart(productId));
    }


    
    useEffect(() => {
        dispatch(dispatchUpdateCart(products));
    });

    return (
        <Card className={props.className} variant="outlined">
            <CardMedia
                component="img"
                alt={product.title}
                height="300"
                image={product.image}
            />
            <CardContent sx={{ p: 4 }}>
                <Typography gutterBottom variant="h5" component="h5">
                    <Link to={'/product' + product.url}>{product.title}</Link>
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                    {product.comparePrice
                        ? <span className='product_with_compare' style={{color: 'red'}}>${product.salesPrice}.00 <strike style={{color: 'black'}}>${product.comparePrice}.00</strike></span>
                        : <span className='product_without_compare'>${product.salesPrice}.00</span>
                    }
                </Typography>
                <Typography variant="body2" component="p" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ p: 4, pt: 1 }}>
                {product.inCart
                    ? <Button variant="outlined" size="small" color="error" onClick={handleRemoveFromCart}>REMOVE FROM CART</Button>
                    : <Button variant="outlined" size="small" color="success" onClick={handleAddToCart}>ADD TO CART</Button>
                }
                {/* <Button variant="contained" size="small">Add to Wishlist</Button> */}
            </CardActions>
        </Card>
    )
}

export default ProductCard
