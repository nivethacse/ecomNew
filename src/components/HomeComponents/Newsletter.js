import React from 'react'
import styled from 'styled-components'
import { MdOutlineMail } from 'react-icons/md'

function Newsletter() {
    return (
        <Wrapper className='section-center'>
            <div className='left'>
                <h1>
                    Subscribe to our newsletter to know about upcoming products
                </h1>
            </div>
            <div className='right'>
                <form>
                    <div className='form-item'>
                        <MdOutlineMail/>
                        <input name="email" placeholder='Your email'></input>
                        <button>Subscribe</button>
                    </div>
                    <p>By subscribing, you agree to the Terms of Service</p>
                </form>
            </div>
        </Wrapper>
    )
}

export default Newsletter

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    gap:2rem;
    align-items:center;
    .left{
        h1{
            font-size:2.5rem;
        }
    }
    .right{
        form{
            .form-item{
                display:flex;
                position:relative;
                svg{
                    top:0.85rem;
                    position:absolute;
                    font-size:1.5rem;
                    color:#bebebf;
                    margin-left:1rem;
                }
            }
            input{
                padding-left:3rem;
                margin-right:1rem;
            }
            p{
                font-size:0.8rem;
            }
        }
    }

    @media screen and (min-width:776px){
        grid-template-columns:1.3fr 1fr;
    }
`