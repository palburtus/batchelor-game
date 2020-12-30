import React from 'react';
import { Container, ListGroup, ListGroupItem, Col, Row, Card } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as constants from './constants'

class BatchelorGame extends React.Component {
    
    constructor(props){
        super(props);

        this.state = ({
            finalFour: []
        });

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    async componentDidMount(){

    }

    onDragEnd(result) {
        const { source, destination } = result;

        if(destination.droppableId === 'final-four'){
            let finalFour = this.state.finalFour;
            finalFour.push(constants.girls[result.draggableId - 1]);
            
            this.setState({
                finalFour: finalFour
            });
        }

    }

    render(){

        let finalFourDisplay = 'no selections made';
        if(this.state.finalFour.length > 0){
            finalFourDisplay = this.state.finalFour.map((e) => 
                <li className="names-list-item">{e.name}</li>)
        }
                                                    

        return(
            <div>
                <Container>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Girls
                                        </Card.Title>
                                        <Card.Subtitle>
                                            Drag Names from this List 
                                        </Card.Subtitle>                                
                                        
                                            <Droppable droppableId="girls-list" isDropDisabled={true}>
                                                {(provided) => (
                                                    <ul className="names-list" {...provided.droppableProps} ref={provided.innerRef}>
                                                        {constants.girls.map(({id, name}, index) => {
                                                            return (
                                                                <Draggable key={id} draggableId={id} index={index}>
                                                                {(provided) => (
                                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    <p>
                                                                        { name }
                                                                    </p>
                                                                    </li>
                                                                )}
                                                                </Draggable>
                                                            );
                                                        })}
                                                        {provided.placeholder}
                                                    </ul>
                                                )}
                                            </Droppable>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Final Four</Card.Title>
                                        <Card.Subtitle>Drag 4 Selection (order doesn't matter)</Card.Subtitle>
                                        
                                            <Droppable droppableId="final-four">
                                                {                                                    
                                                    (provided, snapshot) => (
                                                        <ul className="names-list"  
                                                            {...provided.droppableProps} 
                                                            ref={provided.innerRef}
                                                            isDraggingOver={snapshot.isDraggingOver} >
                                                            {finalFourDisplay}
                                                        </ul>
                                                    )
                                                }
                                            </Droppable>
                                    
                                    </Card.Body>                                
                                </Card>
                            </Col>
                        </Row>
                    </DragDropContext>
                </Container>
            </div>
        );
    }
}

export default BatchelorGame;