import React from 'react'
import styled from 'styled-components'
import { MdOutlineMail, MdLockOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
function Signup() {
    return (
        <Wrapper>
            <h1>Sign Up</h1>
            <form>
                <div className='name'>
                    <div className='form-item'>
                        <input type='text' name='firstname' placeholder='First name'></input>
                    </div>
                    <div className='form-item'>
                        <input type='text' name='lastname' placeholder='Last name'></input>
                    </div>
                </div>
                <div className='form-item'>
                    <MdOutlineMail />
                    <input className="icon-input" type="email" name="email" placeholder='Email address'></input>
                </div>
                <div className='form-item'>
                    <MdLockOutline />
                    <input className="icon-input" type="password" name="password" placeholder='Password'></input>
                </div>
                <div className='checkbox'>
                    <input type="checkbox"></input>
                    <label>Subscribe to our newsletter</label>
                </div>
                <button>Sign In</button>
            </form>
            <p>Already have an account? <Link to='/login' >Log In</Link></p>
        </Wrapper>
    )
}

export default Signup

const Wrapper = styled.div`
    width:332px;
    margin:0 auto;
    padding-top:3rem;
    h1{
        margin-bottom:1rem;
        text-align:center;
    }
    p{
        text-align:center;
    }
    form{
        margin-bottom:1rem;
        input{
            width:80%;
        }
        .name{
            display:grid;
            grid-template-columns:1fr 1fr;
            column-gap:1rem;
            input{
                width:124px;
            }
        }
        .icon-input{
            padding-left:3rem;
        }
        button{
            width:332px;
            padding:1rem;
        }
        .checkbox{
            input{
                width:1rem;
            }
        }
    }
`