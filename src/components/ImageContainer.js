import { useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
function ImageContainer({ images = [[]] }) {
    const [mainImage, setMainImage] = useState(images[0])
    const [temp, setTemp] = useState(0)
    function decrement() {
        if (temp <= 0) {
            setTemp(0)
        }
        else {
            setTemp(temp - 1)
        }
    }
    function increment() {
        if (temp >= images.length - 3) {
            setTemp(images.length - 3)
        }
        else {
            setTemp(temp + 1)
        }
    }
    return (
        <Wrapper>
            <img src={mainImage.url} alt={mainImage.filename} className="main"></img>
            <div className="images-slider">
                <AiOutlineCaretLeft onClick={decrement} />
                <div className="images">
                    {
                        images.slice(temp, temp + 3).map((image) => {
                            return (
                                <img key={image.filename} className={`${image.filename === mainImage.filename ? "active" : "null"}`} src={image.url} alt={image.file}
                                    onClick={() => { setMainImage(image) }}></img>
                            )
                        })
                    }
                </div>
                <AiOutlineCaretRight onClick={increment} />
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .image-container{
        max-width:600px;
    }
    .images-slider{
        display:grid;
        grid-template-columns:50px 1fr 50px;
        align-items:center;
        justify-items:center;
        margin-top:20px;
        .images{
            grid-template-columns:repeat(3,1fr);
        }
        svg{
            font-size:20px;
            color:rgb(37, 37, 53);
        }
    }
    .main{
        diplay:block;
        height:600px;
        width:100%;
        border-radius:10px;
        object-fit:cover;
    }
    .images{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 1rem;
        margin-top:15px;
        img{
            height:100px;
            width:100%;
            border-radius:5px;
        }
    }
    .active{
        border:1px solid red;
        width:15px;
        height:15px;
    }

    @media (max-width:576px){
        .main{
            height:300px;
        }
        .images{
            img{
                height:50px;
            }
        }
    }
    @media (min-width:992px){
        .main{
            height:500px;
        }
        .images{
            img{
                height:75px;
            }
        }
    }

`
export default ImageContainer;