import React,{useState,useEffect} from 'react';

import Search from './Search';
import { View } from './View/View';
import {Link} from 'react-router-dom'





const Create = () => {
    const [items,setItem] = useState([])
    const [product, setProduct]=useState("");
    const [price,setprice] = useState("");

    useEffect(()=>{
        localStorage.setItem("items", JSON.stringify(items))
        setTimeout(()=>{
            console.log(items)
        },2000)

        console.log(items);
    },[items])


    const handleAddProductSubmit= (e) =>{
        e.preventDefault();
        let item = {
            product : product,
            price : price
        }

        setItem([...items,item]);
        setProduct('');
        setprice('');
    }

    // const getItems = () =>{
    //     const data = localStorage.getItem('items');
    //     if(data){
    //         console.log(JSON.parse(data))
    //         setItem([...items,JSON.parse(data)])
    //       return JSON.parse(data);
          
    //     }
    //     else{
    //         console.log([]);
    //       return []
    //     }
    // }

    const deleteItem=(product)=>{
        const filteredProducts=items.filter((element,index)=>{
          return element.product !== product
        })
        setItem(filteredProducts);
      }


   
    


  return (
       <div>
        <Link to="/login">Logout</Link>
           <div className='wrapper'>
             <h1>Product App</h1>
             <p>Add and view your products using local storage</p>
           <div className='main'>

             <div className='form-container'>
                <form autoComplete="off" className='form-group' onSubmit={handleAddProductSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" placeholder="Enter Product Name"onChange={(event) => setProduct(event.target.value)} />
                </div>
                   <br></br>
 
                 <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder="Enter price"onChange={(event) => setprice(event.target.value)} />
                </div>
                  <br></br>
                 <button type="submit"  className='btn btn-success btn-md'>
                  ADD
                 </button>
                 </form>
            </div> 
        </div> 
        <div>
            <Search items={items} />
            <View items={items} deleteItem={deleteItem}/>
        </div>
       
    
     </div>
 
 </div>
)

}

export default Create