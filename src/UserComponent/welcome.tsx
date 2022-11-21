import CSS from 'csstype';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const welcome: CSS.Properties = {
    float: 'left',
    padding: '40px',
    textAlign: 'left',
    justifyContent: 'left',
    alignItems: 'left'

}

const link: CSS.Properties = {
    color: 'orange',
    fontSize: '12px',
    alignItems: 'left'
}

interface State{
    password: string;
    showpassword: boolean;
}


export default function Welcome (){
   return (
   <div id="welc">
        <div className="welcome" style={welcome}> <h1>Welcome back Teknoy!</h1> </div>
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Username/Email" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" color='success' /> <br></br>
        <a href='' style={link}> Forgot Password?</a>
        <a href='' style={link}>Sign Up Here</a> <br></br>
        <Button sx={{backgroundColor: 'rgb(255, 113, 47)'}} variant="contained">Log In</Button> 
    </Box>
    </div>
   )
}