import React from 'react';
import { Container, Col, Row, Card, Table, Alert} from 'react-bootstrap';
import * as picksRepository from '../firebaseFirestoreRepository';
import * as gameService from '../gameService';
import interrupt from '../assets/interrupt.gif';
import cheerocracy from '../assets/cheerocracy.gif';

class Results extends React.Component {

    constructor(props){
        super(props);

        let standings = null;

        this.state = ({
            standings: standings,
            infoMessage: '',
            warningMessage: '',
            errorMessage: '',
            isError: false,
            isLoading: true
        });

    }

    async componentDidMount(){


        picksRepository.getAllPicks()
            .then((response) => {
             
                this.setState({
                    standings: response,
                    isLoading: false
                });

            }).catch((error) => {
              
                this.setState({ 
              
                    isLoading: false,
                    errorMessage: error
                });     
            });     

        
    }

    render(){

        if(!this.state.standings){
            return(
                <div id="standings">
    
                </div>
            );
        }else if(this.state.isLoading){
            return(<div><p>Loading...</p></div>);
        }else {

            let orderedDescStandings = this.state.standings;
           
            for(let i = 0; i < orderedDescStandings.length; i++){
                orderedDescStandings[i].score = gameService.getScore(orderedDescStandings[i].picks);
            }
           
            orderedDescStandings.sort((a,b) => (a.score < b.score) ? 1 : -1);
           
            let displayStandings = orderedDescStandings.map((obj) => {
                let score = gameService.getScore(obj.picks);
                return (<tr key={obj.name}><td>{obj.name}</td><td>{score}</td></tr>);
            });

            return(
                <div id="standings">
                    <Row>
                        <Col md="auto">
                            <h3>Standings</h3>  
                                               
                            <Card>
                                <Card.Body>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayStandings}
                                        </tbody>                                
                                    </Table>                                    
                                </Card.Body> 
                            </Card>
                        
                        </Col>
                        
                        <Col>
                        
                            <div className="answers">
                                <h3>Question Results</h3>    

                                <h4>Week 2 Answers</h4>
                                    <p><strong>First to Interrupt:</strong> No One (more info below)</p>
                                    <ul>
                                        <li>While Victoria did briefly cause an interruption during the wedding dress contest it did not meet the criteria for this question, the spirit of which involves a contestant interrupting the bachelor and someone else's conversation during a date, cocktail hour, etc</li>
                                        <li>For the sake of transparency I feel it is worth mentioning that I had Victoria for this answer</li>
                                    </ul>
                                    
                                    <img src={interrupt} className="answers-gif" width="300" alt="interrupt"/>

                                    <p><strong>Will a new contestant be added:</strong> No</p>
                                    <p><strong>Will live music be played:</strong> No</p>
                                    <p><strong>Hotub with the batchelor: </strong> Yes</p>
                                    <p><strong>Will Tyler Cameron make an appearance:</strong> No</p>
                                    <p><strong>First Group Date Rose: </strong> Lauren</p>
                                    <p><strong>First to Require Medical Attention <del>on a group date</del>: </strong> Sarah (more info below)</p>
                                    <ul>
                                        <li>While the question clearly stated that medical attention had to be required on a group date that did not happen so I decided to expand the scope of the question to the entire episode</li>
                                        <li>Lesson Learned... Since we will have questions that by their very nature might not have a correct answer I will try to broaden questions like these in the future</li>
                                        <li>Most Importantly, I believe this is a fair change especially since your's truely did not benefit from this outcome</li>
                                        <li>Even more importantly I reserve the right to make these types of changes in the future when the I believe the spirit of the question is more important than following the letter of the law</li>
                                    </ul>
                                    
                                    <img src={cheerocracy} className="answers-gif" width="300" height="200" alt="cheerocracy"/>
                                    
                                    <Alert key='previous-results' variant='info'>
                                    <strong>To view all previous weeks results please check the recap underneath the Standings on the "Results" tab!</strong>
                                    </Alert>
                                    
                                    <Card></Card>
                                
                                <h4>Week 1 Answers</h4>
                                <p><strong>First Impression Rose:</strong> Abigail</p>
                                <p><strong>First Out of Limo:</strong> Bri</p>
                                <p><strong>Tyler Cameron Appearance:</strong> No</p>
                                <p><strong>First Kiss:</strong> Alana</p>
                                <p><strong>First Costume:</strong> Casandra (more info below)</p>
                                <ul>
                                    <li>Weird animal slippers do not a costume make</li>
                                    <li>Lingerie girl was not wearing a dress but brought dresses with her, close call but ultimately not in a costume.</li>
                                </ul>
                            </div>
                            <Card></Card>
                        </Col>

                    </Row>
                    
                </div>
            );
        }

        
    }
}

export default Results;