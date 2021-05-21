import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { DELETEBOOK } from "./Redux/Book/bookactions";
import "../Addbook.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const booklist = books.map((book) => {
    return (
      <TableBody>
        <TableRow key={book.id}>
          <TableCell>{book.id}</TableCell>
          <TableCell>{book.title}</TableCell>
          <TableCell>{book.author}</TableCell>
          <TableCell>
            <Button
              component={Link}
              to={`edit/${book.id}`}
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(DELETEBOOK(book.id))}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  });
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          {booklist}
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
