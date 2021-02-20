import * as gameService from '../gameService';
import * as constants from '../constants';

test('default picks to equal 0', () => {

    let result = gameService.getScore(constants.defaultPicks());

    expect(result).toBe(0);
});


test('perfect score to equal 690', () => {
    
    let picks = {
        //WEEK 1
        isTylerCameronApperance: 0,
        firstImpressionRose: '1',
        firstOutOfLimo: '6',
        firstKiss: '2',
        firstTears: '26',
        firstWearingCostume: '8',
        //WEEK 2
        firstOneOnOneDate: '6',
        isHotTubWeekTwo: 1,
        isTylerCameronApperanceWeek2: 0,
        isLiveMusicPlayedWeekTwo: 0,
        requiresMedicalAttentionWeekTwo: '28',
        firstGroupDateRoseWeekTwo: '20',
        isNewContestantIntroducedWeekTwo: 0,
        firstInterruptionWeekTwo: 777,
        //WEEK 3
        firstOneOnOneDateWeekThree: '30',
        firstGroupDateRoseWeekThree: '26',
        isTylerCameronApperanceWeekThree: 0,
        isNewContestantIntroducedWeekThree: 0,
        isHotTubWeekThree: 1,
        isVictoriaMarylynSurviveWeekThree: 0,
        isNotOnAnyDateWeekThree: 777,
        //WEEK 4
        isTylerCameronApperanceWeekFour: 0,
        oneOnOneDateWeekFour: '34',
        groupDateRoseWeekFour: '9',
        isHotTubWeekFour: 0,
        isNewContestantsBeforeRoseCeremony: 1,
        eliminatedWeekFour: '14', 
        isMattToldAboutEscort: 0,
        isSarahReturnWeekFour: 0,
        //WEEK 5
        isTylerCameronApperanceWeekFive: 0,
        oneOnOneDateWeekFive: '26',
        groupDateRoseWeekFive: '1',
        isHotTubWeekFive: 0,
        isRoseGivenOutFirstGroupDateWeekFive: 1,
        sentHomeEarlyWeekFive: '5',
        leavesOnOwnWeekFive: 0,
        //WEEK 6      
        oneOnOneDateWeekSix: '25',
        groupDateRoseWeekSix: '34',
        isHotTubWeekSix: 0,
        isJesseniaSentHomeWeekSix: 0,
        isHeathMartinMadeContestant: 0,
        isTylerCameronOnDateWeekSix: 1,
        isMJSentHomeWeekSix: 1,
        //WEEK 7 
        oneOnOneDateWeekSeven: '30',
        groupDateRoseWeekSeven: '26',
        isHotTubWeekSeven: 0,
        eliminatedWeekSeven: '9',
        isTwoOrLessWeekSeven: 0,
        sentHomeEarlyWeekSeven: '1',
        isHeatherMadeContestantWeekSeven: 0,
        //WEEK 8
        firstHomeTownDate: 999,
        sentHomeWeekEight: 999,
        isMattAskingAllForPermission: 999,
        isSkyDivingInjured: 999,
        inLoveWeekEight: 999,
        //SEASON
        isMattAndFinalRoseACouple: 999,
        bachelorette: 999,
        isSentHomeOnAOneOnOneDate: 1,
        isLeaveOnOwn: 1,
        isMultipleInLove: 999,
        finalSix: ['6', '13', '25', '26', '30', '34'],
        finalFour: ['6', '26', '30', '34'],
        finalTwo: [999, 1000],
        finalOne: 999,
    }

    let result = gameService.getScore(picks);

    expect(result).toBe(690);
});


