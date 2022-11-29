import * as React from 'react';
import { Box, Breadcrumbs, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Rating, Stack, styled, TextField, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import NavBar from './NavBar';

export interface createReview{
  cover: string,
  title: string,
  author: string,
  rating: number,
  review: string,
}

const rows: createReview[] = []

const Item = styled(Typography) 
({
  textAlign: 'center',
  fontSize: 20,
  marginTop: '3rem'
});

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default function ReviewPage(props:createReview) {
    const [value, setValue] = React.useState<number | null>(2);
  return (
    <header>
        <NavBar/>
    <><><div role="presentation" onClick={handleClick}>
          <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 2, marginLeft: 4 }}>
              <Link color="black" fontSize={25} fontWeight={10} underline="hover" href="/Review/ReviewPage.tsx">
                  User Review
              </Link>
              <Link color="orange" fontSize={25} fontWeight={10} underline="hover" href="/">
                  Write a Review
              </Link>
          </Breadcrumbs>
      </div>

      </><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
              <Grid item xs={5}>
                  <Card sx={{ textAlign: 'center', width: 200, marginLeft: 7, marginBottom: '1rem', marginTop: '2rem', backgroundColor: 'white', color: 'black' }}>
              <Box>
                  <CardMedia component="img" height="250" sx={{ width: 200 }}
                      image={props.cover}
                      alt="book cover" />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent sx={{ flex: '1 auto' }}>
                      <Typography component="div" variant="h5">
                          {props.title}
                      </Typography>
                      <Typography variant="subtitle1" color="black" component="div">
                          {props.author}
                      </Typography>
                  </CardContent>

              </Box>
          </Card>
          <Typography sx={{ display: 'center', marginLeft: 7, alignItems: 'center', fontSize: 20}}>Rating:
          &nbsp;
          <Rating sx={{alignItems: 'center', display: 'left'}}
             name="simple-controlled"
             value={props.rating}
            onChange={(event, newValue) => {
            setValue(newValue);
             }} />
          </Typography>
              </Grid>
              <Grid item xs={2}>
                  <Item>
                  <Typography sx={{ display: 'center', alignContent: 'left'}}>What did you think?</Typography>
          <Box sx={{ display: 'left', flexDirection: 'row' }}>
              <TextField variant="outlined" multiline rows={9} sx={{ width: 600 }} />
          </Box>
          <Stack spacing={2} direction="row" sx={{marginTop:'1rem'}}>
              <Button variant="contained" sx={{ backgroundColor: 'orange' }}>SAVE</Button>
              <Button variant="contained" sx={{ backgroundColor: 'orange' }}>DELETE</Button>
          </Stack>   
                </Item>
              </Grid>
          </Grid></>
    </header>
  );
}