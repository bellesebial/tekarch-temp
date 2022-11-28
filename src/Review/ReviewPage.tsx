import * as React from 'react';
import { Box, Breadcrumbs, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Paper, Rating, styled, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import NavBar from './NavBar';

export interface createReview{
  cover: string,
  title: string,
  author: string,
  rating: number,
}

const rows: createReview[] = []

const Item = styled(Typography) 
({
  textAlign: 'center',
  fontSize: 20,
  color: 'orange',
  marginTop: '3rem'
});

export default function ReviewPage(props:createReview) {
  const [value, setValue] = React.useState<number | null>(2);

  return (
  <header>
      <NavBar/>
    <><><><Breadcrumbs separator="›" aria-label="breadcrumbs" sx={{ fontSize: 25, fontWeight: 10, marginLeft: 5, marginTop: 3 }}>
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

      </>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
          <Grid item xs={2.5}>
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
          marginLeft: 8.5,
          marginTop: 4
        }}
      >Book Cover
      </Typography>
      <Card sx={{ width: 200, marginLeft: 4, marginBottom: '1rem', marginTop: '3rem', backgroundColor: 'white', color: 'black' }}>
        <CardMedia
          component="img"
          height="250"
          image={props.cover}
          alt="book cover" />
      </Card>
          </Grid>
          <Grid item xs={2}>
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
          marginLeft: 8.5,
          marginTop: 4
        }}
      >Title
      </Typography>
      <Item>{props.title}</Item>
          </Grid>
          <Grid item xs={2}>
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
          marginLeft: 8.5,
          marginTop: 4
        }}
      >Author
      </Typography>
      <Item>{props.author}</Item>
          </Grid>
          <Grid item xs={2}>
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
          marginLeft: 8.5,
          marginTop: 4
        }}
      >Rating
      </Typography>
      <Item>
      <Rating
        name="simple-controlled"
        value={props.rating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </Item>
        </Grid>
        <Grid item xs={2}>
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
          marginLeft: 8.5,
          marginTop: 4,
          marginBotton: '10rem'
        }}
      >Review
      </Typography>
      <Item>
        <Link sx={{fontSize:20, color: 'orange'}}>Write a Review</Link> <br />
        <Link sx={{fontSize:20, color: 'orange'}}>Update a Review</Link>
      </Item>
        </Grid>
        </Grid>
      </>
      </>
      </header>
  );
}