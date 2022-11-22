import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Breadcrumbs, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
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

export default function ReviewPage(props:createReview) {
  return (

    <><Breadcrumbs separator="›" aria-label="breadcrumbs" sx={{ fontSize: 25, fontWeight:10, marginLeft: 5, marginTop: 3 }}>
      {['User Review'].map((item: string) => (
        <Link
          key={item}
          underline="hover"
          color="orange"
          fontSize="inherit"
          fontWeight={10}
          href="/"
        >
          {item}
        </Link>
      ))}
    </Breadcrumbs>

    <Typography
    variant="h4"
    component="a"
    sx={{
      mr: 2,
      display: { xs: 'flex', md: 'flex' },
      fontFamily: 'inherit',
      fontWeight: 40,
      fontSize: 25,
      color: '',
      marginLeft:8.5,
      marginTop:4
    }}
    >Book Cover
    </Typography>

    <Card sx={{ width: 200, marginLeft: 4, marginBottom: '1rem', marginTop: '1rem', backgroundColor: 'white', color: 'black' }}>
        <CardMedia
          component="img"
          height="250"
          image={props.cover}
          alt="book cover" />
      </Card></>
  );
}