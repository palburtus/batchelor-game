import * as gameService from '../gameService';
import * as constants from '../constants';

test('default picks to equal 0', () => {

    let result = gameService.getScore(getDefaultPicks());

    expect(result).toBe(0);
});

test('perfect score to equal 295', () => {
    
    let picks = {
        finalSix: [999, 1000, 1001, 1002, 1003, 1004],
        finalFour: [999, 1000, 1001, 1002],
        finalTwo: [999, 1000],
        finalOne: 999,
        isTylerCameronApperance: 999,
        firstImpressionRose: 999,
        firstOutOfLimo: 999,
        firstKiss: 999,
        firstTears: 999,
        firstWearingCostume: 999,
        //TODO episode 2 potential questions
        firstOneOnOneDate: -1,
        //TODO (can be implemented after 1st episode)        
        firstToLeaveOnOwn: -1                
    }

    let result = gameService.getScore(picks);

    expect(result).toBe(275);
});

test('first tears correct to equal 10', () => {
    
    let picks = getDefaultPicks();
    picks.firstTears = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first kiss correct to equal 10', () => {
    
    let picks = getDefaultPicks();
    picks.firstKiss = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
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

test('first wearing costume correct to equal 10', () => {
    
    let picks = getDefaultPicks();
    picks.firstWearingCostume = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first wearing costume incorrect to equal 0', () => {
    
    let picks = getDefaultPicks();
    picks.firstWearingCostume = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
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

test('final four first correct to equal 20', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [999, 998, 997, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four second correct to equal 20', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [998, 999, 997, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four third correct to equal 20', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [998, 997, 999, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four fourth correct to equal 20', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [998, 997, 996, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four two answers correct to equal 40', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [1000, 997, 999, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(40);
});

test('final four three answers correct to equal 60', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [998, 1000, 999, 1001];

    let result = gameService.getScore(picks);

    expect(result).toBe(60);
});

test('final four all correct to equal 80', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [999, 1000, 1001, 1002];

    let result = gameService.getScore(picks);

    expect(result).toBe(80);
});

test('final four all correct out of order to equal 80', () => {
    
    let picks = getDefaultPicks();
    picks.finalFour = [1001, 1002, 999, 1000];

    let result = gameService.getScore(picks);

    expect(result).toBe(80);
});

test('final six none correct to equal 0', () => {
    
    let picks = getDefaultPicks();
    picks.finalSix = [998, 997, 996, 995, 994, 993];

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
});

test('final six first correct to equal 10', () => {
    
    let picks = getDefaultPicks();
    picks.finalSix = [999, 998, 997, 996, 995, 994];

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('final six two correct to equal 20', () => {
    
    let picks = getDefaultPicks();
    picks.finalSix = [1002, 999, 995, 994, 993, 992];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final six three correct to equal 30', () => {
    
    let picks = getDefaultPicks();
    picks.finalSix = [1002, 999, 996, 1000, 994, 992];

    let result = gameService.getScore(picks);

    expect(result).toBe(30);
});

test('final six four correct to equal 40', () => {
    
    let picks = getDefaultPicks();
    picks.finalSix = [1002, 1000, 994, 993, 1003, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(40);
});

test('final six five correct to equal 50', () => {
    
    let picks = getDefaultPicks();
    picks.finalSix = [1002, 996, 1000, 1001, 1003, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(50);
});

test('final six all correct out of order to equal 80', () => {
    let picks = getDefaultPicks();
    picks.finalSix = [1004, 1003, 1002, 1001, 1000, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(60);
})

function getDefaultPicks() {
    return {
        finalSix: [],
        finalFour: [],
        finalTwo: [],
        finalOne: -1,
        isTylerCameronApperance: constants.NO_SELECTION,
        firstImpressionRose: -1,
        firstOutOfLimo: -1,
        firstTears: -1,         
        firstKiss: -1,
        firstWearingCostume: -1,
        firstOneOnOneDate: -1,
        firstToLeaveOnOwn: -1
    };
}
