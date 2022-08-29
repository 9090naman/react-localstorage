import React, { useState,useEffect } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from '../Login/Login';


function Registration() {
    const [user,setUser] = useState([]); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(user))
        console.log(user);
    },[user])


    const handleFormSubmit = (e) =>{
        
            e.preventDefault();
            let users = {
                name : name,
                email : email,
                password:password
            }
            setUser({...users,user});
            setName('');
            setEmail('');
            setPassword('');

            if(user){
                console.log(user);
                setLogin(false)
            }
            else{
                console.log("error")
            }
           
        
    }
    function handleClick() {
        setLogin(!login)
    }

   



    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container">
                    <h4 className="btn btn-dark btn-lg btn-block">Product App</h4>
                </div>
            </nav>
             <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name"onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>

             


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }

            </form> : <Login />}
            </div> 
        </>
    )
}

export default Registration