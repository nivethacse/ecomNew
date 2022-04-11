import React, { useState }  from 'react'
import styled from 'styled-components'
// import Reactfrom "react";
import axios from "axios";
import { useHistory} from "react-router-dom";

function Login() {
    let history = useHistory()
    const[userEmail , setUserEmail] = useState("")
    const [ password, setPassword ] =useState("")
    const [msg , setmsg] = useState("")
    const api = "https://filetransfer121.herokuapp.com"

    async function login(){
        try{
            const response = await axios.post(api + "/login",{
                email : userEmail,
                password : password
            })
            if(response.data.authToken){
                window.localStorage.setItem("auth" , response.data.authToken)
                history.push("/")
                setUserEmail("")
                setPassword("")
                
            }else{
                setmsg(response.data.message)
                setUserEmail("")
                setPassword("")
            }  
        }catch(error){
            console.log(error)
        }
       
    }


    function handleChange(event){
        switch (event.target.name) {
            case "email":
                setUserEmail(event.target.value)
                break;
            case "password":
                setPassword(event.target.value)
                break;
            default:
                break;
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        if(userEmail==="" || password===""){
            return(alert ("Please enter valid inputs"))
        }else{
            login()
        } 
    }

    return (
        <Wrapper className='section'>
            <div>
                <p style={{fontSize:"2.2rem" ,paddingBottom:"10px" , fontFamily:"Arial, Helvetica, sans-serif"}}>
                    Please Log-In
                </p><br/>
                {
                    msg!=="" ? <p className="errMsg">{msg}</p> : null
                }
            </div>
            <form onSubmit={handleSubmit} className="loginInfo">
                <input type="email" className="form-control frms" name="email" value={userEmail} placeholder="Enter your email-id" 
                 onChange={handleChange} required></input><br/><br/>
                <input type="password"  className="form-control frms" name="password" value={password} placeholder="Enter Password"  
                 onChange={handleChange} required></input><br/><br/>
                <button type = "submit" className="btn btn-primary btn-lg btn-block logInBtn">Login</button><br/>
                <button type = "button" onClick={()=>{
                    history.push("/")
                }} className="btn btn-danger btn-lg btn-block logInBtn">Cancel</button>
            </form>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    width:332px;
    margin:50px auto 10px auto;
    border:0.3px solid #ded7d7;
    padding:2rem;
    border-radius:2rem;
    h1{
        margin-bottom:1rem;
        text-align:center;
    }
    p{
        text-align:center;
    }
    form{
        margin-bottom:1rem;
        input{
            width:80%;
            padding-left:3rem;
        }
        button{
            width:332px;
            padding:1rem;
        }
    }
    .social-login{
        margin-top:2rem;
        p{
            font-size:1rem;
            margin-bottom:1rem;
        }
        div{
            display:flex;
            justify-content:space-between;
            width:332px;
            svg{
                background-color:#f5f5f5;
                padding:1rem 2.3rem;
                border-radius:0.5rem;
                font-size:1.5rem;
                cursor:pointer;
            }
        }
    }
`