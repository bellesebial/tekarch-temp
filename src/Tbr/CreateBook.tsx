import CSS from 'csstype';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const create: CSS.Properties = {
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

export default function CreateBook(){
    return (
    <div>
        <div className="create" style={create}>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
            >
            <a href='' style={link}>Teknoy Books </a>
            <a href='' style={link}>Create Book</a> <br></br>
            Enter Book Title
            <TextField id="outlined-basic" label="Enter Book TItle" variant="outlined" color='success'/><br></br>
            Enter Author
            <TextField id="outlined-basic" label="Enter Author" variant="outlined" color='success'/><br></br>
            Enter Published Date
            <TextField id="outlined-basic" label="Enter Published Date" variant="outlined" color='success'/>
            <Box component="span" sx={{ p: 10, border: '1px dashed grey', textAlign:'right', marginLeft:'10rem' }}>
            <Button>Upload/Drag the photo here</Button>
            </Box><br></br>
            Enter Genre
            <TextField id="outlined-basic" label="Enter Genre" variant="outlined" color='success'/> <br></br>
            Enter Synopsis
            <TextField id="outlined-basic" label="Enter Synopsis" variant="outlined" color='success'/> <br></br>
            </Box>
            <Button variant="contained">Add Book</Button> 
            </div>

    </div>
        
    )
}