import { getUniqueItems } from '../utils/helper'
import { useFilterContext } from '../context/FilterContext'
import styled from 'styled-components'

function Filter() {
    const { all_products,
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            max_price,
            price,
            freeShipping
        }, updateFilters, clearFilters } = useFilterContext()
    const companies = getUniqueItems(all_products, "company")
    const categories = getUniqueItems(all_products, "category")
    const colors = getUniqueItems(all_products, "colors")
    
    return (
        <Wrapper>
            <div className="content">
                <form>
                    <div className="form-item">
                        <input className="search" type="text" name="text" placeholder="Search" value={text} onChange={updateFilters}></input>
                    </div>
                    <div className="form-item">
                        <h3>Category</h3>
                        <div>
                            {
                                categories.map((cat) => {
                                    return (
                                        <button key={cat} type="button" name="category" onClick={updateFilters} className={`${cat.toLowerCase() === category ? 'btn-cat active-cat' : 'btn-cat'}`}>{cat}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="form-item">
                        <h3>Comapany</h3>
                        <select value={company} onChange={updateFilters} name="company">
                            {
                                companies.map((com) => {
                                    return <option key={com} value={com}>{com}</option>
                                })
                            }
                        </select>
                    </div>
                    <div style={{marginBottom:"1rem"}}>
                        <h3>Colors</h3>
                        <div className="colors">
                            {
                                colors.map((col) => {
                                    if (col === "all") {
                                        return <button key={col} onClick={updateFilters} type="button" name="color" data-color="all" className={`${color === "all" ? 'btn-all active-cat' : 'btn-all'}`}>All</button>

                                    }
                                    return (
                                        <button key={col} onClick={updateFilters} type="button" name="color" data-color={col} className={`${col === color ? 'btn-color active-color' : 'btn-color'}`} style={{ backgroundColor: col }}>
                                            </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="form-item">
                        <h3>Price</h3>
                        <p>Rs.{price}</p>
                        <input type="range" name="price" min={min_price} max={max_price} value={price} onChange={updateFilters}></input>
                    </div>
                    <div className="checkbox">
                        <input name="freeShipping" type="checkbox" value={freeShipping} onChange={updateFilters}></input>
                        <label htmlFor="shipping">Free Shipping</label>
                    </div>
                </form>
                <button type="button" onClick={clearFilters} className="clear-btn">Clear Filters</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    input{
        width:200px;
    }

    .checkbox{
        width:200px;
        input{
            width:1rem;
        }
    }

    button{
        background-color:transparent;
        color:#bb58fe;
        border-radius:0;
    }
    .form-item{
        h3{
            margin-bottom:0.5rem;
        }
    }
    .clear-btn{
        background-color:red;
        color:white;
        border-radius:0.5rem;
    }
    .search{
        padding:0.7rem;
    }
    .btn-cat{
        display:block;
        border:none;
        background:transparent;
        color:#bb58fe;
        padding:7px 0px;
        text-transform:capitalize;
        font-size:15px;
    }
    .btn-all{
        border:none;
        background:transparent;
        color:rgb(109, 109, 186);
        margin:0;
        font-size:18px;
    }
    
    .active-cat{
        border-bottom:1px solid blue;
    }

    select{
        width:100px;
        border: 1px solid #bebebf;
        background: transparent;
        padding:5px;
        border-radius:5px;
    }
    .btn-color{
        width:15px;
        height:15px;
        border-radius:50%;
        margin-right:5px;
        opacity:0.3;
        padding:0.7rem;
    }
    label{
        color:rgb(27, 27, 31);
        font-size:20px;
        margin:0;
        margin-right:10px;
    }
    .active-color{
        opacity:1
    }
    .colors{
        display:flex;
        align-items:center;
    }
    @media (min-width:768px){
        .content{
            position:sticky;
            top:1rem;
        }
    }
    
`
export default Filter;