import React from 'react';
import { Container, ListGroup, ListGroupItem, Col, Row, Card } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ToastContainer, toast } from 'react-toastify';
import * as constants from './constants'
import 'react-toastify/dist/ReactToastify.css';

class BatchelorGame extends React.Component {
    
    constructor(props){
        super(props);
        let picks = {
            finalFour: [],
            finalTwo: [],
            finalOne: -1
        }
        this.state = ({
            picks: picks
        });

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    async componentDidMount(){

    }

    onDragEnd(result) {
        const { source, destination } = result;
        
        let picks = this.state.picks;

        if(destination && destination.droppableId === 'final-four'){
        
            if(this.state.picks.finalFour.length >= 4){
                toast("You must remove a contestant first! (4 Max)", { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
            }else if(this.state.picks.finalFour.includes(result.draggableId)){
                toast("You have already added this contestant", { type: toast.TYPE.WARNING, hideProgressBar: true, autoClose: 2500});
            }else {
                picks.finalFour = this.state.picks.finalFour;
                
                picks.finalFour.push(result.draggableId);
            }
        }

        if(destination && destination.droppableId === 'final-two'){
            if(this.state.picks.finalTwo.length >= 2){
                toast("You must remove a contestant first! (3 Max)", { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
            }else if(this.state.picks.finalTwo.includes(result.draggableId)){
                toast("You have already added this contestant", { type: toast.TYPE.WARNING, hideProgressBar: true, autoClose: 2500});
            }else {
                picks.finalTwo = this.state.picks.finalTwo;
                
                picks.finalTwo.push(result.draggableId);                
            }
        }

        if(destination && destination.droppableId === 'final-one'){
            if(this.state.picks.finalOne >= 1){
                toast("You must remove a contestant first! (1 Max)", { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
            }else {
                picks.finalOne = this.state.picks.finalOne;
                
                picks.finalOne = result.draggableId;  
            }
        }
        
        this.setState({
            picks: picks
        });

    }

    render(){

        let finalFourDisplay = 'no selections made';
        
        if(this.state.picks.finalFour.length > 0){
            finalFourDisplay = this.state.picks.finalFour.map((id) => 
                <li className="names-list-item">{constants.girls[id - 1].name}</li>)
        }

        let finalTwoDisplay = 'no selections made';
        
        if(this.state.picks.finalTwo.length > 0){
            finalTwoDisplay = this.state.picks.finalTwo.map((id) => 
                <li className="names-list-item">{constants.girls[id - 1].name}</li>)
        }

        let finalOneDisplay = 'No One Gets Final Rose';

        if(this.state.picks.finalOne > 0){
            finalOneDisplay = <li className="names-list-item">{constants.girls[this.state.picks.finalOne - 1].name}</li>
        }

        return(
            <div>
                <Container>
                    <ToastContainer />
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
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Final Two</Card.Title>
                                        <Card.Subtitle>Drag 2 Selection (order doesn't matter)</Card.Subtitle>
                                        
                                            <Droppable droppableId="final-two">
                                                {                                                    
                                                    (provided, snapshot) => (
                                                        <ul className="names-list"  
                                                            {...provided.droppableProps} 
                                                            ref={provided.innerRef}
                                                            isDraggingOver={snapshot.isDraggingOver} >
                                                            {finalTwoDisplay}
                                                        </ul>
                                                    )
                                                }
                                            </Droppable>
                                    
                                    </Card.Body>                                
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Final Rose</Card.Title>
                                        <Card.Subtitle>Drag 1 Selection or don't leave a name if you think no one gets the final rose</Card.Subtitle>
                                        
                                            <Droppable droppableId="final-one">
                                                {                                                    
                                                    (provided, snapshot) => (
                                                        <ul className="names-list"  
                                                            {...provided.droppableProps} 
                                                            ref={provided.innerRef}
                                                            isDraggingOver={snapshot.isDraggingOver} >
                                                            {finalOneDisplay}
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