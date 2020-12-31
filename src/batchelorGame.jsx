import React from 'react';
import { Container, ListGroup, ListGroupItem, Col, Row, Card, Form } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ToastContainer, toast } from 'react-toastify';
import * as constants from './constants';
import * as picksRepository from './firebaseFirestoreRepository';
import 'react-toastify/dist/ReactToastify.css';

class BatchelorGame extends React.Component {
    
    constructor(props){
        super(props);
        
        let email = this.getParameterByName('email');
        let token = this.getParameterByName('token');

        this.state = ({
            errorMessage: '',
            email: email,
            token: token,
            isLoading: true
        });

        this.removeSelection = this.removeSelection.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount(){
        
        let picks = {
            finalFour: [],
            finalTwo: [],
            finalOne: -1,
            isTylerCameronApperance: constants.NO_SELECTION,
            firstImpressionRose: -1,
            //TODO can happen any time but must be done before 1st episode
            firstOneOnOneDate: -1,
            firstTears: -1,
            //TODO first episode specific            
            
            firstOutOfLimo: -1,
            firstKiss: -1, 
            //TODO (can be implemented after 1st episode)        
            finalEight: [],
            firstToLeaveOnOwn: -1                
        }

        picksRepository.getPicks(this.state.token)
            .then((response) => {
                
                if(response){
                    picks = response;
                }

                this.setState({ 
                    picks: picks,
                    isLoading: false,
                    errorMessage: ''
                });     
            }).catch((error) => {
                this.setState({ 
                    picks: picks,
                    isLoading: false,
                    errorMessage: error
                });     
            })               
    }

    async savePicks(picks){
        picksRepository.upsertPicks(this.state.email, this.state.token, picks);
    }

    getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    arrayRemoveByValue(array, value){
        let index = array.indexOf(value);
        array.splice(index, 1);
        return array;
    }

    handleChange(evt) {
        let picks = this.state.picks;

        if(evt.currentTarget.name === 'tylerCameronRadios'){
            
            if(evt.currentTarget.id === 'tylerCameronYes'){
                if(evt.currentTarget.checked){
                    picks.isTylerCameronApperance = constants.TRUE;
                }
            }else if(evt.currentTarget.id === 'tylerCameronNo'){
                if(evt.currentTarget.checked){
                    picks.isTylerCameronApperance = constants.FALSE;
                }
            }
        }

        this.setState({ picks: picks });

        this.savePicks(picks);
    }
   
    removeSelection(id, listId){

        let picks = this.state.picks;

        if(listId === 'final-four'){
            picks.finalFour = this.arrayRemoveByValue(picks.finalFour, id);
        }

        if(listId === 'final-two'){
            picks.finalTwo = this.arrayRemoveByValue(picks.finalTwo, id);
        }

        if(listId === 'final-one'){
            picks.finalOne = -1;
        }

        if(listId === 'first-impression'){
            picks.firstImpressionRose = -1;
        }

        if(listId === 'first-out-of-limo'){
            picks.firstOutOfLimo = -1;
        }

        this.setState({
            picks: picks
        });

        this.savePicks(picks);
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
                toast("You must remove a contestant first! (2 Max)", { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
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

        if(destination && destination.droppableId === 'first-impression'){
            if(this.state.picks.firstImpressionRose >= 1){
                toast("You must remove a contestant first! (1 Max)", { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
            }else {
                picks.firstImpressionRose = this.state.picks.firstImpressionRose;
                picks.firstImpressionRose = result.draggableId;
            }
        }

        if(destination && destination.droppableId === 'first-out-of-limo'){
            if(this.state.picks.firstOutOfLimo >= 1){
                toast("You must remove a contestant first! (1 Max)", { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
            }else {
                picks.firstOutOfLimo = this.state.picks.firstOutOfLimo;
                picks.firstOutOfLimo = result.draggableId;
            }
        }
        
        
        this.setState({
            picks: picks
        });

        this.savePicks(picks);
    }

    render(){

        if(this.state.isLoading){
            return(<div><p>Loading...</p></div>);
        }else{

            let finalFourDisplay = 'No Selections Made';
            
            if(this.state.picks.finalFour.length > 0){
                finalFourDisplay = this.state.picks.finalFour.map((id) => 
                    <li className="list-group-item">{constants.girls[id - 1].name}
                        <span className="remove-selection" onClick={() => this.removeSelection(id, 'final-four')}>X</span>
                    </li>)
            }

            let finalTwoDisplay = 'No Selections Made';
            
            if(this.state.picks.finalTwo.length > 0){
                finalTwoDisplay = this.state.picks.finalTwo.map((id) => 
                    <li className="list-group-item">{constants.girls[id - 1].name}
                        <span className="remove-selection" onClick={() => this.removeSelection(id, 'final-two')}>X</span>
                    </li>)
            }

            let finalOneDisplay = 'No One Gets Final Rose';

            if(this.state.picks.finalOne > 0){
                finalOneDisplay = (<li className="list-group-item">{constants.girls[this.state.picks.finalOne - 1].name}
                                        <span className="remove-selection" onClick={() => this.removeSelection(this.state.picks.finalOne, 'final-one')}>X</span>
                                    </li>);
            }

            let firstImpressionRoseDisplay = 'No Selection';
            if(this.state.picks.firstImpressionRose > 0){
                firstImpressionRoseDisplay = (
                    <li className="list-group-item">{constants.girls[this.state.picks.firstImpressionRose - 1].name}
                        <span className="remove-selection" onClick={() => this.removeSelection(this.state.picks.firstImpressionRose, 'first-impression')}>X</span>
                    </li>);
            }

            let firstOutOfLimoDisplay = 'No Selection';
            if(this.state.picks.firstOutOfLimo > 0){
                firstOutOfLimoDisplay = (<li className="list-group-item">{constants.girls[this.state.picks.firstOutOfLimo - 1].name}
                                            <span className="remove-selection" onClick={() => this.removeSelection(this.state.picks.firstOutOfLimo, 'first-out-of-limo')}>X</span>
                                         </li>);
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
                                                        <ul className="list-group" {...provided.droppableProps} ref={provided.innerRef}>
                                                            {constants.girls.map(({id, name}, index) => {
                                                                return (
                                                                    <Draggable key={id} draggableId={id} index={index}>
                                                                    {(provided) => (
                                                                        <li className="list-group-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                            { name }
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
                                                            <ul className="list-group"  
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
                                                            <ul className="list-group"  
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
                                                            <ul className="list-group"  
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
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>More to come</Card.Title>
                                            <Card.Subtitle>Will add more season long question to come that will be locked in before week 3</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>First Impression Rose</Card.Title>
                                            <Card.Subtitle>Drag and Drop your pick here</Card.Subtitle>
                                            
                                            <Droppable droppableId="first-impression">
                                                {                                                    
                                                    (provided, snapshot) => (
                                                        <ul className="list-group"  
                                                            {...provided.droppableProps} 
                                                            ref={provided.innerRef}
                                                            isDraggingOver={snapshot.isDraggingOver} >
                                                            {firstImpressionRoseDisplay}
                                                        </ul>
                                                    )
                                                }
                                            </Droppable>
                                            
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>First Out of Limo</Card.Title>
                                            <Card.Subtitle>Drag and Drop your pick here</Card.Subtitle>
                                            
                                            <Droppable droppableId="first-out-of-limo">
                                                {                                                    
                                                    (provided, snapshot) => (
                                                        <ul className="list-group"  
                                                            {...provided.droppableProps} 
                                                            ref={provided.innerRef}
                                                            isDraggingOver={snapshot.isDraggingOver} >
                                                            {firstOutOfLimoDisplay}
                                                        </ul>
                                                    )
                                                }
                                            </Droppable>
                                            
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Will Tyler Cameron Make an Apperance?</Card.Title>
                                            <Card.Subtitle>Must be shown on broadcast (excluding previews) during the 1st episode</Card.Subtitle>
                                            
                                            <Form.Group>
                                                <Form.Check id="tylerCameronYes" checked={this.state.picks.isTylerCameronApperance === constants.TRUE} type="radio" name="tylerCameronRadios" label="Yes" onChange={this.handleChange}/>
                                                <Form.Check id="tylerCameronNo" checked={this.state.picks.isTylerCameronApperance === constants.FALSE} type="radio" name="tylerCameronRadios" label="No" onChange={this.handleChange}/>
                                            </Form.Group>

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
}

export default BatchelorGame;