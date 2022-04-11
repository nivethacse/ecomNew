import React from 'react'
import styled from 'styled-components'
import product1 from '../../assets/product1.jpg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <Wrapper className='section-center'>
            <div className='left'>
                <h1>
                    Experience your furniture like never before
                </h1>
                <p>
                    Meet your new sidekick. The powerful tool that helps you create something special.
                </p>
                <Link to='/products'>
                    <button>
                        See the offer
                    </button>
                </Link>
            </div>
            <div className='right'>
                <img src={product1} alt="header"></img>
            </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    gap:5rem;
    align-items:center;
    .left{
        h1{
            font-size:3rem;
            font-weight:bolder;
            margin-bottom:1rem;
        }
        p{
            margin-bottom:1.5rem;
        }
    }
    .right{
        img{
            width:100%;
            height:400px;
            border-radius:1rem;
        }
    }
    @media screen and (min-width:992px){
        .left{
            h1{
                font-size:4rem;
            }
        }
    }

    @media screen and (min-width:776px){
        grid-template-columns:1fr 1fr;
    }
`