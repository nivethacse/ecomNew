import React from 'react'
import styled from 'styled-components'
import { GiOfficeChair, GiKidSlide } from 'react-icons/gi'
import { MdKitchen, MdOutlineLiving, MdOutlineBed } from 'react-icons/md'
import { NavLink as Link } from 'react-router-dom'
import { useFilterContext } from '../../context/FilterContext'

function Categories() {
    const { categoryFilter } = useFilterContext()

    return (
        <Wrapper className='section-center'>
            <div className='header'>
                <p style={{ fontWeight: 700 }}>CATEGORIES</p>
                <h1>Choose your product by categories</h1>
                <p>Buy Furniture &amp; Accessories Online:
                    <br />
                    Securely and Comfortably
                </p>
                <Link to='/products'>
                    <button>See all categories</button>
                </Link>
            </div>
            <div className='categories'>
                <Link to='/products' onClick={() => categoryFilter('office')}>
                    <div>
                        <GiOfficeChair />
                        <p>Office</p>
                    </div>
                </Link>
                <Link to='/products' onClick={() => categoryFilter('kitchen')}>
                    <div>
                        <MdKitchen />
                        <p>Kitchen</p>
                    </div>
                </Link>
                <Link to='/products' onClick={() => categoryFilter('living room')}>
                    <div>
                        <MdOutlineLiving />
                        <p>Livingroom</p>
                    </div>
                </Link>
                <Link to='/products' onClick={() => categoryFilter('bedroom')}>
                    <div>
                        <MdOutlineBed />
                        <p>Bedroom</p>
                    </div>
                </Link>
                <Link className='extra' to='/products' onClick={() => categoryFilter('kids')}>
                    <div>
                        <GiKidSlide />
                        <p>Kids</p>
                    </div>
                </Link>
            </div>
        </Wrapper>
    )
}

export default Categories

const Wrapper = styled.div`
    .header{
        display:flex;
        flex-direction:column;
        align-items:center;
        p{
            text-align:center;
        }
        h1{
            margin-bottom:1rem;
            font-size:2.5rem;
            text-align:center;
        }
        button{
            margin-top:1rem;
        }
        margin-bottom:2rem;
    }
    .categories{
        display:grid;
        grid-template-columns:1fr;
        gap:2rem;
        div{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            padding:2rem;
            background-color:#f5f5f5;
            border-radius:1rem;
            svg{
                font-size:3rem;
                color:#bb58fe;
                margin-bottom:0.5rem;
            }
        }
        .extra{
            display:none;
        }

    }
    @media screen and (min-width:992px){
        .categories{
            grid-template-columns:repeat(5,1fr);
            .extra{
                display:block;
            }
        }
    }

    @media screen and (min-width:776px) and (max-width:992px){
        .categories{
            grid-template-columns:repeat(4,1fr);
        }
    }

    @media screen and (min-width:556px) and (max-width:776px){
        .categories{
            grid-template-columns:repeat(2,1fr);
        }
    }

`
