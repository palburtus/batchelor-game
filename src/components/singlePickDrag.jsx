import React from 'react';
import {Card} from 'react-bootstrap';
import * as constants from '../constants';
import {Droppable} from 'react-beautiful-dnd';

class SinglePickDrag extends React.Component {

    constructor(props){
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {        
        this.props.onDragEnd(result);
    }

    render(){

        let noSingleSelectionMadeDisplay = <span className="no-selection">No Selection Made</span>;

        let display = noSingleSelectionMadeDisplay;
        let girl = constants.getGirlsById(this.props.pick);
 
        if(this.props.pick > 0){
            if(!this.props.isLocked){
                display = (
                    <li className="list-group-item">
                        <span className="remove-selection" onClick={() => this.props.removeSelection(this.props.pick, this.props.droppableId)}>X</span>
                        <img src={girl.thumb} height="50px" width="50px" className="thumbnail img-fluid" alt="..."></img>
                        {girl.name}                        
                    </li>);
            }else{
                display = (
                    <li className="list-group-item">
                        <img src={girl.thumb} height="50px" width="50px" className="thumbnail img-fluid" alt="..."></img>
                        {girl.name}                        
                    </li>);
            }
            
        }

        return(
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
                        
                        <Droppable droppableId={this.props.droppableId}>
                            {                                                    
                                (provided, snapshot) => (
                                    <ul className="list-group"  
                                        {...provided.droppableProps} 
                                        ref={provided.innerRef}
                                        isDraggingOver={snapshot.isDraggingOver} >
                                        {display}
                                    </ul>
                                )
                            }
                        </Droppable>
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default SinglePickDrag;