import React from 'react';
import { Container, Col, Row, Card, Table, Alert} from 'react-bootstrap';
import * as picksRepository from '../firebaseFirestoreRepository';
import * as gameService from '../gameService';
import * as utils from '../utils';
import interrupt from '../assets/interrupt.gif';
import cheerocracy from '../assets/cheerocracy.gif';
import hottubscarface from '../assets/hottubscarface.gif';
import corruption from '../assets/corruption.gif';
import bachelorretteparty from '../assets/bachelorretteparty.gif';
import tylercameronlose from '../assets/tylercameronlose.gif';
import spoileralert from '../assets/spoileralert.gif'
import fallingOffHourse from '../assets/fallingoffhorse.gif';
import distractedBoyfriend from '../assets/distractedboyfriend.jpg';
import falloutofpool from '../assets/falloutofpool.gif';
import bottleservice from '../assets/bottleservice.gif';
import thinking from '../assets/thinking.gif';
import threeroses from '../assets/threeroses.jpg';
import conspiracy from '../assets/conspiracy.gif';
import annaImage from '../assets/anna.gif';


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

        let token = utils.getParameterByName('token');

        picksRepository.getAllPicks(token)
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
                                <h4>Week 5 Answers</h4>
                                    
                                <p><strong>Is a Rose Given Out on the Group Date Thats in Progress:</strong> Yes (wait what!?)</p>
                                <ul>
                                    <li>They didn't show the end of the group date how can this be!???</li>
                                    <li>Well Bri received an eairlier group date rose</li>
                                    <li>Michelle receieved a one-on-one rose</li>
                                </ul>

                                <img src={thinking} className="answers-gif" width="250" height="200" alt="thinking"/>
                                <ul>
                                    <li>Was ready to mark this question as a "No" until Kim did her best Abraham Zapruder impression with this picture</li>
                                </ul>
                                
                                <img src={threeroses} className="answers-gif" width="250" height="200" alt="threeroses"/>
                                <ul>
                                    <li>That's Michelle on the left</li>
                                    <li>Bri on the right</li>
                                    <li>Where did Pieper get that rose from!?</li>
                                    <li>She could only have gotten it on the group date and even though the footage was not shown, it counts.</li>
                                </ul>

                                <img src={conspiracy} className="answers-gif" width="250" height="200" alt="conspiracy"/>
                        

                                <p><strong>Does someone leave on their own?:</strong> No</p>

                                <p><strong>Will Tyler Cameron make an appearance:</strong> No</p>

                                <ul>
                                    <li>Yet again ABC ruins a weekly question by showing Tyler appearing on next week's episode.</li>
                                </ul>

                                <p><strong>Who gets sent home Early:</strong></p>
                                <ul>
                                    <li>Anna</li>
                                    <li>I've never been more happy to be wrong in assuming that one person would send the rest of the season into a tailspin.  See you in paradise or not who cares.</li>
                                </ul>
                                <img src={annaImage} className="answers-gif" width="250" height="200" alt="anna"/>
                                

                                <p><strong>Who will get a one on one date?:</strong></p>
                                <ul>
                                    <li>Rachael</li>
                                    <li>Kit</li>
                                    
                                </ul>



                                
                                <p><strong>Who will get a group date rose this week?:</strong></p>
                                <ul>
                                    <li>Abigail</li>
                                </ul>

                                <p><strong>Hotub with the bachelor: </strong> No</p>
                                
                                <Card></Card>

                                <h4>Week 4 Answers</h4>
                                <div className="alert alert-info">
                                        <p>
                                            <strong>Quick Recap: </strong>Lauren continues to stretch her lead and the K sisters, Kristen K and Kim K, are mounting a charge while Pat continues to flounder with his undefeated 
                                            streak in the "men's division" being threatened.   
                                        </p>
                                        <p>
                                            That being said <strong>everyone is still alive</strong> as the season long questions are going to be worth a total of <strong>at least 160</strong> with more 
                                            questions and points to come each week!
                                        </p>   
                                        <p>
                                            <strong>Scoring Note:</strong> if you checeked the standings after last night's episode you might now notice that the <strong>scores have changed since last night</strong>.
                                            The reason for this is that the points for the "Who was sent home" where not applied until this morning. 
                                        </p>      
                                        <p>
                                            Below is a video of my race to first place during last night's broadcast.
                                        </p>                               

                                        <img src={fallingOffHourse} className="answers-gif" width="250" height="200" alt="falling off horse"/>
                                        
                                </div>   

                                <p><strong>Will Tyler Cameron make an appearance:</strong> No</p>
                                <p>Who will get a group date rose this week?</p>
                                <ul>
                                    <li>Chelse</li>
                                    <li>Bri</li>
                                </ul>

                                <p><strong>Who gets a one on one date this week? Michelle</strong></p>
                                <ul>
                                    <li>No one got this question right as Matt got all hot and bothered by a new girl.</li>
                                    <li>
                                        All of the existing contestents have broken down their barriers to be vulnerable for Matt
                                        just to have this "new guard" contestant to sweep him off his feet.  <span className="badge bg-info white">#SAD</span>
                                    </li>
                                </ul>

                                <img src={distractedBoyfriend} className="answers-gif" width="300" height="200" alt="distracted boyfriend"/>

                                <p><strong>Hotub with the bachelor: </strong> No</p>
                                <ul>
                                    <li>As someone who has been fading this question all season it was nice to see everyone stick to reasonable water temperatures 
                                        &amp; keep their clothes on this week.</li>
                                </ul>
                                <img src={falloutofpool} className="answers-gif" width="300" height="200" alt="falloutofpool"/>
                                
                                <p><strong>New contestant(s) arrive before the next rose ceremony?</strong> Yes</p>

                                <p><strong>Who gets eliminated a rose ceremony this week:</strong></p>
                                <ol>
                                    <li>Khaylah</li>
                                    <li>Kaili</li>
                                    <li>Kimberly (the new one who was gone so quickly they didn't bother displaying her name with the last initial
                                        despite their already being a Kimberly on this season)</li>
                                </ol>

                                <hr/>

                                <ul>
                                    <li>
                                        It looked like he was gonna send Anna home, the producers really 
                                        hammed that one up nicely.  I could have really used those points.  
                                    </li>
                                    <li>
                                        I wondering if keeping Anna around 
                                        is going to have huge negative consequences that effect the 
                                        rest of the season...
                                    </li>
                                </ul>

                                <p><strong>Is Matt informed about a escort?</strong> No</p>
                                <ul>
                                    <li>
                                        While the girls talked about the alleged escort early and often in this episode
                                        none of them mentioned it to Matt.
                                    </li>
                                    <li>Apparently according to Anna hanging out in the VIP area of a club makes you an escort...</li>
                                    <li>Remeber when Matt could have sent her home resulting in 10 points for me and happiness for everyone else?</li>
                                </ul>
                                <img src={bottleservice} className="answers-gif" width="300" height="200" alt="bottleservice"/>
                                
                                <p><strong>Will Sarah come back this week?</strong> No</p>

                                <Card></Card>

                                <h3>Week 3 Answers</h3>    
                                
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

                                <Card></Card>

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