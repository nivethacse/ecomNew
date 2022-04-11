import React from 'react'
import styled from 'styled-components'

const reviews = [
    {
        id: 0,
        des: "Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased.",
        name: "Marvin McKinne",
        role: "Marketing Coordinator",
        image: "https://designmodo.com/startup/app/i/testimonial-5-1.jpg"
    },
    {
        id: 1,
        des: "Thank you for making it painless, pleasant and most of all hassle free! I'd be lost without It.",
        name: "Floyd Miles",
        role: "President of Sales",
        image: "https://designmodo.com/startup/app/i/testimonial-5-2.jpg"
    },
    {
        id: 2,
        des: "It's all good. Man, this thing is getting better and better as I learn more about it. I'd be lost without It's. Thanks it!",
        name: "Darrell Steward",
        role: "Dog Trainer",
        image: "https://designmodo.com/startup/app/i/testimonial-5-3.jpg"
    },
    {
        id: 3,
        des: "It's is the coolest, most happening thing around! Not able to tell you how happy I am with it. ",
        name: "Leslie Alexander",
        role: "Web Designer",
        image: "https://designmodo.com/startup/app/i/testimonial-5-4.jpg"
    },
    {
        id: 4,
        des: "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business.",
        name: "Theresa Webb",
        role: "Nursing Assistant",
        image: "https://designmodo.com/startup/app/i/testimonial-5-5.jpg"
    },
    {
        id: 5,
        des: "You won't regret it. I was amazed at the quality of it. I am really satisfied with my it.",
        name: "Dianne Russell",
        role: "Medical Assistant",
        image: "https://designmodo.com/startup/app/i/testimonial-5-6.jpg"
    }

]
function Testimonials() {
    return (
        <Wrapper className='section-center'>
            <div className='header'>
                <h1>Feedback from our <br /> customers</h1>
                <p>Ornare aenean euismod elementum nisi quis eleifend.
                    Diam donec adipiscing tristique risus nec.</p>
            </div>
            <div className='testimonials'>
                {
                    reviews.map((review) => {
                        const {id,des,name,role,image} = review
                        return (
                            <div key={id} className='testimonial'>
                                <p className='review'>" {des} "</p>
                                <div className='profile'>
                                    <img src={image} alt={name}></img>
                                    <div>
                                        <h5>{name}</h5>
                                        <p>{role}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Testimonials

const Wrapper = styled.div`
    .header{
        display:grid;
        grid-template-columns:1fr;
        align-items:center;
        gap:2rem;
        h1{
           font-size:2.5rem;

        }
        margin-bottom:2rem;
    }

    .testimonials{
        display:grid;
        grid-template-columns:1fr;
        gap:1.2rem;
        .testimonial{
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            padding:1.5rem;
            border-radius:0.3rem;
            .review{
                font-size:1rem;
                margin-bottom:1rem;
                min-height:3rem;
            }
            .profile{
                display:grid;
                grid-template-columns:0.2fr 1fr;
                column-gap:2rem;
                p{
                    font-size:0.8rem;
                }
                img{
                    border-radius:50%;
                }
            }
        }
    }

    @media screen and (min-width:776px){
        .testimonials{
            grid-template-columns:repeat(3,1fr);
            .testimonial{
                .review{
                    min-height:6rem;
                }
            }
        }
    }

    @media screen and (min-width:556px){
        .header{
            grid-template-columns:1fr 1fr;
        }
    }

`