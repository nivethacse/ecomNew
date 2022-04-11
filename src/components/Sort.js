import { BsFillGridFill } from 'react-icons/bs'
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import { FaListUl} from 'react-icons/fa'
function Sort() {
    const { filtered_products, grid_view, setGridView, setListView, sort, updateSort } = useFilterContext()
    return (
        <Wrapper>
            <div className="btn-container">
                <BsFillGridFill className={`${grid_view ? 'icon active' : 'icon'}`} onClick={setGridView} />
                <FaListUl className={`${!grid_view ? 'icon active' : 'icon'}`} onClick={setListView} />
            </div>
            <p>{filtered_products.length} Products Found</p>
            <div className="underline"></div>
            <form>
                <label htmlFor="sort">Sort By</label>
                <select className="sort" name="sort" value={sort} onChange={updateSort}>
                    <option value="price-lowest">Price (Lowest)</option>
                    <option value="price-highest">Price (Highest)</option>
                    <option value="name-a-z">Name (A-Z)</option>
                    <option value="name-z-a">Name (Z-A)</option>N
                </select>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display:grid;
    grid-template-columns:auto auto 1fr auto;
    column-gap:1rem;
    align-items:center;
    margin-bottom:1rem;
    .icon{
        border:1px solid black;
        border-radius:5px;
        padding:4px;
        margin-right:10px;
        cursor:pointer;
    }
    .active{
        background-color:black;
        color:white;
    }
    .underline{
        height:1px;
        background-color:black;
    }

    .sort{
        border:none;
        background-color:transparent;
        font-size:1rem;
        margin-left:10px;
        cursor:pointer;
    }
    @media (max-width:576px){
        display:grid;
        grid-template-columns:1fr;
        row-gap:0.5rem;
    }
`
export default Sort;