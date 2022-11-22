import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreateBook(){
    return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
        Enter Book Title
        <TextField id="outlined-basic" label="Enter Book TItle" variant="outlined" color='success'/>
        <TextField id="outlined-basic" label="Drag the photo here" variant="outlined" color='success' /> <br></br>
        Enter Author
        <TextField id="outlined-basic" label="Enter Author" variant="outlined" color='success'/> <br></br>
        Enter Published Date
        <TextField id="outlined-basic" label="Enter Published Date" variant="outlined" color='success'/> <br></br>
        Enter Genre
        <TextField id="outlined-basic" label="Enter Genre" variant="outlined" color='success'/> <br></br>
        Enter Synopsis
        <TextField id="outlined-basic" label="Enter Synopsis" variant="outlined" color='success'/> <br></br>
        <Button variant="contained">Add Book</Button> 
        </Box>
    )
}