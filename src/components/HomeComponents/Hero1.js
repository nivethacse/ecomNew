import React from 'react'
import styled from 'styled-components'
import product2 from '../../assets/product2.jpeg'
import { Link } from 'react-router-dom'
function Hero1() {
    return (
        <Wrapper className="section-center">
            <div className='main'>
                <div className='left'>
                    <h1>
                        Experience your furniture like never before.
                    </h1>
                    <Link to='/products'>
                        <button>
                            See the offer
                        </button>
                    </Link>
                    <p>The elegant furniture with great quality and sleek design.
                    </p>
                </div>
                <div className='right'>
                    <img src={product2} alt="product2"></img>
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero1

const Wrapper = styled.div`
    .main{
        background-color:#8bd74e;
        border-radius:1rem;
        display:grid;
        grid-template-columns:1fr;
        row-gap:2rem;
        align-items:center;
        padding:2rem;
    }
    .left{
        h1{
            font-size:3rem;
            font-weight:bolder;
            margin-bottom:1rem;
        }
        button{
            margin-bottom:1rem;
        }
    }
    .right{
        display:flex;
        justify-content:center;
        img{
            border-radius:0.7rem;
        }
    }

    @media screen and (min-width:776px){
        .main{
            grid-template-columns:1.2fr 1fr;
        }
        .right{
            ustify-content:flex-end;
        }
    }
`
