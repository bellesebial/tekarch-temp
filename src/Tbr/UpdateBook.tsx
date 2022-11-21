import CSS from 'csstype';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UpdateBook(){
    return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Enter Book TItle" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Enter Author" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Enter Genre" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Enter Synopsis" variant="outlined" color='success'/> <br></br>
        <Button variant="contained">Add Book</Button> 
        </Box>
    )
}