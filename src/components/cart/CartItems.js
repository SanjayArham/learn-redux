import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';

// ROUTER DOM
import { Link, useNavigate } from 'react-router-dom';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { dispatchRemoveFromCart } from '../../features/products/ProductsSlice';
import { dispatchAddCart, dispatchRemoveCart, dispatchIncreaseQty, dispatchDecreaseQty } from '../../features/cart/CartSlice';

// MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function CartItems(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let cart = useSelector((state) => state.cart);
    let cartItems = useSelector((state) => state.cart.cartItem);
    const products = useSelector((state) => state.products.products);

    const handleDecreaseQty = (currId) => {
        dispatch(dispatchDecreaseQty(currId));
    }
    const handleIncreaseQty = (currId) => {
        dispatch(dispatchIncreaseQty(currId));
    }
    const handleRemoveFromCart = (currId) => {
        dispatch(dispatchRemoveFromCart(currId));
        dispatch(dispatchRemoveCart(currId));
    }

    let checkCartEmpty = (cartItems.length == 0);
    
    const handleNavigate = (page) => {
        navigate("/" + page);
    }

    var cartTotal = 0
    
    for(let cartItemsKey in cartItems){
        cartTotal += cartItems[cartItemsKey].linePrice;
    }

    return (
        <div>
            <TableContainer className='cart_table_container' component={Paper} sx={{ p:5 }}>
                <Table className='cart_table'>
                    <TableHead>
                        <TableRow>
                            <TableCell component={"th"} align="center">#</TableCell>
                            <TableCell component={"th"} align="left" colSpan={2}>Product</TableCell>
                            <TableCell component={"th"} align="right">Price</TableCell>
                            <TableCell component={"th"} align="center">Quantity</TableCell>
                            <TableCell component={"th"} align="center">Total Price</TableCell>
                            <TableCell component={"th"} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {checkCartEmpty ? 
                        <TableRow>
                            <TableCell component={"th"} align="center" colSpan={7} color="error"><Typography variant="body2" color={"error"}>No Data in Cart</Typography></TableCell>
                        </TableRow>
                        : 
                        <>
                            {cartItems.map((currentValue, index) => (
                                <TableRow>
                                    <TableCell component={"th"} align="center">{ index + 1 }</TableCell>
                                    <TableCell align="left"><img src={currentValue.image} alt={currentValue.title} height="80px" /></TableCell>
                                    <TableCell align="left">{currentValue.title}</TableCell>
                                    <TableCell align="right"><CurrencyFormat value={currentValue.salesPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} thousandSpacing={'2s'} renderText={value => <>{value}</>} /></TableCell>
                                    <TableCell align="center">
                                        <div className='quantity_elem'>
                                            <Button variant="contained" color="error" size="small" onClick={() => handleDecreaseQty(currentValue.id)}> <RemoveIcon /> </Button>
                                            <TextField disabled variant="outlined" value={currentValue.quantity} size="small" />
                                            <Button variant="contained" color="success" size="small" onClick={() => handleIncreaseQty(currentValue.id)}> <AddIcon /> </Button>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center"><CurrencyFormat value={currentValue.linePrice} displayType={'text'} thousandSeparator={true} prefix={'$'} thousandSpacing={'2s'} renderText={value => <>{value}</>} /></TableCell>
                                    <TableCell align="center"><Button variant="contained" color="error" size="small" onClick={() => handleRemoveFromCart(currentValue.id)}>Remove</Button></TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell component={"th"} colSpan={5} rowSpan={5} />
                                <TableCell component={"th"} align="center">Subtotal</TableCell>
                                <TableCell component={"th"} align="center"><CurrencyFormat value={cart.subTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} thousandSpacing={'2s'} renderText={value => <>{value}</>} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component={"th"} align="center">Tax</TableCell>
                                <TableCell component={"th"} align="center">{ cart.tax }% GST</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component={"th"} align="center">Tax Price</TableCell>
                                <TableCell component={"th"} align="center"><CurrencyFormat value={cart.taxPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} thousandSpacing={'2s'} renderText={value => <>{value}</>} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component={"th"} align="center">Final Price</TableCell>
                                <TableCell component={"th"} align="center"><CurrencyFormat value={cart.finalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} thousandSpacing={'2s'} renderText={value => <>{value}</>} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component={"th"} colSpan={1} />
                                <TableCell component={"th"} align="center">
                                    <Button variant="contained" color="primary" size="small" onClick={() => handleNavigate('checkout')}>Checkout</Button>
                                </TableCell>
                            </TableRow>
                        </>
                        }
                    </TableBody>
                </Table>
                {checkCartEmpty ? 
                <Box sx={{mt:10}} className="text-center"><Button variant="contained" size="large" onClick={() => handleNavigate('collection')}> Shop Now </Button></Box>
                :
                null
                }
            </TableContainer>
        </div>
    )
}

export default CartItems;
