import React , {Component} from 'react';
import MovieTheater from './movie-theater';
import IMovie from '../../models/IMovie';
import {Row, Col, Alert} from 'react-bootstrap';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';

import {getMovieTheater} from "../../services/movies";

type Props = {};

type State = {
    status: LoadingStatus,
    movies?: IMovie[],
    error?: Error
};


class MovieTheaterList extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render(){
        let el;
        const {status, movies, error} = this.state;
        
        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of movies. Please wait..."
                    />
                );
                break;
            case 'LOADED':  
            el =(
                <Row xs={1} md={3} lg= {6} >
                    {
                        movies?.map(
                            movie =>(
                                <Col key={movie.id} className="d-flex align-items-stretch my-3">
                                    <MovieTheater 
                                    movie={movie} 
                                    />
                                </Col>
                            )
                        )
                    }
                </Row>
            );
            break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger">
                        {error?.message}
                    </Alert>
                );
                break;
        }

        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getMovieTheater();
            this.setState({
                status: 'LOADED',
                movies: data
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR_LOADING'
            });
        }
    }
        
    
}

export default MovieTheaterList;
