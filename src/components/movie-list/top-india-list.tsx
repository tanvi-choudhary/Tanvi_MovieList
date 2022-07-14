import React , {Component} from 'react';
import TopIndia from './top-india';
import ITopIndia from '../../models/ITopIndia';
import {Row, Col, Alert} from 'react-bootstrap';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';

import {getTopIndia} from "../../services/movies";

type Props = {};

type State = {
    status: LoadingStatus,
    india?: ITopIndia[],
    error?: Error
};


class TopIndiaList extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render(){
        let el;
        const {status, india, error} = this.state;
        
        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of movies that are top in India. Please wait..."
                    />
                );
                break;
            case 'LOADED':  
            el =(
                <Row xs={1} md={3} lg= {6} >
                    {
                        india?.map(
                            india =>(
                                <Col key={india.title} className="d-flex align-items-stretch my-3">
                                    <TopIndia 
                                    india={india} 
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
            const data = await getTopIndia();
            this.setState({
                status: 'LOADED',
                india: data
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR_LOADING'
            });
        }
    }
        
    
}

export default TopIndiaList;
