import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'

function BreadCrumb({ title, product }) {
    return (
        <Wrapper>
            <p>
                <Link to='/'>Home</Link>
                <FaAngleRight />
                {
                    product && 
                    <>
                        <Link to='/products'>Products</Link>
                        <FaAngleRight />
                    </>
                }
                {title} 
            </p>
            <hr></hr>
        </Wrapper>
    )
}

export default BreadCrumb

const Wrapper = styled.div`
    padding-top:1rem;
    padding-bottom:2rem;
    p{
        display:flex;
        align-items:center;
        font-size:1.2rem;
        svg{
            margin:0 0.5rem;
        }
    }
    a{
        font-weight:700;
        color:black;
    }
`