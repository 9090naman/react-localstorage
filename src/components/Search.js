import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Search = ({items}) => {

    const [filter,setFilter] = useState('');
    const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


    const searchText = (event) => {
      setFilter(event.target.value);
    }

    
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

    let DataSearch = items.filter(item => {
      return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

    

   

  return (
    <div>
        
        {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Search
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>search Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input placeholder='searchItems here...' value={filter} onChange={searchText.bind(this)}/>
            {DataSearch.map((item,index)=>{
          return (
            <div>
              <h5>{item.product}</h5>
              <p>{item.price}</p>
            </div>
          )
        })}
          
            
        </Modal.Body>
      </Modal>
      

{/* {items.map(item=>(
        
        <tr key={item.product}>
            <td>{item.product}</td>
            <td>{item.price}</td>          
        </tr>            
    
))} */}
    
        
     
        
        
       

        
    </div>
  )
}

export default Search;