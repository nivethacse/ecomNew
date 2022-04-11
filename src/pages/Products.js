import React from 'react'
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import ProductsList from '../components/ProductsList'
import styled from 'styled-components'
import BreadCrumb from '../components/BreadCrumb'
function Products() {
    return (
        <Wrapper className='section'>
            <BreadCrumb title="Products"/>
            <div className="products">
                <Filter />
                <div>
                    <Sort />
                    <ProductsList />
                </div>
            </div>
        </Wrapper>
    )
}

export default Products
const Wrapper = styled.div`
    .products{
        display:grid;
        gap: 3rem;
    }
    @media (min-width:768px){
        .products{
             grid-template-columns: 200px 1fr;

        }
    }
   
`