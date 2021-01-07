import * as gameService from '../gameService';
import * as constants from '../constants';

test('default picks to equal 0', () => {

    let result = gameService.getScore(constants.defaultPicks());

    expect(result).toBe(0);
});


test('perfect score to equal 335', () => {
    
    let picks = {
        finalSix: [999, 1000, 1001, 1002, 1003, 1004],
        finalFour: [999, 1000, 1001, 1002],
        finalTwo: [999, 1000],
        finalOne: 999,
        isTylerCameronApperance: 0,
        firstImpressionRose: '1',
        firstOutOfLimo: '6',
        firstKiss: '2',
        firstTears: '26',
        firstWearingCostume: '8',
        //WEEK 2
        firstOneOnOneDate: 999,
        isHotTubWeekTwo: 999,
        isTylerCameronApperanceWeek2: 999,
        isLiveMusicPlayedWeekTwo: 999,
        requiresMedicalAttentionWeekTwo: 999,
        firstGroupDateRoseWeekTwo: 999,
        isNewContestantIntroducedWeekTwo: 999,
        firstInterruptionWeekTwo: 999,
        //TODO (can be implemented after 1st episode)        
        firstToLeaveOnOwn: -1                
    }

    let result = gameService.getScore(picks);

    expect(result).toBe(335);
});

test('first interruption week 2 correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstInterruptionWeekTwo = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('first interruption week 2 incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.firstInterruptionWeekTwo = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('will new contestant be added week 2 correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isNewContestantIntroducedWeekTwo = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('will new contestant be added week 2 incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isNewContestantIntroducedWeekTwo = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('first group date rose week 2 correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstGroupDateRoseWeekTwo = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('first group date rose week 2 incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.firstGroupDateRoseWeekTwo = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('requires medical attention correct to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.requiresMedicalAttentionWeekTwo = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('requires medical attention incorrect to equal 0', () => {
    
    let picks = constants.defaultPicks();
    picks.requiresMedicalAttentionWeekTwo = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is live music week two correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isLiveMusicPlayedWeekTwo = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is live music week two incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isLiveMusicPlayedWeekTwo = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is hot tub week two correct to equal 5', () => {
    
    let picks = constants.defaultPicks();
    picks.isHotTubWeekTwo = 999

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is hot tub week two incorrect to equal 0', () => {
    
    let picks = constants.defaultPicks();
    picks.isHotTubWeekTwo = 998

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('first one on one date correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstOneOnOneDate = 999

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('first one on one date incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.firstOneOnOneDate = 998

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('tyler cameron week 2 apperance correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeek2 = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('tyler cameron week 2 apperance incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeek2 = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('first tears correct to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.firstTears = '26';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first kiss correct to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.firstKiss = '2';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first out of limo correct to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.firstOutOfLimo = '6';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first impression rose to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.firstImpressionRose = '1';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('tyler cameron appearnce to equal 5', () => {
    
    let picks = constants.defaultPicks();
    picks.isTylerCameronApperance = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
});

test('first wearing costume correct to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.firstWearingCostume = '8';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('first wearing costume incorrect to equal 0', () => {
    
    let picks = constants.defaultPicks();
    picks.firstWearingCostume = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
});

test('final rose to equal 30', () => {
    
    let picks = constants.defaultPicks();
    picks.finalOne = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(30);
});

test('final two first one correct to equal 25', () => {
    
    let picks = constants.defaultPicks();
    picks.finalTwo = [999, 998];

    let result = gameService.getScore(picks);

    expect(result).toBe(25);
});

test('final two second one correct to equal 25', () => {
    
    let picks = constants.defaultPicks();
    picks.finalTwo = [998, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(25);
});

test('final two both correct to equal 50', () => {
    
    let picks = constants.defaultPicks();
    picks.finalTwo = [999, 1000];

    let result = gameService.getScore(picks);

    expect(result).toBe(50);
});

test('final two both correct reverse order to equal 50', () => {
    
    let picks = constants.defaultPicks();
    picks.finalTwo = [1000, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(50);
});

test('final four first correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [999, 998, 997, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four second correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [998, 999, 997, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four third correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [998, 997, 999, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four fourth correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [998, 997, 996, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four two answers correct to equal 40', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [1000, 997, 999, 996];

    let result = gameService.getScore(picks);

    expect(result).toBe(40);
});

test('final four three answers correct to equal 60', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [998, 1000, 999, 1001];

    let result = gameService.getScore(picks);

    expect(result).toBe(60);
});

test('final four all correct to equal 80', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [999, 1000, 1001, 1002];

    let result = gameService.getScore(picks);

    expect(result).toBe(80);
});

test('final four all correct out of order to equal 80', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = [1001, 1002, 999, 1000];

    let result = gameService.getScore(picks);

    expect(result).toBe(80);
});

test('final six none correct to equal 0', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = [998, 997, 996, 995, 994, 993];

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
});

test('final six first correct to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = [999, 998, 997, 996, 995, 994];

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('final six two correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = [1002, 999, 995, 994, 993, 992];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final six three correct to equal 30', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = [1002, 999, 996, 1000, 994, 992];

    let result = gameService.getScore(picks);

    expect(result).toBe(30);
});

test('final six four correct to equal 40', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = [1002, 1000, 994, 993, 1003, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(40);
});

test('final six five correct to equal 50', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = [1002, 996, 1000, 1001, 1003, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(50);
});

test('final six all correct out of order to equal 80', () => {
    let picks = constants.defaultPicks();
    picks.finalSix = [1004, 1003, 1002, 1001, 1000, 999];

    let result = gameService.getScore(picks);

    expect(result).toBe(60);
})
