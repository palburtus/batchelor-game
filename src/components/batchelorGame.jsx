import React from 'react';
import { Container, Col, Row, Card, Alert} from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import * as constants from '../constants';
import * as utils from '../utils';
import * as picksRepository from '../firebaseFirestoreRepository';
import * as gameService from '../gameService';
import 'react-toastify/dist/ReactToastify.css';
import SinglePickDrag from './singlePickDrag';
import MultiPickDrag from './multiPickDrag';
import BooleanPick from './booleanPick';
import hottubscarface from '../assets/hottubscarface.gif';
import corruption from '../assets/corruption.gif';
import bachelorretteparty from '../assets/bachelorretteparty.gif';
import tylercameronlose from '../assets/tylercameronlose.gif';
import spoileralert from '../assets/spoileralert.gif'



class BatchelorGame extends React.Component {
    
    constructor(props){
        super(props);
        
        let picks = constants.defaultPicks();

        this.state = ({
            picks: picks,
            isWeekOneLockedOut: true,
            isWeekTwoLockedOut: true,
            isWeekThreeLockedOut: true,
            isWeekFourLockedOut: false,
            isSeasonLongLockedOut: false,
            infoMessage: '',
            warningMessage: '',
            errorMessage: '',
            isError: false,
            isLoading: true
        });

        this.removeSelection = this.removeSelection.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiDragAdd = this.handleMultiDragAdd.bind(this);
    }

    async componentDidMount(){
        
        const cookies = new Cookies();

        let token = utils.getParameterByName('token');
        
        if(token){
            let cookieDate = new Date(2199, 1, 1);
            cookies.set('aaks_token', null, { path: '/', expires: cookieDate});
        }else{
            token = cookies.get('aaks_token');
        }

        let picks = this.state.picks;

        picksRepository.getPicks(token)
            .then((response) => {
               
                if(response.picks){
                    picks = response.picks;
                }

                let score = gameService.getScore(picks);

                this.setState({ 
                    token: token,
                    name: response.name,
                    email: response.email,
                    picks: picks,
                    score: score,
                    isLoading: false,
                    isError: false,
                    errorMessage: ''
                });     
            }).catch((error) => {
                
                this.setState({ 
                    picks: picks,
                    isLoading: false,
                    errorMessage: error
                });     
            });               
    }

    async savePicks(picks){
        picksRepository.upsertPicks(this.state.email, this.state.token, this.state.name, picks);
    }    
    
    handleBooleanEventChange(evt, evtName, choice){

        if(choice === undefined){
            choice = constants.NO_SELECTION;
        }

        if(evt.currentTarget.name === evtName){
            
            if(evt.currentTarget.id === 'yes'){
                if(evt.currentTarget.checked){
                    choice = constants.TRUE;
                }
            }else if(evt.currentTarget.id === 'no'){
                if(evt.currentTarget.checked){
                    choice = constants.FALSE;
                }
            }
        }                

        return choice;
    }
       
