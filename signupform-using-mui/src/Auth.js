import React from "react";
import {Box,Button,TextField,Typography} from '@mui/material';
const Auth=()=>{
    return <div>
        <form>
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
                >Login</Typography>
                <TextField margin="normal" type={"text"} variant="outlined" placeholder="Name" ></TextField>
                <TextField margin="normal" type={"email"} variant="outlined" placeholder="Email"></TextField>
                <TextField margin="normal" type={"password"} variant="outlined" placeholder="password"></TextField>
                <Button 
                    variant="contained" 
                    color="warning" 
                    sx={{
                        marginTop:3,
                        borderRadius:3,
                    }}
                
                >Login</Button>
                <Button 
                    sx={{
                        marginTop:3,
                        borderRadius:3,
                    }}
                
                >Change to Signup</Button>
            </Box>
        </form>
    </div>

};
export default Auth;
