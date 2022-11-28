import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';

export interface CardDetails {
  cover: string,
  title: string,
  author: string,
  // published: Date,
  synopsis: string,
}

const rows: CardDetails[] = [
  { cover: 'cover.jpg', title: 'The Imperfections of Memory', author: 'Angelina Aludo', synopsis: 'scscscsecscscs' },
  { cover: 'cover.jpg', title: 'The Imperfections of Memory', author: 'Angelina Aludo', synopsis: 'scscscsecscscs' },
  { cover: 'cover.jpg', title: 'The Imperfections of Memory', author: 'Angelina Aludo', synopsis: 'scscscsecscscs' },
  { cover: 'cover.jpg', title: 'The Imperfections of Memory', author: 'Angelina Aludo', synopsis: 'scscscsecscscs' },
  { cover: 'cover.jpg', title: 'The Imperfections of Memory', author: 'Angelina Aludo', synopsis: 'scscscsecscscs' },
  
]

export default function MediaCard(props: CardDetails) {
  const theme = useTheme();
  return (
    <>
          <Card sx={{ textAlign: 'left', width: 300, height: 350, 
                      marginLeft: 4, marginRight: 4, marginBottom: '2rem', marginTop: '2rem', 
                      backgroundColor: 'white', color: 'black' }}>

            <CardMedia component="img" height="140" sx={{ height: 150 }} image={props.cover}/>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.author}
                {/* {props.published} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.synopsis}
              </Typography>
            </CardContent>
            
            <CardActions>
              <Button size="small">Update</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        {/* <div>
        <Fab size="large" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        </div> */}
    </>
  );
}