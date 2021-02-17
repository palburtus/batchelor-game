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
import cheering from '../assets/cheering.gif';
import under from '../assets/under.jpg';
import bachelorbracketbusted from '../assets/bachelorbracketbusted.png';
import chrisharrison from '../assets/chrisharrison.gif';

class BatchelorGame extends React.Component {
    
    constructor(props){
        super(props);
        
        let picks = constants.defaultPicks();

        this.state = ({
            picks: picks,
            isWeekOneLockedOut: true,
            isWeekTwoLockedOut: true,
            isWeekThreeLockedOut: true,
            isWeekFourLockedOut: true,
            isWeekFiveLockedOut: true,
            isWeekSixLockedOut: true,
            isWeekSevenLockedOut: true,
            isWeekEightLockedOut: false,
            isSeasonLongLockedOut: true,
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
        
        //WEEK 8 
        if(!this.state.isWeekEightLockedOut){
            
        }

        //WEEK 7
        if(!this.state.isWeekSevenLockedOut){
            if(listId === 'one-on-one-date-week-seven'){
                picks.oneOnOneDateWeekSeven = -1;
            }

            if(listId === 'group-date-rose-week-seven'){
                picks.groupDateRoseWeekSeven = -1;
            }

            if(listId === 'eliminated-week-seven'){
                picks.eliminatedWeekSeven = -1;
            }

            if(listId === 'sent-home-early-week-seven'){
                picks.sentHomeEarlyWeekSeven = -1;
            }
        }

        //WEEK 6
        if(!this.state.isWeekSixLockedOut){
            
            if(listId === 'group-date-rose-week-six'){
                picks.groupDateRoseWeekSix = -1;
            }

            if(listId === 'one-on-one-date-week-six'){
                picks.oneOnOneDateWeekSix = -1;
            }
        }

        //WEEK 5
        if(!this.state.isWeekFiveLockedOut){
            
            if(listId === 'one-on-one-date-week-five'){
                picks.oneOnOneDateWeekFive = -1;
            }

            if(listId === 'group-date-rose-week-five'){
                picks.groupDateRoseWeekFive = -1;
            }

            if(listId === 'sent-home-early-week-five'){
                picks.sentHomeEarlyWeekFive = -1
            }
        }

        //WEEk 4 
        if(!this.state.isWeekFourLockedOut){
            
            if(listId === 'one-on-one-date-week-four'){
                picks.oneOnOneDateWeekFour = -1;
            }

            if(listId === 'group-date-rose-week-four'){
                picks.groupDateRoseWeekFour = -1
            }

            if(listId === 'eliminated-week-four'){
                picks.eliminatedWeekFour = -1;
            }
        }

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

            if(listId === 'bachelorette'){
                picks.bachelorette = -1;
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
            picks.finalOne = this.handleSingleDragAdd(picks.finalOne, this.state.picks.finalOne, 'final-one', result);
            picks.bachelorette = this.handleSingleDragAdd(picks.bachelorette, this.state.picks.bachelorette, 'bachelorette', result);
        }

        //WEEK 8 
        if(!this.state.isWeekEightLockedOut){
            
        }

        //WEEK 7
        if(!this.state.isWeekSevenLockedOut){
            picks.oneOnOneDateWeekSeven = this.handleSingleDragAdd(picks.oneOnOneDateWeekSeven, this.state.picks.oneOnOneDateWeekSeven, 'one-on-one-date-week-seven', result);
            picks.groupDateRoseWeekSeven = this.handleSingleDragAdd(picks.groupDateRoseWeekSeven, this.state.picks.groupDateRoseWeekSeven, 'group-date-rose-week-seven', result);
            picks.eliminatedWeekSeven = this.handleSingleDragAdd(picks.eliminatedWeekSeven, this.state.picks.eliminatedWeekSeven, 'eliminated-week-seven', result);
            picks.sentHomeEarlyWeekSeven = this.handleSingleDragAdd(picks.sentHomeEarlyWeekSeven, this.state.picks.sentHomeEarlyWeekSeven, 'sent-home-early-week-seven', result);
        }
        
        //WEEK 6
        if(!this.state.isWeekSixLockedOut){
            picks.groupDateRoseWeekSix = this.handleSingleDragAdd(picks.groupDateRoseWeekSix, this.state.picks.groupDateRoseWeekSix, 'group-date-rose-week-six', result);
            picks.oneOnOneDateWeekSix = this.handleSingleDragAdd(picks.oneOnOneDateWeekSix, this.state.picks.oneOnOneDateWeekSix, 'one-on-one-date-week-six', result);
        }

        //WEEK 5
        if(!this.state.isWeekFiveLockedOut){
            picks.oneOnOneDateWeekFive = this.handleSingleDragAdd(picks.oneOnOneDateWeekFive, this.state.picks.oneOnOneDateWeekFive, 'one-on-one-date-week-five', result);
            picks.groupDateRoseWeekFive = this.handleSingleDragAdd(picks.groupDateRoseWeekFive,this.state.picks.groupDateRoseWeekFive, 'group-date-rose-week-five', result);
            picks.sentHomeEarlyWeekFive = this.handleSingleDragAdd(picks.sentHomeEarlyWeekFive, this.state.sentHomeEarlyWeekFive, 'sent-home-early-week-five', result);
        }

        //WEEK 4
        if(!this.state.isWeekFourLockedOut){
            picks.oneOnOneDateWeekFour = this.handleSingleDragAdd(picks.oneOnOneDateWeekFour, this.state.picks.oneOnOneDateWeekFour, 'one-on-one-date-week-four', result);
            picks.groupDateRoseWeekFour = this.handleSingleDragAdd(picks.groupDateRoseWeekFour, this.state.picks.groupDateRoseWeekFour, 'group-date-rose-week-four', result);
            picks.eliminatedWeekFour = this.handleSingleDragAdd(picks.eliminatedWeekFour, this.state.picks.eliminatedWeekFour, 'eliminated-week-four', result);
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

        //WEEK 8 
        if(!this.state.isWeekEightLockedOut){
                    
        }

        //WEEK 7
        if(!this.state.isWeekSevenLockedOut){
            picks.isHotTubWeekSeven = this.handleBooleanEventChange(evt, 'isHotTubWeekSeven', picks.isHotTubWeekSeven);    
            picks.isTwoOrLessWeekSeven = this.handleBooleanEventChange(evt, 'isTwoOrLessWeekSeven', picks.isTwoOrLessWeekSeven);
            picks.isHeatherMadeContestantWeekSeven = this.handleBooleanEventChange(evt, 'isHeatherMadeContestantWeekSeven', picks.isHeatherMadeContestantWeekSeven);
        }

        //WEEK 6
        if(!this.state.isWeekSixLockedOut){
            picks.isHotTubWeekSix = this.handleBooleanEventChange(evt, 'isHotTubWeekSix', picks.isHotTubWeekSix);
            picks.isJesseniaSentHomeWeekSix = this.handleBooleanEventChange(evt, 'isJesseniaSentHomeWeekSix', picks.isJesseniaSentHomeWeekSix);
            picks.isMJSentHomeWeekSix = this.handleBooleanEventChange(evt, 'isMJSentHomeWeekSix', picks.isMJSentHomeWeekSix);
            picks.isHeathMartinMadeContestant = this.handleBooleanEventChange(evt, 'isHeathMartinMadeContestant', picks.isHeathMartinMadeContestant);
            picks.isTylerCameronOnDateWeekSix = this.handleBooleanEventChange(evt, 'isTylerCameronOnDateWeekSix', picks.isTylerCameronOnDateWeekSix);
        }

        //WEEK 5
        if(!this.state.isWeekFiveLockedOut){
            picks.isTylerCameronApperanceWeekFive = this.handleBooleanEventChange(evt, 'isTylerCameronApperanceWeekFive', picks.isTylerCameronApperanceWeekFive);
            picks.isHotTubWeekFive = this.handleBooleanEventChange(evt, 'isHotTubWeekFive', picks.isHotTubWeekFive);
            picks.isRoseGivenOutFirstGroupDateWeekFive = this.handleBooleanEventChange(evt, 'isRoseGivenOutFirstGroupDateWeekFive', picks.isRoseGivenOutFirstGroupDateWeekFive);
            picks.leavesOnOwnWeekFive = this.handleBooleanEventChange(evt, 'leavesOnOwnWeekFive', picks.leavesOnOwnWeekFive);
        }

        //WEEK 4
        if(!this.state.isWeekFourLockedOut){
            picks.isTylerCameronApperanceWeekFour = this.handleBooleanEventChange(evt, 'isTylerCameronApperanceWeekFour', picks.isTylerCameronApperanceWeekFour);
            picks.isHotTubWeekFour = this.handleBooleanEventChange(evt, 'isHotTubWeekFour', picks.isHotTubWeekFour);
            picks.isNewContestantsBeforeRoseCeremony = this.handleBooleanEventChange(evt, 'isNewContestantsBeforeRoseCeremony', picks.isNewContestantsBeforeRoseCeremony);
            picks.isMattToldAboutEscort = this.handleBooleanEventChange(evt, 'isMattToldAboutEscort', picks.isMattToldAboutEscort);
            picks.isSarahReturnWeekFour = this.handleBooleanEventChange(evt, 'isSarahReturnWeekFour', picks.isSarahReturnWeekFour);
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

        //WEEK 1
        if(!this.state.isWeekOneLockedOut){                        
            picks.isTylerCameronApperance = this.handleBooleanEventChange(evt, 'tylerCameronRadios', picks.isTylerCameronApperance);
        }

        //SEASON
        if(!this.state.isSeasonLongLockedOut){
            picks.isMattAndFinalRoseACouple = this.handleBooleanEventChange(evt, 'isMattAndFinalRoseACouple', picks.isMattAndFinalRoseACouple);
            picks.isSentHomeOnAOneOnOneDate = this.handleBooleanEventChange(evt, 'isSentHomeOnAOneOnOneDate', picks.isSentHomeOnAOneOnOneDate);
            picks.isLeaveOnOwn = this.handleBooleanEventChange(evt, 'isLeaveOnOwn', picks.isLeaveOnOwn);
            picks.isMultipleInLove = this.handleBooleanEventChange(evt, 'isMultipleInLove', picks.isMultipleInLove);
        }
        

        this.setState({ picks: picks });

        this.savePicks(picks);
    }

    render(){

        let finalSixCorrect = constants.perfectPicks.finalSix;
        let finalFourCorrect = constants.perfectPicks.finalFour;

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
                                    <h4>Season Long Answers</h4>
                                    <p><strong>Does someone leave on their own:</strong> Yes</p>
                                    <ul>
                                        <li>
                                            Kit - This week saw the departure of Kit who didn't get her way and bailed at the first sign of trouble (Let's hope she lands on her feet somewhere)
                                        </li>                                      
                                        <li>
                                            Chris Harrison (Yet another American Treasure brought low by not knowing when to shut the fuck up)
                                        </li>
                                    </ul>

                                    <img src={chrisharrison} className="answers-gif" width="250" height="200" alt="chris harrison"/>

                                    <p><strong>Top Six: </strong></p>
                                    <ul>
                                        <li>Bri</li>
                                        <li>Jessenia</li>
                                        <li>Pieper</li>
                                        <li>Rachael</li>
                                        <li>Serena P</li>
                                        <li>Michelle</li>
                                    </ul>

                                    <p>
                                        Not supprisingly this week saw the <strong>biggest shake up</strong> in the standings so far this season with
                                        Kristen K, Kim K and William C making big moves with the best top 6 results.  
                                        Two sisters and a boyfriend leaving a prohibitive favorite out of their top 6 was a 
                                        bold play that paid off. <span className="badge bg-info white">#suspicious</span> 
                                    </p>

                                    <p>As for the rest of us...</p>

                                    <img src={bachelorbracketbusted} className="answers-gif" width="250" height="200" alt="bracket busted"/>                                    

                                    <p><strong>Top Four: </strong></p>
                                    <ul>
                                        <li>Bri</li>
                                        <li>Rachael</li>
                                        <li>Serena P</li>
                                        <li>Michelle</li>
                                    </ul>

                                    <p>Every bracket had at least half of the Final Four correct by virtue of including Rachael and Michelle.</p>
                                    <p>Willaim C and Kim K are looking to make a strong finish with perfect final fours.</p>
                                    <p>The most popular bracket buster was of course Abigail, followed by Pieper</p>

                                    <h4>Week 7 Answers</h4>

                                    <p><strong>Does Heather get a rose:</strong> No</p>
                                    <ul>
                                        <li>A Hi and Goodbye for Heather, lets see how the rest of the girls took the news... </li>
                                    </ul>
                                    <img src={cheering} className="answers-gif" width="250" height="200" alt="cheering"/>

                                    <p><strong>Who does Matt Send Home Early:</strong></p>
                                    <ul>
                                        <li>Abigail</li>
                                        <li>Jessenia</li>
                                    </ul>
                                    
                                    <p><strong>How many girls does Matt send home: </strong> Three or More</p>
                                    <img src={under} className="answers-gif" width="200" height="250" alt="under"/>
                                    <p><strong>Who gets a one on one date this week</strong></p>
                                    <ul>
                                        <li>Serena P.</li>
                                        <li>Jessenia</li>
                                    </ul>
                                    <p><strong>Who gets a Group Date Rose</strong></p>
                                    <ul>
                                        <li>Rachael</li>
                                    </ul>

                                    <p><strong>Hot Tub: </strong> No</p>
                                    <p><strong>Who gets sent home during a Rose Ceremony:</strong></p>
                                    <ul>
                                        <li>Chelsea (The one everyone was secretly rooting for)</li>
                                        <li>Serena C. (The one everone was openly rooting against)</li>
                                    </ul>

                                </div>
                                                                
                                <Alert key='previous-results' variant='info'>
                                    <strong>To view all previous weeks results please check the recap underneath the Standings on the "Results" tab!</strong>
                                </Alert>                                

                                <Card>
                                    <Card.Body>
                                        <Card.Title>New Questions Available Friday</Card.Title>
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
                                <h4>Answers due by February 8th at 8pm EST</h4>
                                
                                <p className="foot-note"><strong>*</strong>Any questions that mention "After the Final Rose" will still apply to any substitue recap they air in the case that
                                there is no "After the Final Rose" this season for COVID related reasons.</p>
                                                                
                                <BooleanPick
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    pick={this.state.picks.isLeaveOnOwn}
                                    title='Does Anyone Else Leave on their Own? (10 points)'
                                    subtitle='Includes anyone who leaves the show voluntarily'
                                    radiosIds='isLeaveOnOwn'
                                    handleChange={this.handleChange}/>

                                <BooleanPick
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    pick={this.state.picks.isSentHomeOnAOneOnOneDate}
                                    title='Is anyone sent home during a one on one date? (10 points)'
                                    subtitle='Must occur during a one on one date'
                                    radiosIds='isSentHomeOnAOneOnOneDate'
                                    handleChange={this.handleChange}/>

                                <BooleanPick
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    pick={this.state.picks.isMattAndFinalRoseACouple}
                                    title='Are Matt and The Recipient of the Final Rose still a couple at the end of the season? (10 points)'
                                    subtitle='Must be together at "After the Final Rose*"'
                                    radiosIds='isMattAndFinalRoseACouple'
                                    handleChange={this.handleChange}/>

                                <BooleanPick
                                    isLocked={this.state.isWeekSixLockedOut}
                                    pick={this.state.picks.isMultipleInLove}
                                    title='Does Matt tell more than one girl he is "In Love" with them (10 points)'
                                    subtitle='Must clearly tell more than contestant he is "In love" with them, "falling in love" and other similar phrases do not count'
                                    radiosIds='isMultipleInLove'
                                    handleChange={this.handleChange}/>


                                <SinglePickDrag
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    droppableId='bachelorette'
                                    pick={this.state.picks.bachelorette}
                                    onDragEnd={this.onDragEnd}
                                    removeSelection={this.removeSelection}
                                    title='Who gets Picked to be the Bachelorette? (20 points)'
                                    subtitle='No points for not answering.  Must be anounced on the broadcast any time before the season ends including at After The Final Rose*'/>     

                                <MultiPickDrag
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    droppableId='final-six'
                                    picks={this.state.picks.finalSix}
                                    correctPicks={finalSixCorrect}
                                    title='Final Six (10 points each correct answer)'
                                    subtitle='6 Selections (order does not matter)'
                                    removeSelection={this.removeSelection}
                                    onDragEnd={this.onDragEnd}
                                    />
                                
                                <MultiPickDrag
                                    isLocked={this.state.isSeasonLongLockedOut}
                                    droppableId='final-four'
                                    picks={this.state.picks.finalFour}
                                    correctPicks={finalFourCorrect}
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

                                         
                                </Col>
                            </Row>
                        
                            <Row>
                                
                                <Col>
                                    <h2>Previous Week's Questions</h2>
                                                            
                                    <h3>Week 7 Questions</h3>
                                    <h4>Answers submitted on February 15th at 8pm EST</h4>
                                    
                                    <BooleanPick
                                            isLocked={this.state.isWeekSevenLockedOut}
                                            pick={this.state.picks.isHeatherMadeContestantWeekSeven}
                                            title='Does Heather get a rose in the first rose ceremony? (5 points)'
                                            subtitle='This will be scored as "No" if she does not participate in the rose ceremoney'
                                            radiosIds='isHeatherMadeContestantWeekSeven'
                                            handleChange={this.handleChange}/>

                                    <SinglePickDrag
                                                isLocked={this.state.isWeekSevenLockedOut}
                                                droppableId='sent-home-early-week-seven'
                                                pick={this.state.picks.sentHomeEarlyWeekSeven}
                                                onDragEnd={this.onDragEnd}
                                                removeSelection={this.removeSelection}
                                                title='Who does Matt Send Home Early? (10 points)'
                                                subtitle='You CAN NOT choose Heather for this question and will receive no points if you do.  Must be sent home anytime outside of a rose ceremony. If this does not happen no points will be awarded'/>     


                                    <BooleanPick
                                            isLocked={this.state.isWeekSevenLockedOut}
                                            pick={this.state.picks.isTwoOrLessWeekSeven}
                                            title='How many girls does Matt send home? (5 points)'
                                            subtitle='Must be sent home by Matt, Heather must be made a contestant in order to count towards this total'
                                            radiosIds='isTwoOrLessWeekSeven'
                                            yesValue='Two or Less'
                                            noValue="Three or More"
                                            handleChange={this.handleChange}/>    

                                    <SinglePickDrag
                                                isLocked={this.state.isWeekSevenLockedOut}
                                                droppableId='one-on-one-date-week-seven'
                                                pick={this.state.picks.oneOnOneDateWeekSeven}
                                                onDragEnd={this.onDragEnd}
                                                removeSelection={this.removeSelection}
                                                title='Who gets a one on one date this week? (10 points)'
                                                subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>      


                                    <SinglePickDrag
                                        isLocked={this.state.isWeekSevenLockedOut}
                                        droppableId='group-date-rose-week-seven'
                                        pick={this.state.picks.groupDateRoseWeekSeven}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who gets a Group Date Rose? (10 points)'
                                        subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>     


                                    <BooleanPick
                                            isLocked={this.state.isWeekSevenLockedOut}
                                            pick={this.state.picks.isHotTubWeekSeven}
                                            title='Will someone get in a Hot Tub with the Bachelor? (5 points)'
                                            subtitle='The Bacherlor and one contestent must get in a purpose made hot tub.  Small pools, natural springs, etc. do not count'
                                            radiosIds='isHotTubWeekSeven'
                                            handleChange={this.handleChange}/>    

                                    <SinglePickDrag
                                            isLocked={this.state.isWeekSevenLockedOut}
                                            droppableId='eliminated-week-seven'
                                            pick={this.state.picks.eliminatedWeekSeven}
                                            onDragEnd={this.onDragEnd}
                                            removeSelection={this.removeSelection}
                                            title='Who gets sent home during a Rose Ceremony (10 points)'
                                            subtitle='Contestant must be at the rose ceremony and not receive a rose.  Being sent home or leaving in any other way does not count'/>     


                                        <h3>Week 6 Questions</h3>
                                        <h4>Answers submitted on February 8th at 8pm EST</h4>
                                        
                                        <BooleanPick
                                                isLocked={this.state.isWeekSixLockedOut}
                                                pick={this.state.picks.isTylerCameronOnDateWeekSix}
                                                title='Does Tyler Cameron appear on a date? (5 points)'
                                                subtitle='Must interact with or be seen by at least one contestant on a date'
                                                radiosIds='isTylerCameronOnDateWeekSix'
                                                handleChange={this.handleChange}/> 

                                        <BooleanPick
                                                isLocked={this.state.isWeekSixLockedOut}
                                                pick={this.state.picks.isHeathMartinMadeContestant}
                                                title='Does Heather Martin become a contestant? (5 points)'
                                                subtitle='Must become eligible for a date and/or participate in a rose ceremony during this episode'
                                                radiosIds='isHeathMartinMadeContestant'
                                                handleChange={this.handleChange}/> 

                                        <BooleanPick
                                                isLocked={this.state.isWeekSixLockedOut}
                                                pick={this.state.picks.isMJSentHomeWeekSix}
                                                title='Does MJ get sent home before or during the 1st Rose Ceremony? (5 points)'
                                                subtitle='Can either be sent home by Matt prior to, or eliminated during the 1st Rose Ceremony'
                                                radiosIds='isMJSentHomeWeekSix'
                                                handleChange={this.handleChange}/>    

                                        <BooleanPick
                                                isLocked={this.state.isWeekSixLockedOut}
                                                pick={this.state.picks.isJesseniaSentHomeWeekSix}
                                                title='Does Jessenia get sent home before or during the 1st Rose Ceremony? (5 points)'
                                                subtitle='Can either be sent home by Matt prior to, or eliminated during the 1st Rose Ceremony'
                                                radiosIds='isJesseniaSentHomeWeekSix'
                                                handleChange={this.handleChange}/>    


                                        <SinglePickDrag
                                                    isLocked={this.state.isWeekSixLockedOut}
                                                    droppableId='one-on-one-date-week-six'
                                                    pick={this.state.picks.oneOnOneDateWeekSix}
                                                    onDragEnd={this.onDragEnd}
                                                    removeSelection={this.removeSelection}
                                                    title='Who gets a one on one date this week? (10 points)'
                                                    subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>      

                                        <SinglePickDrag
                                                isLocked={this.state.isWeekSixLockedOut}
                                                droppableId='group-date-rose-week-six'
                                                pick={this.state.picks.groupDateRoseWeekSix}
                                                onDragEnd={this.onDragEnd}
                                                removeSelection={this.removeSelection}
                                                title='Who gets a Group Date Rose? (10 points)'
                                                subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>     

                                        <BooleanPick
                                                isLocked={this.state.isWeekSixLockedOut}
                                                pick={this.state.picks.isHotTubWeekSix}
                                                title='Will someone get in a Hot Tub with the Bachelor? (5 points)'
                                                subtitle='The Bacherlor and one contestent must get in a purpose made hot tub.  Small pools, natural springs, etc. do not count'
                                                radiosIds='isHotTubWeekSix'
                                                handleChange={this.handleChange}/>    


                                    <h3>Week 5 Questions</h3>
                                    <h4>Ansers submitted on February 1st at 8pm EST</h4>
                                    
                                    <BooleanPick
                                            isLocked={this.state.isWeekFiveLockedOut}
                                            pick={this.state.picks.isRoseGivenOutFirstGroupDateWeekFive}
                                            title='Is a Rose Given Out on the Group Date Thats in Progress (5 points)'
                                            subtitle='This is the group date that was still occuring when the last episdoe ended'
                                            radiosIds='isRoseGivenOutFirstGroupDateWeekFive'
                                            handleChange={this.handleChange}/>

                                    <BooleanPick
                                            isLocked={this.state.isWeekFiveLockedOut}
                                            pick={this.state.picks.leavesOnOwnWeekFive}
                                            title='Does Somebody Leave on Their Own?'
                                            subtitle='Includes anyone who leaves the show voluntarily'
                                            radiosIds='leavesOnOwnWeekFive'
                                            handleChange={this.handleChange}/>  


                                    <BooleanPick
                                            isLocked={this.state.isWeekFiveLockedOut}
                                            pick={this.state.picks.isTylerCameronApperanceWeekFive}
                                            title='Tyler Cameron Makes an Appearance? (5 points)'
                                            subtitle='Must be shown on broadcast (excluding previews)'
                                            radiosIds='isTylerCameronApperanceWeekFive'
                                            handleChange={this.handleChange}/>  

                                    <SinglePickDrag
                                            isLocked={this.state.isWeekFiveLockedOut}
                                            droppableId='sent-home-early-week-five'
                                            pick={this.state.picks.sentHomeEarlyWeekFive}
                                            onDragEnd={this.onDragEnd}
                                            removeSelection={this.removeSelection}
                                            title='Who does Matt Send Home Early? (10 points)'
                                            subtitle='Must be sent home anytime outside of a rose ceremony. If this does not happen no points will be awarded'/>     


                                    <SinglePickDrag
                                            isLocked={this.state.isWeekFiveLockedOut}
                                            droppableId='one-on-one-date-week-five'
                                            pick={this.state.picks.oneOnOneDateWeekFive}
                                            onDragEnd={this.onDragEnd}
                                            removeSelection={this.removeSelection}
                                            title='Who gets a one on one date this week? (10 points)'
                                            subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>      

                                    <SinglePickDrag
                                            isLocked={this.state.isWeekFiveLockedOut}
                                            droppableId='group-date-rose-week-five'
                                            pick={this.state.picks.groupDateRoseWeekFive}
                                            onDragEnd={this.onDragEnd}
                                            removeSelection={this.removeSelection}
                                            title='Who gets a Group Date Rose? (10 points)'
                                            subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>     

                                    <BooleanPick
                                            isLocked={this.state.isWeekFiveLockedOut}
                                            pick={this.state.picks.isHotTubWeekFive}
                                            title='Will someone get in a Hot Tub with the Bachelor? (5 points)'
                                            subtitle='The Bacherlor and one contestent must get in a purpose made hot tub.  Small pools, natural springs, etc. do not count'
                                            radiosIds='isHotTubWeekFive'
                                            handleChange={this.handleChange}/>   


                                    <h3>Week 4 Questions</h3>
                                    <h4>Ansers submitted on January 25th at 8pm EST</h4>
                                    <BooleanPick
                                        isLocked={this.state.isWeekFourLockedOut}
                                        pick={this.state.picks.isTylerCameronApperanceWeekFour}
                                        title='Tyler Cameron Makes an Appearance? (5 points)'
                                        subtitle='Must be shown on broadcast (excluding previews)'
                                        radiosIds='isTylerCameronApperanceWeekFour'
                                        handleChange={this.handleChange}/>    

                                    <SinglePickDrag
                                        isLocked={this.state.isWeekFourLockedOut}
                                        droppableId='one-on-one-date-week-four'
                                        pick={this.state.picks.oneOnOneDateWeekFour}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who gets a one on one date this week? (10 points)'
                                        subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>      

                                    <SinglePickDrag
                                        isLocked={this.state.isWeekFourLockedOut}
                                        droppableId='one-on-one-date-week-four'
                                        pick={this.state.picks.oneOnOneDateWeekFour}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who gets a one on one date this week? (10 points)'
                                        subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>      

                                    <SinglePickDrag
                                        isLocked={this.state.isWeekFourLockedOut}
                                        droppableId='group-date-rose-week-four'
                                        pick={this.state.picks.groupDateRoseWeekFour}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who gets a Group Date Rose? (10 points)'
                                        subtitle='This may have multiple correct answers, but only choose one contestant.  Order does not matter you will receive points either way'/>     

                                    <BooleanPick
                                        isLocked={this.state.isWeekFourLockedOut}
                                        pick={this.state.picks.isHotTubWeekFour}
                                        title='Will someone get in a Hot Tub with the Bachelor? (5 points)'
                                        subtitle='The Bacherlor and one contestent must get in a purpose made hot tub.  Small pools, natural springs, etc. do not count'
                                        radiosIds='isHotTubWeekFour'
                                        handleChange={this.handleChange}/>             

                                    <SinglePickDrag
                                        isLocked={this.state.isWeekFourLockedOut}
                                        droppableId='eliminated-week-four'
                                        pick={this.state.picks.eliminatedWeekFour}
                                        onDragEnd={this.onDragEnd}
                                        removeSelection={this.removeSelection}
                                        title='Who gets sent home at the next Rose Ceremony (10 points)'
                                        subtitle='Contestant must be at the rose ceremony and not receive a rose.  Only the first rose ceremony that airs counts'/>     

                                    <BooleanPick
                                        isLocked={this.state.isWeekFourLockedOut}
                                        pick={this.state.picks.isMattToldAboutEscort}
                                        title='Does a contestant tell Matt that she has heard a contestant is/was an escort? (5 points)'
                                        subtitle='Matt must receive this information from a Contestant directly, if the alleged escort tells him herself that also counts'
                                        radiosIds='isMattToldAboutEscort'
                                        handleChange={this.handleChange}/>

                                    <BooleanPick
                                        isLocked={this.state.isWeekFourLockedOut}
                                        pick={this.state.picks.isSarahReturnWeekFour}
                                        title='Will Sarah come back this week? (5 points)'
                                        subtitle='Sarah must be shown on the broadcast (excluding flashbacks, previews, etc.)'
                                        radiosIds='isSarahReturnWeekFour'
                                        handleChange={this.handleChange}/>

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

                                    <BooleanPick
                                        isLocked={this.state.isWeekFourLockedOut}
                                        pick={this.state.picks.isNewContestantsBeforeRoseCeremony}
                                        title='Does at least one new contestant arrive before the next rose ceremony? (5 points)'
                                        subtitle='Contestant(s) must arrive and be eligible to be part of the first rose ceremony that airs this week'
                                        radiosIds='isNewContestantsBeforeRoseCeremony'
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
