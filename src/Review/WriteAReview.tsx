import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Breadcrumbs, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Stack, TextField, Typography } from '@mui/material';
import Link from '@mui/material/Link';

export interface createReview{
  cover: string,
  title: string,
  author: string,
  rating: number,
  review: string,
}

const rows: createReview[] = [
  {cover:'images/uglylove.jpeg', title:'Ugly Love', author:'Colleen Hover', rating:3, review:'Nice book!'}
]

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default function ReviewPage(props:createReview) {
  return (
    <><><div role="presentation" onClick={handleClick}>
          <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 2, marginLeft: 4 }}>
              <Link color="black" fontSize={25} fontWeight={10} underline="hover" href="/Review/ReviewPage">
                  User Review
              </Link>
              <Link color="orange" fontSize={25} fontWeight={10} underline="hover" href="/">
                  Write a Review
              </Link>
          </Breadcrumbs>
      </div>

          <Card sx={{ textAlign: 'center', width: 200, marginLeft: 4, marginBottom: '1rem', marginTop: '1rem', backgroundColor: 'white', color: 'black' }}>
              <Box>
                  <CardMedia component="img" height="250" sx={{ width: 200 }}
                      image={props.cover}
                      alt="book cover" />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                          {props.title}
                      </Typography>
                      <Typography variant="subtitle1" color="black" component="div">
                          {props.author}
                      </Typography>
                  </CardContent>
              </Box>
          </Card></>
          <Typography variant="h5" sx={{display:'left', alignItems:'left'}}>What did you think?</Typography>
          <TextField variant="outlined" multiline rows={10} sx={{width:500}}/>
          <Stack spacing={2} direction="row" sx={{marginLeft:60}}>
          <Button variant="contained" sx={{backgroundColor:'orange'}}>POST</Button>
          </Stack>
</>
  );
}