import React from 'react'
import styled from 'styled-components'
import { AiOutlineMobile } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { FaRoute } from 'react-icons/fa'
function Contact() {
    return (
        <Wrapper className='section-center'>
            <div className='left'>
                <h1>Feel free to contact us at any time</h1>
                <p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque.</p>
                <p className='address'><AiOutlineMobile /> +1 2333 555 4040</p>
                <p className='address'><FiMail /> hello@furniStore.com</p>
                <p className='address'><FaRoute /> TKR Nagar, Hyderabad, Telangana.</p>
            </div>
            <div className='right'>
                <form>
                    <div className='form-item'>
                        <input type='text' name='name' placeholder='Name'></input>
                    </div>
                    <div className='form-item'>
                        <input type='email' name='email' placeholder='Email'></input>
                    </div>
                    <div className='form-item'>
                        <textarea placeholder='Message' rows={3}>
                        </textarea>
                    </div>
                    <div className='checkbox'>
                        <input type='checkbox'></input>
                        <label>Subscribe to our newsletter</label>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
        </Wrapper>
    )
}

export default Contact

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    gap:2rem;
    .left{
        h1{
            font-size:2.5rem;
            margin-bottom:1rem;
        }
        p{
            margin-bottom:1rem;
        }
        .address{
            display:flex;
            align-items:center;
            margin-bottom:1rem;
            font-size:1rem;
            color:black;
            svg{
                margin-right:1rem;
                color:#bb58fe;
                font-size:1.2rem;
                font-weight:400;
            }
        }
    }
    .right{
        display:flex;
        justify-content:center;
        form{
            width:332px;
            input,textarea{
                width:89%;
            }
            .checkbox{
                input{
                    width:1rem;
                }
            }
            button{
                width:100%;
                padding:1rem;
            }
        }
    }

    @media screen and (min-width:776px){
        grid-template-columns:1fr 1fr;
        .right{
            justify-content:flex-end;
        }
    }

`