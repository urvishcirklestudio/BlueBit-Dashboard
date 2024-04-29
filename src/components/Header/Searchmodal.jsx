import React,{ useEffect, useRef, useState } from 'react' 
import Modal from 'react-bootstrap/Modal';
import { BsSearch } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import SidebarData from '../sidebar/SidebarData';
import { Link, useLocation } from 'react-router-dom';
import { RiArrowRightLine } from "react-icons/ri";
function Searchmodal({showSearch,setShowSearch}) {  
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState(''); 
    const [clear, setClear] = useState(false);
    const [getseachVal, setGetseachVal] = useState([]);   

    const Location = useLocation();
    const locationName = Location.pathname.replace("/", "");
    // console.log(locationName);
    const handleClose = () => {
        setShowSearch(false);
        setSearchValue('');
        setGetseachVal([])
        setClear(false)
    } 

    const headerSearch = (value) =>{ 
        setSearchValue(value)
        setClear(value.length > 0 ? true : false)
        const childLinks =  SidebarData.map((item) => {
            let links = item.childLinks.filter((curEle)=>{
                return curEle.LinkName.toLowerCase().includes(value.toLowerCase())
            })
            return {...item,childLinks:[...links]}
        });
        setGetseachVal(value.length > 0 ? childLinks : []);
    }

    const clearForm = (value) =>{ 
        setSearchValue('');
        setClear(value.length > 0 ? true : false);
    }

    useEffect(()=>{
        showSearch?inputRef.current.focus():'';
    },[showSearch])
  return (
    <Modal show={showSearch} onHide={handleClose} animation={false} className='search-modal'>
        <Modal.Body>
            <div className="form_wpr">
                <form action="#" className='search-form d-flex align-items-center' onSubmit={(e)=>e.preventDefault()}>
                    <div className="modal-search-icon"><BsSearch/></div>
                    <div className="modal-search-input flex flex-grow-1 h-100">
                        <input type="text" ref={inputRef} name="search" id="headerSearch" placeholder='Search' value={searchValue} onChange={(e)=>headerSearch(e.target.value)}/>
                    </div>
                    <button className={`clear-input ${clear?'show':''}`} onClick={clearForm}><CgClose /></button>
                </form>
            </div>

            <div className="search_values_list d-flex flex-column">
                <h2 className='resultsLabel'>Results</h2>
                <ul>
                    {getseachVal.map((items,i)=>(
                    
                    items.childLinks.length >0 ? 
                        <li key={i}> 
                        <h5 className='liks-titles'>{items.title}</h5>
                        <div className="children-links">
                        {
                            items.childLinks.map((curEle,i)=>(
                                <Link className={`${locationName === curEle.routeLinks.replace("/", "")?'active':''} d-flex align-items-center justify-content-between`} to={curEle.routeLinks} onClick={handleClose} key={i}>
                                    <p>{curEle.LinkName}</p> <RiArrowRightLine />
                                    {console.log(curEle.routeLinks === '/'?'': curEle.routeLinks)}
                                </Link>
                                
                            ))
                        }    
                        </div>
                    </li>
                    :''
                 
                    ))}
                </ul>
            </div>
        </Modal.Body> 
      </Modal>
  )
}

export default Searchmodal
