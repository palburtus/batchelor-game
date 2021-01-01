import * as gameService from '../gameService';
import * as constants from '../constants';

test('default picks to equal 0', () => {

    let picks = {
        finalFour: [],
        finalTwo: [],
        finalOne: -1,
        isTylerCameronApperance: constants.NO_SELECTION,
        firstImpressionRose: -1,
        firstOutOfLimo: -1,
        //TODO can happen any time but must be done before 1st episode
        firstTears: -1,
        //TODO first episode specific            
        firstKiss: -1,
        costumQuestion: -1, // info in text 
        //TODO episode 2 potential questions
        firstOneOnOneDate: -1,
        //TODO (can be implemented after 1st episode)        
        finalEight: [],
        firstToLeaveOnOwn: -1                
    }

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
});

test('perfect score to equal 10', () => {
    
    let picks = {
        finalFour: [],
        finalTwo: [],
        finalOne: -1,
        isTylerCameronApperance: constants.NO_SELECTION,
        firstImpressionRose: -1,
        firstOutOfLimo: 999,
        //TODO can happen any time but must be done before 1st episode
        firstTears: -1,
        //TODO first episode specific            
        firstKiss: -1,
        costumQuestion: -1, // info in text 
        //TODO episode 2 potential questions
        firstOneOnOneDate: -1,
        //TODO (can be implemented after 1st episode)        
        finalEight: [],
        firstToLeaveOnOwn: -1                
    }

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first out of limo correct to equal 10', () => {
    let picks = {
        finalFour: [],
        finalTwo: [],
        finalOne: -1,
        isTylerCameronApperance: constants.NO_SELECTION,
        firstImpressionRose: -1,
        firstOutOfLimo: 999,
        //TODO can happen any time but must be done before 1st episode
        firstTears: -1,
        //TODO first episode specific            
        firstKiss: -1,
        costumQuestion: -1, // info in text 
        //TODO episode 2 potential questions
        firstOneOnOneDate: -1,
        //TODO (can be implemented after 1st episode)        
        finalEight: [],
        firstToLeaveOnOwn: -1                
    }

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});