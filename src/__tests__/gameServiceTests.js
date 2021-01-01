import * as gameService from '../gameService';
import * as constants from '../constants';

test('default picks to equal 0', () => {

    let result = gameService.getScore(getDefaultPicks());

    expect(result).toBe(0);
});

test('perfect score to equal 105', () => {
    
    let picks = {
        finalFour: [],
        finalTwo: [999, 999],
        finalOne: 999,
        isTylerCameronApperance: 999,
        firstImpressionRose: 999,
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

    expect(result).toBe(105);
});

test('first out of limo correct to equal 10', () => {
    
    let picks = getDefaultPicks();
    picks.firstOutOfLimo = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first impression rose to equal 10', () => {
    
    let picks = getDefaultPicks();
    picks.firstImpressionRose = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('tyler cameron appearnce to equal 5', () => {
    
    let picks = getDefaultPicks();
    picks.isTylerCameronApperance = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
});

test('final rose to equal 30', () => {
    
    let picks = getDefaultPicks();
    picks.finalOne = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(30);
});

test('final two first one correct to equal 25', () => {
    
    let picks = getDefaultPicks();
    picks.finalTwo = [999, 998];

    let result = gameService.getScore(picks);

    expect(result).toBe(25);
});

test('final two second one correct to equal 25', () => {
    
    let picks = getDefaultPicks();
    picks.finalTwo = [998, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(25);
});

test('final two both correct to equal 50', () => {
    
    let picks = getDefaultPicks();
    picks.finalTwo = [999, 1000];

    let result = gameService.getScore(picks);

    expect(result).toBe(50);
});

test('final two both correct reverse order to equal 50', () => {
    
    let picks = getDefaultPicks();
    picks.finalTwo = [1000, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(50);
});

function getDefaultPicks() {
    return {
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
        costumQuestion: -1,

        //TODO episode 2 potential questions
        firstOneOnOneDate: -1,
        //TODO (can be implemented after 1st episode)        
        finalEight: [],
        firstToLeaveOnOwn: -1
    };
}
