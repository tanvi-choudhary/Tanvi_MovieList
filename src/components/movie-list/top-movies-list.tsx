import React , {Component} from 'react';
import TopMovies from './top-movies';
import ITopMovies from '../../models/ITopMovies';
import {Row, Col, Alert} from 'react-bootstrap';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';

import {getTopMovies} from "../../services/movies";

type Props = {};

type State = {
    status: LoadingStatus,
    topmovies?: ITopMovies[],
    error?: Error
};


class TopMoviesList extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render(){
        let el;
        const {status, topmovies, error} = this.state;
        
        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of top movies. Please wait..."
                    />
                );
                break;
            case 'LOADED':  
            el =(
                <Row xs={1} md={3} lg= {6} >
                    {
                        topmovies?.map(
                            topmovies =>(
                                <Col key={topmovies.title} className="d-flex align-items-stretch my-3">
                                    <TopMovies 
                                    topmovies={topmovies} 
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
            const data = await getTopMovies();
            this.setState({
                status: 'LOADED',
                topmovies: data
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR_LOADING'
            });
        }
    }
        
    
}

export default TopMoviesList;
