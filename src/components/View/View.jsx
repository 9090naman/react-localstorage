import React from 'react'
import  Search from  '../Search';


export const View = ({items,deleteItem}) => {
    
    return (
        <div>
      
          {items.map(item=>(
        
              <tr key={item.product} style={{border:"1px solid black"}}>
                   <td style={{border:"1px solid black"}}>{item.product}</td>&nbsp;
                   <td style={{border:"1px solid black"}}>{item.price}</td>&nbsp;
                   <td style={{border:"1px solid black"}} className='delete-btn' onClick={()=>deleteItem(item.product)}>
                    Delete
                   </td>           
              </tr>            
          ))}
         
        </div>
    )
   
    
}