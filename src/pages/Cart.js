import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/CartContext'
import { AiFillDelete } from 'react-icons/ai'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
function Cart() {
    const { cart_products, no_of_items, removeFromCart } = useCartContext()
    let subtotal = 0
    cart_products.map(p => {
        subtotal += (p.price * p.quantity)
        return p
    })
    return (
        <Wrapper className='section'>
            <BreadCrumb title="Cart" />
            {
                no_of_items === 0 ?
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:'3rem'}}>
                        <h1 style={{marginBottom:'2rem'}}>Your cart is empty</h1>
                        <Link to='/products'><button>Fill It</button></Link>
                    </div> :
                    <>
                        <div className='header'>
                            <h3>Product</h3>
                            <h3>Price</h3>
                            <h3>Quantity</h3>
                            <h3>Action</h3>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            {
                                cart_products.map((product) => {
                                    const { id, name, price, quantity } = product

                                    return (
                                        <div key={id} className='row'>
                                            <div>
                                                <p>{name}</p>
                                                <p className='price-small' style={{ color: '#bb58fe', fontWeight: '700',fontSize:'1rem' }}>Rs.{price}</p>
                                            </div>
                                            <p style={{ color: '#bb58fe', fontWeight: '700' }} className='price'>Rs.{price}</p>
                                            <p>{quantity}</p>
                                            <p><AiFillDelete onClick={() => removeFromCart(id)} /></p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <hr></hr>
                        <div className='billing-main'>
                            <div className='billing'>
                                <div>
                                    <h3>Subtotal:</h3>
                                    <p>Rs.{subtotal}</p>
                                </div>
                                <div>
                                    <h3>Shipping Fees:</h3>
                                    <p>Rs.100</p>
                                </div>
                                <hr></hr>
                                <div style={{ marginBottom: '0' }}>
                                    <h2>Total:</h2>
                                    <p>Rs.{subtotal + 100}</p>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </Wrapper>
    )
}

export default Cart

const Wrapper = styled.div`
    min-height:65vh;
    .header{
        background-color:#f5f5f5;
        padding:1.2rem 0;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        column-gap:2rem;
        text-align:center;
    }
    .row{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        column-gap:2rem;
        text-align:center;
        margin-bottom:2rem;
        p{
            text-transform:capitalize;
            font-size:1.2rem;
        }
    }
    .billing-main{
        display:flex;
        justify-content:flex-end;
        margin-top:2rem;
        .billing{
            width:300px;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            padding:1rem;
            border-radius:0.5rem;
            div{
                display:grid;
                grid-template-columns:1fr 1fr;
                column-gap:1rem;
                align-items:center;
                margin-bottom:1rem;
                p{
                    color:#bb58fe;
                    font-weight:700;
                }
            }
        }
    }

    .price{
        display:none;
    }
    .price-small{
        display:block;
    }
    @media screen and (min-width:556px){
        .header{
            grid-template-columns:repeat(4,1fr);
        }

        .row{
            grid-template-columns:repeat(4,1fr);
        }

        .price{
            display:block;
        }
        .price-small{
            display:none;
        }
    }
`