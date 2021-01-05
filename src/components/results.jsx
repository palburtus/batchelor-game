import React from 'react';
import { Container, Col, Row, Card, Table} from 'react-bootstrap';
import * as picksRepository from '../firebaseFirestoreRepository';
import * as gameService from '../gameService';

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
                return (<tr><td>{obj.name}</td> <td>{score}</td></tr>);
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
                                            <th>Name</th>
                                            <th>Score</th>
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
                            <Card>
                                
                                <Card.Text>
                                    
                                </Card.Text>
                            </Card>
                        </Col>

                    </Row>
                    
                </div>
            );
        }

        
    }
}

export default Results;