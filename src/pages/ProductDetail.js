import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useProductContext } from '../context/ProductContext'
import { useCartContext } from '../context/CartContext'
import styled from 'styled-components'
import ImageContainer from '../components/ImageContainer'
import { useHistory, useParams } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
function ProductDetail() {
    const { id } = useParams()
    const { single_product, loading, fetchSingleProduct } = useProductContext()
    const { addToCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)
    const history = useHistory()
    const token = window.localStorage.getItem('auth')
    useEffect(() => {
        fetchSingleProduct(id)
        //eslint-disable-next-line
    }, [id])



    const increase = () => {
        if (quantity >= single_product.stock) {
            setQuantity(single_product.stock)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const decrease = () => {
        if (quantity < 2) {
            setQuantity(1)
        }
        else {
            setQuantity(quantity - 1)
        }
    }

    return (
        <Wrapper >
            <div className="section">
                <BreadCrumb title={single_product.name} product={single_product.name} />
                {
                    loading ? <Loading /> :
                        <div className="product-center">
                            <ImageContainer images={single_product.images} />
                            <div>
                                <h1 className="title">{single_product.name}</h1>
                                <p className="price">Rs.{single_product.price}</p>
                                <p className="des">{single_product.description}</p>
                                <p className="info">
                                    <span>Available:</span>
                                    {single_product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </p>
                                <p className="info">
                                    <span>SKU:</span>
                                    {single_product.id}
                                </p>
                                <p className="info">
                                    <span>Brand:</span>
                                    {single_product.company}
                                </p>
                                <hr />
                                {single_product.stock > 0 ?
                                    <>
                                        <div className='quantity'>
                                            <h2 onClick={decrease}>-</h2>
                                            <h1>{quantity}</h1>
                                            <h2 onClick={increase}>+</h2>
                                        </div>
                                       
                                        <button style={{ marginTop: '1rem' }} 
                                        onClick={() => {
                                            if(token){
                                                history.push('/cart')
                                                addToCart({ ...single_product, quantity: quantity })
                                            }else{
                                                history.push('/login')
                                            }
                                        }}>
                                            Add to Cart</button>
                                       
                                    </>
                                    : null}
                            </div>
                        </div>
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    h1,p{
        margin-bottom:1rem;
        text-transform: capitalize;
    }
    .product-center{
        display:grid;
        row-gap:3rem;
    }
    .info{
        display:grid;
        grid-template-columns:100px 1fr;
        column-gap:1rem;
        color:rgb(37, 37, 53);
    }
    .quantity{
        width:120px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        h1{
            margin:0;
        }
        h2{
            cursor:pointer;
        }
    }

    .price{
        color:#bb58fe;
        font-weight:700;
    }
    .des{
        line-height:1.5rem;
    }
    span{
        font-weight:bolder;
    }
    @media (min-width:992px){
        .product-center{
            grid-template-columns:1fr 1fr;
            column-gap:3rem;
            align-items:start;
        }
        
    }
`
export default ProductDetail
