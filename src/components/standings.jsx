import React from 'react';
import * as picksRepository from '../firebaseFirestoreRepository';
import * as gameService from '../gameService';

class Standings extends React.Component {

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

            let displayStandings = this.state.standings.map((obj) => {
             
                let score = gameService.getScore(obj.picks);
                return (<p>{obj.name} - {score}</p>);
            });

            return(
                <div id="standings">
                    {displayStandings}
                </div>
            );
        }

        
    }
}

export default Standings;