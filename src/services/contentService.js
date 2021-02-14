import axios from 'axios';
import * as contestantParser from '../parsers/contestantParser';

export const getContent = () => {

    axios.get('http://patricka32.sg-host.com/jsonapi/node/Contestant')
        .then((response) => {
            debugger;
            var constesnat = contestantParser.parseContestants(response);
        }).catch(error => {
        
        });
}