import React, { useState,useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import Create from '../Create'


function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [users,setUsers] = useState([]);

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    useEffect(()=>{
        const data =  localStorage.getItem('users');
        if(data){
            console.log(JSON.parse(data))
               setUsers([...users,JSON.parse(data)])
        }
    },[])
       
       

    // const handleGet = async(e) =>{
    //     e.preventDefault();
       

    //     const data = await localStorage.getItem('users');
    //     if(data){
    //         console.log(JSON.parse(data))
    //         // setUsers([...users,JSON.parse(data)])
    //     //   return JSON.parse(data);
          
    //           let em = users.email;
    //           let pa = users.password;

             
        
    //       if(em==emaillog && pa==passwordlog){
    //         console.log("matched")
    //         setHome(false)
    //     }
    //     else if((em!==emaillog && pa!==passwordlog)){
    //          alert("wrong password")
    //     }
    //       else{
    //         console.log("wrong password")
    //        }
    //     }
    //     else{
    //         console.log([]);
    //       return []
    //     }
       
        
    //     let user = {
    //         email : emaillog,
    //         password:passwordlog
    //     }
    //     setUsers({...user});
    //     setEmaillog('');
    //     setPasswordlog('');
           
    // }

    const getVals = () => {
       
        const data =  localStorage.getItem('users');
        if(data){
            console.log(JSON.parse(data))
               setUsers([...users,JSON.parse(data)])
               console.log(users)
               let em = users[0].email;
               let pa = users[0].password;
               console.log(em);
               console.log(pa);
               console.log({emaillog,passwordlog})
               if(em == emaillog && pa == passwordlog){
                alert("user logged in")
                setHome(false)
               }
               else{
                alert("Wrong password")
               }
        }
    }

    






    return (
        
        <div>
            {home ? <form onSubmit={getVals}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={emaillog} onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={passwordlog} onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form>
                : <Create />
            }

        </div>
    )
}

export default Login