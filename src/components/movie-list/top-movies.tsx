import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ITopMovies from '../../models/ITopMovies';
import AddFavo from '../common/AddFavo';

type Props = {
    topmovies: ITopMovies;
}

const TopMovies = ( { topmovies } : Props) => {
  const {
    title,
    posterurl
  }= topmovies;

  const cardStyle = {
    height: "80%"
  };
  
    return(
        <Card style={ { width: "18rem"}}>
  <Card.Img variant="top" {...cardStyle} src={`${posterurl}`} />
  <Card.Body>
    <Card.Text>{title}</Card.Text>
    <AddFavo />
  </Card.Body>
</Card>
    );
}

export default TopMovies;