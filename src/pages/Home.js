import React from 'react'
import Header from '../components/HomeComponents/Header'
import styled from 'styled-components'
import Categories from '../components/HomeComponents/Categories'
import Hero1 from '../components/HomeComponents/Hero1'
import FeaturedProducts from '../components/HomeComponents/FeaturedProducts'
import Features from '../components/HomeComponents/Features'
import Testimonials from '../components/HomeComponents/Testimonials'
import Hero2 from '../components/HomeComponents/Hero2'
import Contact from '../components/HomeComponents/Contact'
import Newsletter from '../components/HomeComponents/Newsletter'
export default function Home() {
    return (
        <Wrapper>
            <Header />
            <Categories />
            <Hero1 />
            <FeaturedProducts />
            <Features />
            <Testimonials />
            <Hero2 />
            <Contact />
            <Newsletter />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    p{
        font-size:1.2rem;
        line-height:2rem;
    }

`