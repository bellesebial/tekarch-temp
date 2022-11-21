import CSS from 'csstype';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUp(){
    return (

        <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Username" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="First Name" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" color='success'/> <br></br>
        <Button variant="contained">Sign Up</Button>

        </Box>
    )
}