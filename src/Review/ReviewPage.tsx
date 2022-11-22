import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(
  cover: string,
  title: string,
  author: string,
  rating: number,
  review: string,
) {
  return { cover, title, author, rating, review };
}

const rows = [
  createData('/images/uglylove.jpeg', 'Ugly Love', 'Colleen Hover', 3, 'Write a Review')
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{marginTop:3, marginLeft:100}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Cover</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Review</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.cover}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.cover}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.author}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              <TableCell align="center">{row.review}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}