    handleMultiDragAdd(picks, statePicks, droppableId, result, maxPicks){

        if(!picks){
            picks = [constants.NO_SELECTION];
        }

        const { destination } = result;

        if(destination && destination.droppableId === droppableId){
           
            if(picks.length >= maxPicks){
                toast(`You must remove a contestant first! (${maxPicks} Max)`, { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
            }else if(statePicks.includes(result.draggableId)){
                toast("You have already added this contestant", { type: toast.TYPE.WARNING, hideProgressBar: true, autoClose: 2500});
            }else {
                picks = statePicks;                
                picks.push(result.draggableId);
            }            
        }

        return picks;
    }
    
    handleSingleDragAdd(picks, statePicks, droppableId, result){

        if(!picks){
            picks = constants.NO_SELECTION;
        }

        const { destination } = result;

        if(destination && destination.droppableId === droppableId){
            if(picks >= 1){
                toast("You must remove a contestant first! (1 Max)", { type: toast.TYPE.ERROR, hideProgressBar: true, autoClose: 2500});
            }else {
                picks = statePicks;                
                picks = result.draggableId;  
            }
        }

        return picks;
    }
    
    //TODO move business logic into multiPickDrag and singlePickDrag
    removeSelection(id, listId){
      
        let picks = this.state.picks;
     
        //WEEK 3
        if(!this.state.isWeekThreeLockedOut){

            if(listId === 'first-one-on-one-date-week-three'){
                picks.firstOneOnOneDateWeekThree = -1;
            }

            if(listId === 'first-group-date-rose-week-three'){
                picks.firstGroupDateRoseWeekThree = -1
            }

            if(listId === 'is-not-on-any-date-week-three'){
                picks.isNotOnAnyDateWeekThree = -1;
            }
        }

        //WEEK 2
        if(!this.state.isWeekTwoLockedOut){
            if(listId === 'first-one-on-one-date'){
                picks.firstOneOnOneDate = -1;
            }

            if(listId === 'requires-medical-attention-week-two'){
                picks.requiresMedicalAttentionWeekTwo = -1;
            }

            if(listId === 'first-group-date-rose-week-two'){
                picks.firstGroupDateRoseWeekTwo = -1;
            }

            if(listId === 'first-interruption-week-two'){
                picks.firstInterruptionWeekTwo = -1;
            }
        }

        //WEEK 1
        if(!this.state.isWeekOneLockedOut){
            if(listId === 'first-wearing-costume'){
                picks.firstWearingCostume = -1;
            }
    
            if(listId === 'first-impression'){
                picks.firstImpressionRose = -1;
            }
    
            if(listId === 'first-out-of-limo'){
                picks.firstOutOfLimo = -1;
            }
    
            if(listId === 'first-kiss'){
                picks.firstKiss = -1;
            }
    
            if(listId === 'first-tears'){
                picks.firstTears = -1;
            }
        }        

        //SEASON                
        if(!this.state.isSeasonLongLockedOut){
            if(listId === 'final-six'){
                picks.finalSix = utils.arrayRemoveByValue(picks.finalSix, id);
            }
    
            if(listId === 'final-four'){
                picks.finalFour = utils.arrayRemoveByValue(picks.finalFour, id);
            }
    
            if(listId === 'final-two'){
                picks.finalTwo = utils.arrayRemoveByValue(picks.finalTwo, id);
            }
    
            if(listId === 'final-one'){
                picks.finalOne = -1;
            }
        }
        
        this.setState({
            picks: picks
        });

        this.savePicks(picks);
    }

    onDragEnd(result) {
        
        const { destination } = result;
        
        let picks = this.state.picks;

        //SEASON
        if(!this.state.isSeasonLongLockedOut){
          
            picks.finalSix = this.handleMultiDragAdd(picks.finalSix, this.state.picks.finalSix, 'final-six', result, 6);
            picks.finalFour = this.handleMultiDragAdd(picks.finalFour, this.state.picks.finalFour, 'final-four', result, 4);
            picks.finalTwo = this.handleMultiDragAdd(picks.finalTwo, this.state.picks.finalTwo, 'final-two', result, 2);
            picks.finalOne = this.handleSingleDragAdd(picks.finalOne, this.state.picks.finalOne, 'final-one', result)
       
        }

        //WEEK 4
        if(!this.state.isWeekFourLockedOut){

        }

        //WEEK 3
        if(!this.state.isWeekThreeLockedOut){
            
            picks.firstOneOnOneDateWeekThree = this.handleSingleDragAdd(picks.firstOneOnOneDateWeekThree, this.state.picks.firstOneOnOneDateWeekThree, 'first-one-on-one-date-week-three', result);
            picks.firstGroupDateRoseWeekThree = this.handleSingleDragAdd(picks.firstGroupDateRoseWeekThree, this.state.picks.firstGroupDateRoseWeekThree, 'first-group-date-rose-week-three', result);
            picks.isNotOnAnyDateWeekThree = this.handleSingleDragAdd(picks.isNotOnAnyDateWeekThree, this.state.picks.isNotOnAnyDateWeekThree, 'is-not-on-any-date-week-three', result);
        }

        //WEEK 2
        if(!this.state.isWeekTwoLockedOut){
            picks.firstOneOnOneDate = this.handleSingleDragAdd(picks.firstOneOnOneDate, this.state.picks.firstOneOnOneDate, 'first-one-on-one-date', result);        
            picks.requiresMedicalAttentionWeekTwo = this.handleSingleDragAdd(picks.requiresMedicalAttentionWeekTwo, this.state.picks.requiresMedicalAttentionWeekTwo, 'requires-medical-attention-week-two', result);
            picks.firstGroupDateRoseWeekTwo = this.handleSingleDragAdd(picks.firstGroupDateRoseWeekTwo, this.state.picks.firstGroupDateRoseWeekTwo, 'first-group-date-rose-week-two', result);
            picks.firstInterruptionWeekTwo = this.handleSingleDragAdd(picks.firstInterruptionWeekTwo, this.state.picks.firstInterruptionWeekTwo, 'first-interruption-week-two', result);
        }

        //WEEK 1
        if(!this.state.isWeekOneLockedOut){
            
            picks.firstWearingCostume = this.handleSingleDragAdd(picks.firstWearingCostume, this.state.picks.firstWearingCostume, 'first-wearing-costume', result);
            picks.firstImpressionRose = this.handleSingleDragAdd(picks.firstImpressionRose, this.state.picks.firstImpressionRose, 'first-impression-rose', result)
            picks.firstOutOfLimo = this.handleSingleDragAdd(picks.firstOutOfLimo, this.state.firstOutOfLimo, 'first-out-of-limo', result);
            picks.firstKiss = this.handleSingleDragAdd(picks.firstKiss, this.state.picks.firstKiss, 'first-kiss', result);
            picks.firstTears = this.handleSingleDragAdd(picks.firstTears, this.state.picks.firstTears, 'first-tears', result);
        }
                
        this.setState({
            picks: picks
        });

        this.savePicks(picks);
    }
    
    handleChange(evt) {
       
        let picks = this.state.picks;
        
        //WEEK 4
        if(!this.state.isWeekFourLockedOut){
                    
        }

        //WEEK 3
        if(!this.state.isWeekThreeLockedOut){
            picks.isTylerCameronApperanceWeekThree = this.handleBooleanEventChange(evt, 'isTylerCameronApperanceWeekThree', picks.isTylerCameronApperanceWeekThree);
            picks.isNewContestantIntroducedWeekThree = this.handleBooleanEventChange(evt, 'isNewContestantIntroducedWeekThree', picks.isNewContestantIntroducedWeekThree);
            picks.isHotTubWeekThree = this.handleBooleanEventChange(evt, 'isHotTubWeekThree', picks.isHotTubWeekThree);
            picks.isVictoriaMarylynSurviveWeekThree = this.handleBooleanEventChange(evt, 'isVictoriaMarylynSurviveWeekThree', picks.isVictoriaMarylynSurviveWeekThree);
        }

        //WEEK 2
        if(!this.state.isWeekTwoLockedOut){                        
            picks.isHotTubWeekTwo = this.handleBooleanEventChange(evt, 'isHotTubWeekTwoRadios', picks.isHotTubWeekTwo);                
            picks.isTylerCameronApperanceWeek2 = this.handleBooleanEventChange(evt, 'isTylerCameronApperanceWeek2Radios', picks.isTylerCameronApperanceWeek2);
            picks.isLiveMusicPlayedWeekTwo = this.handleBooleanEventChange(evt, 'isLiveMusicPlayedWeekTwo', picks.isLiveMusicPlayedWeekTwo);
            picks.isNewContestantIntroducedWeekTwo = this.handleBooleanEventChange(evt, 'isNewContestantIntroducedWeekTwo', picks.isNewContestantIntroducedWeekTwo);
        }

        if(!this.state.isWeekOneLockedOut){                        
            picks.isTylerCameronApperance = this.handleBooleanEventChange(evt, 'tylerCameronRadios', picks.isTylerCameronApperance);
        }
        

        this.setState({ picks: picks });

        this.savePicks(picks);
    }

    render(){

        if(this.state.isLoading){
            return(<div><p>Loading...</p></div>);
        }else if(this.state.picks){
            
            let girls = constants.girls;

            girls.sort((a,b) => (b.isActive) ? 1 : -1);

            return(
                <div>
                    <Container>
                        <ToastContainer />
                        <Row>
                            <Col>
                                <div className="answers">
                                    <h3>Question Results</h3>    
   
                                    <h4>Week 3 Answers</h4>
                                    
                                    <div className="alert alert-warning">
                                        <p>As of right now we are still planning to lock out the season long questions (final rose, top 2, top 4, etc) on <strong>February 1st at 8pm EST</strong>.</p>
                                        <p><strong>However</strong> due to the upcoming influx of new girls and lack of rose ceremonies thus far <strong>we may delay that cut-off by at least a week</strong> based on how many girls are left after week 4.</p>
                                    </div>                                    

                                    <img src={spoileralert} className="answers-gif" width="300" height="200" alt="spoileralert"/>                                    

                                    <div className="alert alert-info">
                                        <p><strong>Quick Recap: </strong>Another strong week for Lauren in the points who has started to open up a nice lead as we approach season question lock outs, nice job!  
                                        Just a friendly (totally unrelated) reminder, any use of spoilers will result 
                                        in the permanent lifetime ban of any offending player, not that Lauren would ever do such a thing and I'm not just saying this because I'm bitter I'm in 2nd now.</p>                                        
                                    </div>

                                    <img src={tylercameronlose} className="answers-gif" width="300" height="200" alt="corruption"/>
                                    <p><strong>Will Tyler Cameron make an appearance:</strong> No</p>
                                    <p><strong>One on One Date Rose(s)</strong>: Serena P</p>
                                    <p><strong>Group Date Rose(s):</strong> Rachael</p>
                                    <p><strong>Who does not get a date this week?:</strong> No One (more info below)</p>
                                    <ul>
                                        <li>
                                            Although the list of names on the 2nd date card were never read, it was mentioned twice during the episode that everyone 
                                            would be getting a date this week.
                                        </li>
                                        <li>
                                            The spirit of this question was to pick someone who would be completly passed up for a date.
                                        </li>
                                        <li>
                                            Full disclosure: if we counted the girls who's group date never happened on the episode I would have gotten the question wrong.  
                                            However, I have ruled against points for myself in the past and will continue to try to rule as farily as possible in the future.
                                        </li>
                                    </ul>
                                    <img src={corruption} className="answers-gif" width="300" height="200" alt="corruption"/>

                                    <p><strong>Will a new contestant be added:</strong> No</p>
                                    <ul>
                                        <li>This question will be removed since the previews made it very clear the new contestants will be joining us next week.</li>
                                    </ul>
                                    <img src={bachelorretteparty} className="answers-gif" width="300" height="200" alt="bachelorretteparty"/>

                                    <p><strong>Will both Victoria and Marylyn receive roses that keeps them on the show through week 3:</strong> No</p>
                                    <ul>
                                        <li>Marylyn did not receive a rose during the rose ceremony that was already in progress at the begining of the episode</li>
                                    </ul>
                                    <p><strong>Hotub with the bachelor: </strong> Yes</p>
                                    <ul>
                                        <li>2nd week in a row!  This has been a strong season for the jacuzzi industry.</li>
                                    </ul>
                                    <img src={hottubscarface} className="answers-gif" width="300" height="200" alt="hottubscarface"/>
                                    
                                </div>
                                
                                <Alert key='previous-results' variant='info'>
                                    <strong>To view all previous weeks results please check the recap underneath the Standings on the "Results" tab!</strong>
                                </Alert>

                                <Card>
                                    <Card.Body>
                                        <Card.Title>New Questions Available Thursday</Card.Title>
                                        <Card.Subtitle>Weekly questions will be added each Thursday before the next week's episode airs</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                
                            </Col>
                        </Row>
                        
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Row>
                                <Col>
                                    <h3>{this.state.name} Current Score: {this.state.score}</h3>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                Girls
                                            </Card.Title>
                                            <Card.Subtitle>
                                                Drag Your Picks from this List 
                                            </Card.Subtitle>                                
                                            
                                            <Droppable droppableId="girls-list" isDropDisabled={true}>
                                                {(provided) => (
                                                    <ul className="list-group" {...provided.droppableProps} ref={provided.innerRef}>
                                                        {girls.map(({id, name, thumb, isActive}, index) => {
                                                            let imageClass = 'thumbnail img-fluid';
                                                            if(!isActive){
                                                                imageClass = 'img-bw thumbnail img-fluid';
                                                            }
                                                            return (
                                                                <Draggable key={id} draggableId={id} index={index}>
                                                                {(provided) => (
                                                                    <li key={id} className="list-group-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                        <img src={thumb} height="50px" width="50px" className={imageClass} alt="..."></img>
                                                                        <p className="thumb-label">{name}</p>
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
                                                                        
                                
                                <h3>Season Questions</h3>
                                <h4>Answers due by February 1st at 8pm EST</h4>

                                <MultiPickDrag
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    droppableId='final-six'
                                    picks={this.state.picks.finalSix}
                                    title='Final Six (10 points each correct answer)'
                                    subtitle='6 Selections (order does not matter)'
                                    removeSelection={this.removeSelection}
                                    onDragEnd={this.onDragEnd}
                                    />
                                
                                <MultiPickDrag
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    droppableId='final-four'
                                    picks={this.state.picks.finalFour}
                                    title='Final Four (20 points each correct answer)'
                                    subtitle='4 Selections (order does not matter)'
                                    removeSelection={this.removeSelection}
                                    onDragEnd={this.onDragEnd}
                                    />

                                <MultiPickDrag
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    droppableId='final-two'
                                    picks={this.state.picks.finalTwo}
                                    title='Final Two (25 points each correct answer)'
                                    subtitle='2 Selections (order does not matter)'
                                    removeSelection={this.removeSelection}
                                    onDragEnd={this.onDragEnd}
                                    />

                                <SinglePickDrag 
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    droppableId="final-one" 
                                    pick={this.state.picks.finalOne} 
                                    onDragEnd={this.onDragEnd}
                                    removeSelection={this.removeSelection}
                                    title="Final Rose (30 points)"
                                    subtitle="Drag 1 Selection or don't leave a name if you think no one gets the final rose"/>   

                                   
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>More to come</Card.Title>
                                            <Card.Subtitle>Will add more season long question to come that will be locked in before week 3</Card.Subtitle>
                                        </Card.Body>
                                    </Card>       
                                </Col>
                            </Row>
                        
                            <Row>
                                
                                <Col>
                                    <h2>Previous Week's Questions</h2>
                                    <h3>Week 3 Questions</h3>
                                    <h4>Answers submitted on January 18th at 8pm EST</h4>
                                    
                                    <SinglePickDrag
                                        isLocked={this.state.isWeekThreeLockedOut}
                                        droppableId='is-not-on-any-date-week-three'
                                        pick={this.state.picks.isNotOnAnyDateWeekThree}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who does not get a date this week? (10 points)'
                                        subtitle='This may have multiple correct answers, but only choose one contestant.  If your choice is eliminated during the rose ceremony that started at the end of Week Two, you will NOT get any points'/>      


                                    <BooleanPick
                                        isLocked={this.state.isWeekThreeLockedOut}
                                        pick={this.state.picks.isTylerCameronApperanceWeekThree}
                                        title='Tyler Cameron Makes an Appearance? (5 points)'
                                        subtitle='Must be shown on broadcast (excluding previews)'
                                        radiosIds='isTylerCameronApperanceWeekThree'
                                        handleChange={this.handleChange}/>    

                                    <SinglePickDrag
                                        isLocked={this.state.isWeekThreeLockedOut}
                                        droppableId='first-one-on-one-date-week-three'
                                        pick={this.state.picks.firstOneOnOneDateWeekThree}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who gets a one on one date this week? (10 points)'
                                        subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>      

                                    <SinglePickDrag
                                        isLocked={this.state.isWeekThreeLockedOut}
                                        droppableId='first-group-date-rose-week-three'
                                        pick={this.state.picks.firstGroupDateRoseWeekThree}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who gets a Group Date Rose (10 points)'
                                        subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>     

                                    <BooleanPick
                                        isLocked={this.state.isWeekThreeLockedOut}
                                        pick={this.state.picks.isNewContestantIntroducedWeekThree} 
                                        title='Will a New Contestant be Added (5 points)'
                                        subtitle='Must be a contestant that was not previously eliminated and must be eligible for elimination if they do not receive a rose'
                                        radiosIds='isNewContestantIntroducedWeekThree'
                                        handleChange={this.handleChange}/>   

                                    <BooleanPick
                                            isLocked={this.state.isWeekThreeLockedOut}
                                            pick={this.state.picks.isHotTubWeekThree}
                                            title='Will someone get in a Hot Tub with the Bachelor (5 points)'
                                            subtitle='The Bacherlor and one contestent must get in a purpose made hot tub.  Small pools, natural springs, etc. do not count'
                                            radiosIds='isHotTubWeekThree'
                                            handleChange={this.handleChange}/>  

                                    <BooleanPick
                                            isLocked={this.state.isWeekThreeLockedOut}
                                            pick={this.state.picks.isVictoriaMarylynSurviveWeekThree}
                                            title='Will both Victoria and Marylyn recieve rosees that keeps them on the show through week 3 (5 points)'
                                            subtitle='They must survive the rose ceremony that was still in progress at the end of episode 2 and if there is a 2nd rose ceremony in week 3 they must survive that as well'
                                            radiosIds='isVictoriaMarylynSurviveWeekThree'
                                            handleChange={this.handleChange}/>

                                    <h3>Week 2 Questions</h3>
                                    <h4>Answers submitted January 11th at 8pm EST</h4>

                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekTwoLockedOut}
                                        droppableId='first-interruption-week-two'
                                        pick={this.state.picks.firstInterruptionWeekTwo} 
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='First to Interrupt Bachelor and Another Contestant (10 points)'
                                        subtitle='First contestant to interrupt a one-on-one conversation with the Bachelor and another contestant'/>  

                                    <BooleanPick
                                        isLocked={this.state.isWeekTwoLockedOut}
                                        pick={this.state.picks.isNewContestantIntroducedWeekTwo} 
                                        title='Will a New Contestant be Added (5 points)'
                                        subtitle='Must be a contestant that was not previously eliminated and must be eligible for elimination if they do not receive a rose'
                                        radiosIds='isNewContestantIntroducedWeekTwo'
                                        handleChange={this.handleChange}/> 

                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekTwoLockedOut}
                                        droppableId='first-group-date-rose-week-two'
                                        pick={this.state.picks.firstGroupDateRoseWeekTwo} 
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='First Group Date Rose (10 points)'
                                        subtitle='Who receieves the rose on the first group date'/>   

                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekTwoLockedOut}
                                        droppableId='requires-medical-attention-week-two'
                                        pick={this.state.picks.requiresMedicalAttentionWeekTwo} 
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='First to Require Medical Attention on Group Date (10 points)'
                                        subtitle='Must cause contestant to stop current activity and cause intervention from first-aid or producers.  If this does not happen no points will be awarded'/>   

                                    <BooleanPick 
                                        isLocked={this.state.isWeekTwoLockedOut}
                                        pick={this.state.picks.isLiveMusicPlayedWeekTwo} 
                                        title='Will Live Music be Played on a Date (10 points)'
                                        subtitle='Must be played while on any type of date'
                                        radiosIds='isLiveMusicPlayedWeekTwo'
                                        handleChange={this.handleChange}/>   

                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekTwoLockedOut}
                                        droppableId='first-one-on-one-date'
                                        pick={this.state.picks.firstOneOnOneDate} 
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='First One on One Date (10 points)'
                                        subtitle='Recipient of the 1st One on One date card'/>   

                                    <BooleanPick
                                            isLocked={this.state.isWeekTwoLockedOut}
                                            pick={this.state.picks.isHotTubWeekTwo}
                                            title='Will someone get in a Hot Tub with the Bachelor (5 points)'
                                            subtitle='The Bacherlor and one contestent must get in a purpose made hot tub.  Small pools, natural springs, do not count'
                                            radiosIds='isHotTubWeekTwoRadios'
                                            handleChange={this.handleChange}/>    

                                    <BooleanPick
                                            isLocked={this.state.isWeekTwoLockedOut}
                                            pick={this.state.picks.isTylerCameronApperanceWeek2}
                                            title='Tyler Cameron Makes an Appearance? (5 points)'
                                            subtitle='Must be shown on broadcast (excluding previews)'
                                            radiosIds='isTylerCameronApperanceWeek2Radios'
                                            handleChange={this.handleChange}/>    


                                    <h3>Week 1 Questions</h3>
                                    <h4>Answers submitted January 4th at 8pm EST</h4>
                                    
                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekOneLockedOut}
                                        droppableId="first-impression" 
                                        pick={this.state.picks.firstImpressionRose} 
                                        title="First Impression Rose (10 points)"
                                        subtitle="Drag and Drop your pick here"
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}/>

                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekOneLockedOut}
                                        droppableId="first-out-of-limo" 
                                        pick={this.state.picks.firstOutOfLimo} 
                                        title="First Out of Limo (10 points)"
                                        subtitle="Drag and Drop your pick here"
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}/>
                                    
                                    <BooleanPick
                                        isLocked={this.state.isWeekOneLockedOut}
                                        pick={this.state.picks.isTylerCameronApperance}
                                        title='Tyler Cameron Makes an Appearance? (5 points)'
                                        subtitle='Must be shown on broadcast (excluding previews)'
                                        radiosIds='tylerCameronRadios'
                                        handleChange={this.handleChange}/>
                                
                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekOneLockedOut}
                                        droppableId="first-kiss" 
                                        pick={this.state.picks.firstKiss} 
                                        title="First Kiss (10 points)"
                                        subtitle="Drag and Drop your pick here"
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}/>

                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekOneLockedOut}
                                        droppableId="first-tears" 
                                        pick={this.state.picks.firstTears} 
                                        title="First to Cry (10 points)"
                                        subtitle="Tears, tear streaks, or running makeup must be visible on camera"
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}/>

                                    <SinglePickDrag 
                                        isLocked={this.state.isWeekOneLockedOut}
                                        droppableId='first-wearing-costume' 
                                        pick={this.state.picks.firstWearingCostume} 
                                        title="First to Wear a Costume (10 points)"
                                        subtitle="Includes any unusual attire that is not a formal dress.  
                                            Must be wearing it when they exit the limo and/or are introduced to the Bachelor"
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}/>   
                                </Col>
                            </Row>

                        </DragDropContext>
                    </Container>
                    
                </div>
            );
        }else{
            return(<div></div>);
        }
    }
}

export default BatchelorGame;
