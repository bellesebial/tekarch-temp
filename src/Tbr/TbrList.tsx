import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';

export default function MediaCard() {
  const theme = useTheme();
  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Card sx={{ width: 300, height: 300, textAlign: 'left', marginLeft: '2rem' }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            // alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author | Published
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Synopsis
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Update</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 300, height: 300, textAlign: 'left', marginLeft: '2rem' }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            // alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author | Published
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Synopsis
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Update</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>

        <Fab size="large" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>

    </div>


  );
}