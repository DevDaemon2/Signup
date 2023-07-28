import React, { useState } from "react";
import {Box,Button,TextField,Typography} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/LoginOutlined';

const Auth=()=>{
    const[isSignup,setIsSignup]=useState(false);
    const[inputs,setInputs]=useState({
        user_name:"",user_email:"",user_password:""
    });
    const handleChange = (e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const resetState=()=>{
        setIsSignup(!isSignup);
        setInputs({user_name:'',user_email:'',user_password:''});
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <Box 
                display="flex" 
                flexDirection={"column"} 
                maxWidth={400} 
                alignItems={"center"} 
                justifyContent={"center"}
                margin={"auto"}
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                sx={{
                    ":hover":{
                        boxShadow:'10px 10px 20px #ccc'
                    },
                }}
            >
                <Typography 
                    variant="h2" 
                    padding={3} 
                    textAlign={"center"} 
                    color="initial"
                >{isSignup?"SignUp":"Login"}</Typography>
                {isSignup && (
                    <TextField  
                        type={"text"} 
                        name="user_name"  
                        placeholder="Name" 
                        value={inputs.user_name} 
                        onChange={handleChange} 
                        margin="normal" 
                        variant="outlined" />
                )}
                <TextField  
                    type={"email"} 
                    name="user_email" 
                    placeholder="Email" 
                    value={inputs.user_email} 
                    onChange={handleChange} 
                    margin="normal" 
                    variant="outlined" />
                <TextField 
                    type={"password"} 
                    name="user_password" 
                    placeholder="password"
                    value={inputs.user_password} 
                    onChange={handleChange} 
                    margin="normal" 
                    variant="outlined" />
                <Button 
                    type="submit"
                    variant="contained" 
                    color="warning" 
                    sx={{
                        marginTop:3,
                        borderRadius:3,
                    }}
                >{isSignup?"Signup":"Login"}</Button>
                <Button 
                    onClick= { resetState }
                    endIcon= { isSignup? <HowToRegIcon />:<LoginIcon /> }
                    sx={{
                        marginTop:3,
                        borderRadius:3,
                    }}
                >Change to {isSignup?"Login":"Signup"}</Button>
            </Box>
        </form>
    </div>
};

export default Auth;
