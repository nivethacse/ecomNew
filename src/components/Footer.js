import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'

function Footer() {
    return (
        <Wrapper className='section-center'>
            <div className='header'>
                <Link to='/'><h2>FurniStore</h2></Link>
                <div>
                    <FiTwitter />
                    <FiFacebook />
                    <FiInstagram />
                </div>
            </div>
            <hr></hr>
            <p>Copyright © 2021 furniStore.com</p>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    padding-bottom:2rem;
    .header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:2rem;
        a{
            color:black;
        }
        div{
            display:flex;
            align-items:center;
            svg{
                margin-left:2rem;
                font-size:1.5rem;
                cursor:pointer;
            }
        }
        svg:hover{
            color:rgb(75, 58, 58);
        }
    }
    p{
        font-size:0.8rem;
        text-align:center;
    }
`