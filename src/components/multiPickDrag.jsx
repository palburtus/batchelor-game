import React from 'react';
import {Card} from 'react-bootstrap';
import * as constants from '../constants';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class MultiPickDrag extends React.Component {

    constructor(props){
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {        
        this.props.onDragEnd(result);
    }

    render(){

        let noSelectionsMadeDisplay = <span className="no-selection">No Selections Made</span>;

        let display = noSelectionsMadeDisplay;

        if(this.props.picks.length > 0){
           
            display = this.props.picks.map((id) => {
                if(!this.props.isLocked)
                    return (
                        <li className="list-group-item">
                            <span className="remove-selection" onClick={() => this.props.removeSelection(id, this.props.droppableId)}>X</span>
                            <img src={constants.girls[id - 1].thumb} height="50px" width="50px" class="thumbnail img-fluid" alt="..."></img>
                            <p className="thumb-label">{constants.girls[id - 1].name}</p>                        
                        </li>)
                return (
                        <li className="list-group-item">
                            <img src={constants.girls[id - 1].thumb} height="50px" width="50px" class="thumbnail img-fluid" alt="..."></img>
                            <p className="thumb-label">{constants.girls[id - 1].name}</p>                        
                        </li>)
            });
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

export default MultiPickDrag;