import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
     const path = useLocation().pathname
    const token = window.localStorage.getItem('auth')
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Wrapper className='section-center'>
            <Link to={path}><h2>FurniStore</h2></Link>
            <div className='links'>
                <Link activeClassName="active-link" exact to='/'>Home</Link>
                <Link activeClassName="active-link" to='/products'>Products</Link>
                <Link activeClassName="active-link" to='/blog'>Blog</Link>
                <Link activeClassName="active-link" to={token ? '/cart' : '/login'}>Cart</Link>
            </div>


            <div className="side-menu" >
                {
                    !token ?
                        <>
                            <Link to='/login'>
                                <button className='outlined'>Sign In</button>
                            </Link>
                            <Link to='/signup'>
                                <button>Sign Up</button>
                            </Link>
                        </> : (
                            <Link to='/'>
                                <button onClick={()=> window.localStorage.clear()}>Logout</button>
                            </Link>
                        )
                }
            </div>
            <div className='menu'>
                <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)}/>
                {   isOpen &&
                    <div>
                        <Link activeClassName="active-link" exact to='/' onClick={() => setIsOpen(false)}>Home</Link>
                        <Link activeClassName="active-link" to='/products' onClick={() => setIsOpen(false)}>Products</Link>
                        <Link activeClassName="active-link" to='/blog' onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link activeClassName="active-link" to={token ? '/cart' : '/login'} onClick={() => setIsOpen(false)}>Cart</Link>
                        {
                            !token ?
                                <>
                                    <Link to='/login' onClick={() => setIsOpen(false)}>
                                        <button className='outlined'>Sign In</button>
                                    </Link>
                                    <Link to='/signup' onClick={() => setIsOpen(false)}>
                                        <button>Sign Up</button>
                                    </Link>
                                </> : (
                                    <Link to='/' onClick={() => setIsOpen(false)}>
                                        <button>Logout</button>
                                    </Link>
                                )
                        }
                    </div>
                }
            </div>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
    padding-top:1rem;
    padding-bottom:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    a{
        color:black;
    }
    a:hover{
        color:rgb(75, 58, 58);
    }
    .outlined{
        border:1px solid #bb58fe;
        color:#bb58fe;
        background-color:transparent;
        margin-right:1rem;
    }
    .outlined:hover{
        background-color:#bd65f7;
        color:white;
    }
  
    .active-link{
        font-weight:700;
    }

    .side-menu{
        display:none;
        justify-content:flex-end;
    }
    .links{
        display:none;
        align-items:center;
        justify-content:center;
        a{
            margin-left:2rem;
            color:black;
            font-size:1.2rem;
        }
    }
    .menu svg{
        font-size:2rem;
        color:#bb58fe;
    }
    .menu{
        position:relative;
        div{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            position:absolute;
            top:30;
            width:150px;
            display:flex;
            flex-direction:column;
            align-items:start;
            margin-left:-11.5rem;
            padding:1rem 2rem;
            z-index:1;
            background-color:white;
            a{
                font-size:1.2rem;
                margin-bottom:1rem;
            }
            button{
                padding:0.5rem;
            }
        }
    }
    @media screen and (min-width: 992px){
        display:grid;
        grid-template-columns:150px 1fr 250px;
        .menu{
            display:none;
        }
        .links{
            display:flex;
        }
        .side-menu{
            display:flex;
        }
    }
`