test('is falling in love week eight correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.inLoveWeekEight = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is falling in love week eight incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.inLoveWeekEight = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})


test('sky diving injury correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isSkyDivingInjured = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('sky diving injury incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isSkyDivingInjured = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is Matt ask for all hometown permission correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isMattAskingAllForPermission = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is Matt ask for all hometown permissions incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isMattAskingAllForPermission = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('send home week eight correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.sentHomeWeekEight = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('sent home week eight incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.sentHomeWeekEight = 998;
        
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('first home town date correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.firstHomeTownDate = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('first home town date incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.firstHomeTownDate = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is heather receive rose during first rose ceremony week 7 correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isHeatherMadeContestantWeekSeven = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is heather receive rose during first rose ceremony week 7 incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isHeatherMadeContestantWeekSeven = 1;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('sent home early week 7 correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.sentHomeEarlyWeekSeven = '1';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('sent home early week 7 alternate correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.sentHomeEarlyWeekSeven = '13';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('sent home early incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.sentHomeEarlyWeekSeven = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is two or less eliminated week 7 correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isTwoOrLessWeekSeven = 0;
    //3
    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is two or less eliminated week 7 incorrect to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isTwoOrLessWeekSeven = 1;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})


test('eliminated week seven correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.eliminatedWeekSeven = '9';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('eliminated week seven alternate correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.eliminatedWeekSeven = '29';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('eliminated week seven incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.eliminatedWeekSeven = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is hot tub week seven correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isHotTubWeekSeven = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is hot tub week 7 incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isHotTubWeekSeven = 1;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('week seven group date correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekSeven = '26';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('week seven group date incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekSeven = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('one on one week seven correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekSeven = '30';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('one on one week seven incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekSeven = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is multiple in love correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.isMultipleInLove = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is multiple in love incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isMultipleInLove = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is leave on own correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.isLeaveOnOwn = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is leave on own incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isLeaveOnOwn = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is sent home on a one on one correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.isSentHomeOnAOneOnOneDate = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is sent home on a one on one incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isSentHomeOnAOneOnOneDate = 0;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('bachelorette correct to equal 20', () =>{
    let picks = constants.defaultPicks();
    picks.bachelorette = 999;

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
})

test('bachelorette incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.bachelorette = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is Matt and Final Rose a couple correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.isMattAndFinalRoseACouple = 999;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is Matt and Final Rose a couple incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isMattAndFinalRoseACouple = 998;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is tyler cameron on date week six correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isTylerCameronOnDateWeekSix = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is tyler cameron on date week six incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isTylerCameronOnDateWeekSix = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is heather martin made contestant week six correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isHeathMartinMadeContestant = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is Heather Martin Made cotenstant week six incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isHeathMartinMadeContestant = 1;
    
    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('MJ sent home week six correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isMJSentHomeWeekSix = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('MJ sent homeweek six incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isMJSentHomeWeekSix = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})


test('jessenia sent home week six correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isJesseniaSentHomeWeekSix = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('jessenia sent home week six incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isJesseniaSentHomeWeekSix = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('hot tub week six correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isHotTubWeekSix = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('hot tub week six incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isHotTubWeekSix = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})


test('one on one date week six correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekSix = '25';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('one on one date alternate week six correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekSix = '15';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('one on one date week six incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekSix = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('group date week six correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekSix = '34';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('group date week six incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekSix = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})                                

test('leaves on own week five correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.leavesOnOwnWeekFive = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('leaves on own week five icorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.leavesOnOwnWeekFive = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('sent home early week five correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.sentHomeEarlyWeekFive = '5';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('sent home early week five correct to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.sentHomeEarlyWeekFive = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is rose given out on first group date week five correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isRoseGivenOutFirstGroupDateWeekFive = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is rose given out on first group date week five icorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isRoseGivenOutFirstGroupDateWeekFive = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is hot tub week five correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isHotTubWeekFive = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is hot tub week five incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isHotTubWeekFive = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is group date week five correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekFive = '1';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is group date week five correct to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekFive = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is one on one week five correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekFive = '26';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is alternate one on one week five correct to equal 10', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekFive = '18';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is one on one five incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekFive = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is Tlyer Cameron week five correct to equal 5', () =>{
    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeekFive = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is Tlyer Cameron week five incorrect to equal 0', () =>{
    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeekFive = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is Sarah return week four correct to equel 5', () => {
    let picks = constants.defaultPicks();
    picks.isSarahReturnWeekFour = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is Sarah return week four incorrect to equel 0', () => {
    let picks = constants.defaultPicks();
    picks.isSarahReturnWeekFour = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is Matt told about escort correct to equal 5', () => {
    let picks = constants.defaultPicks();
    picks.isMattToldAboutEscort = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is Matt told about escort incorrect to equal 0', () => {
    let picks = constants.defaultPicks();
    picks.isMattToldAboutEscort = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('eliminated week forr correct to equal 10', () => {
    let picks = constants.defaultPicks();
    picks.eliminatedWeekFour = '16'; //'14', '16', '36'

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('eliminated week four alternate correct to equal 10', () => {
    let picks = constants.defaultPicks();
    picks.eliminatedWeekFour = '36'; 

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('eliminated week for incorrect to equal 0', () => {
    let picks = constants.defaultPicks();
    picks.eliminatedWeekFour = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is will new arrivals before rose ceremony week 4 correct to equal 5', () => {
    let picks = constants.defaultPicks();
    picks.isNewContestantsBeforeRoseCeremony = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is new arrivals before rose ceremony incorrect to equal 0', () => {
    let picks = constants.defaultPicks();
    picks.isNewContestantsBeforeRoseCeremony = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is hot tub week 4 correct to equal 5', () => {
    let picks = constants.defaultPicks();
    picks.isHotTubWeekFour = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is hot tub week 4 incorrect to equal 5', () => {
    let picks = constants.defaultPicks();
    picks.isHotTubWeekFour = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is one on one date week four correct to equal 10', () => {
    let picks = constants.defaultPicks();
    picks.oneOnOneDateWeekFour = '34';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is one on one date week four incorrect to equal 0', () => {
    let picks = constants.defaultPicks();

    let result = gameService.getScore(picks);
    picks.oneOnOneDateWeekFour = 998;

    expect(result).toBe(0);
})

test('is group date week four correct to equal 10', () => {
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekFour = '9';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is second group date week four correct to equal 10', () => {
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekFour = '6';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('is group date week four incorrect to equal 10', () => {
    let picks = constants.defaultPicks();
    picks.groupDateRoseWeekFour = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is tyler cameron appearance week four correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeekFour = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is tyler cameron appearance week four incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeekFour = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('not on any date week three correct correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.isNotOnAnyDateWeekThree = 777;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('alternate not on any date week three correct correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.isNotOnAnyDateWeekThree = 777;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('not on any date week three correct incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isNotOnAnyDateWeekThree = 998;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('will victoria and maryland survive rose ceremonies week 3 correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isVictoriaMarylynSurviveWeekThree = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('will victoria and maryland survive rose ceremonies week 3 incorrect to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isVictoriaMarylynSurviveWeekThree = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('will hot tub week three correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isHotTubWeekThree = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('will hot tub week three incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isHotTubWeekThree = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is new contestant introduced week three correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isNewContestantIntroducedWeekThree = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is new contestant introduced week three incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isNewContestantIntroducedWeekThree = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('gets a one on one week three correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstOneOnOneDateWeekThree = '30';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('one on one week three incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.firstOneOnOneDateWeekThree = '998';

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('group date rose week three correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstGroupDateRoseWeekThree = '26';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('group date rose week three incorrect to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstGroupDateRoseWeekThree = '998';

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('tyler cameron apperance week three correct to equal 5', () =>{

    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeekThree = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('tyler cameron apperance week three incorrect to equal 0', () =>{

    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeekThree = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('first interruption week 2 correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstInterruptionWeekTwo = 777;

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('first interruption week 2 incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.firstInterruptionWeekTwo = 776;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('will new contestant be added week 2 correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isNewContestantIntroducedWeekTwo = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('will new contestant be added week 2 incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isNewContestantIntroducedWeekTwo = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('first group date rose week 2 correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstGroupDateRoseWeekTwo = '20';

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
    picks.requiresMedicalAttentionWeekTwo = '28';

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
})

test('requires medical attention incorrect to equal 0', () => {
    
    let picks = constants.defaultPicks();
    picks.requiresMedicalAttentionWeekTwo = '998';

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is live music week two correct to equal 5', () => {

    let picks = constants.defaultPicks();
    picks.isLiveMusicPlayedWeekTwo = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is live music week two incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isLiveMusicPlayedWeekTwo = 1;

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('is hot tub week two correct to equal 5', () => {
    
    let picks = constants.defaultPicks();
    picks.isHotTubWeekTwo = 1

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('is hot tub week two incorrect to equal 0', () => {
    
    let picks = constants.defaultPicks();
    picks.isHotTubWeekTwo = 0

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
})

test('first one on one date correct to equal 10', () => {

    let picks = constants.defaultPicks();
    picks.firstOneOnOneDate = '6';

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
    picks.isTylerCameronApperanceWeek2 = 0;

    let result = gameService.getScore(picks);

    expect(result).toBe(5);
})

test('tyler cameron week 2 apperance incorrect to equal 0', () => {

    let picks = constants.defaultPicks();
    picks.isTylerCameronApperanceWeek2 = 1;

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
    picks.finalFour = ['6', '2', '1', '4'];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four second correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = ['1', '6', '2', '4'];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four third correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = ['1', '2', '6', '4'];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four fourth correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = ['1', '2', '3', '34'];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final four two answers correct to equal 40', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = ['6', '1', '30', '2'];

    let result = gameService.getScore(picks);

    expect(result).toBe(40);
});

test('final four three answers correct to equal 60', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = ['1', '26', '30', '34'];

    let result = gameService.getScore(picks);

    expect(result).toBe(60);
});

test('final four all correct to equal 80', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = ['6', '26', '30', '34'];

    let result = gameService.getScore(picks);

    expect(result).toBe(80);
});

test('final four all correct out of order to equal 80', () => {
    
    let picks = constants.defaultPicks();
    picks.finalFour = ['26', '6', '34', '30'];

    let result = gameService.getScore(picks);

    expect(result).toBe(80);
});

test('final six none correct to equal 0', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = ['0', '1', '2', '3', '4', '5'];

    let result = gameService.getScore(picks);

    expect(result).toBe(0);
});

test('final six first correct to equal 10', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = ['6', '1', '2', '3', '4', '5'];

    let result = gameService.getScore(picks);

    expect(result).toBe(10);
});

test('final six two correct to equal 20', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = ['6', '13', '1', '2', '3', '4'];

    let result = gameService.getScore(picks);

    expect(result).toBe(20);
});

test('final six three correct to equal 30', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = ['6', '13', '1', '25', '2', '3'];

    let result = gameService.getScore(picks);

    expect(result).toBe(30);
});

test('final six four correct to equal 40', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = ['6', '13', '1', '2', '30', '34'];

    let result = gameService.getScore(picks);

    expect(result).toBe(40);
});

test('final six five correct to equal 50', () => {
    
    let picks = constants.defaultPicks();
    picks.finalSix = ['6', '1', '26', '25', '30', '34'];

    let result = gameService.getScore(picks);

    expect(result).toBe(50);
});

test('final six all correct out of order to equal 60', () => {
    let picks = constants.defaultPicks();
    picks.finalSix = ['6', '13', '25', '26', '30', '34'];

    let result = gameService.getScore(picks);

    expect(result).toBe(60);
})
