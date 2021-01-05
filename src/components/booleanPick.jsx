import React from 'react';
import {Form, Card} from 'react-bootstrap';
import * as constants from '../constants';

class BooleanPick extends React.Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        
        this.props.handleChange(evt);
    }

    render(){
        return(
            <div>

                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
                        
                        <Form.Group>
                            <Form.Check id={this.props.yesId} checked={this.props.pick === constants.TRUE} type="radio" name={this.props.radiosIds} label="Yes" onChange={this.handleChange}/>
                            <Form.Check id={this.props.noId} checked={this.props.pick === constants.FALSE} type="radio" name={this.props.radiosIds} label="No" onChange={this.handleChange}/>
                        </Form.Group>

                    </Card.Body>
                </Card>   

            </div>
        );
    }
}

export default BooleanPick;