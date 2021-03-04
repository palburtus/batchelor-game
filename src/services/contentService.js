import axios from 'axios';

export const getContent = () => {

    return new Promise((resolve, reject) => {
        
        axios.get('http://patricka32.sg-host.com/jsonapi/node/Contestant')
        .then((response) => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    
    });

    
}