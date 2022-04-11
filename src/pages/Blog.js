import React from 'react'
import styled from 'styled-components'
import BreadCrumb from '../components/BreadCrumb'
function Blog() {
    return (
        <Wrapper className='section'>
            <BreadCrumb title="Blog"></BreadCrumb>
            <h1>Coming soon ...</h1>
        </Wrapper>
    )
}

export default Blog

const Wrapper = styled.div`
    min-height:65vh;
    h1{
        text-align:center;
        margin-top:4rem;
    }
`