import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ListView({ products }) {
    return (
        <Wrapper>
            {
                products.map((product) => {
                    const { id, name, image, price, description } = product
                    return (
                        <div key={id} className="product-item">
                            <img src={image} alt={name}></img>
                            <div>
                                <h3>{name}</h3>
                                <p className="price">Rs.{price}</p>
                                <p className="des">{description.substring(0, 150)}...</p>
                                <button>
                                    <Link to={`/products/${id}`}>DETAILS</Link>
                                </button>
                            </div>
                        </div>

                    )
                })
            }

        </Wrapper>
    )
}
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .product-item{
        display:grid;
        gap:2rem;
        margin-bottom:2rem;
        img{
            height:300px;
            width:100%;
            border-radius:0.5rem;
        }
        h3{
            text-transform:capitalize;
            margin-bottom:1rem;
        }
    }
    .price{
        color:#bb58fe;
        margin-bottom:1rem;
        font-weight:700;
    }

    a{
        color:white;
    }

    button{
        padding:0.5rem;
        font-size:0.7rem;
        border-radius:0.3rem;
    }
    
    .des{
        margin-bottom:1rem;
    }
    @media (min-width:992px){
        .product-item{
            grid-template-columns:300px 1fr;
            align-items: center;
            img{
                height:200px;
                width:300px;
            }
        }
    }
`
export default ListView