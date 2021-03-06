export const TRUE           = 1;
export const FALSE          = 0;
export const NO_SELECTION   = -1;
export const NOT_SETTLED    = 999;
export const NO_ACTION      = 777;

export function getGirlsById(id){
    let girl = girls.filter(obj => {
        return obj.id === id
    });

    return girl[0];
}

export const scoreMap = {
    //WEEK 1
    'isTylerCameronApperance' : 5,
    'firstImpressionRose' : 10,
    'firstOutOfLimo' : 10,
    'firstKiss': 10,
    'firstTears' : 10,
    'firstWearingCostume' : 10,
    //WEEK 2
    'isTylerCameronApperanceWeek2' : 5,
    'firstOneOnOneDate' : 10,
    'isHotTubWeekTwo' : 5,
    'isLiveMusicPlayedWeekTwo' : 5,
    'requiresMedicalAttentionWeekTwo' : 10,
    'firstGroupDateRoseWeekTwo' : 10,
    'isNewContestantIntroducedWeekTwo' : 5,
    'firstInterruptionWeekTwo' : 10,
    //WEEK 3
    'firstOneOnOneDateWeekThree' : 10,
    'firstGroupDateRoseWeekThree' : 10,
    'isTylerCameronApperanceWeekThree' : 5,
    'isNewContestantIntroducedWeekThree' : 5,
    'isHotTubWeekThree' : 5,
    'isVictoriaMarylynSurviveWeekThree' : 5,
    'isNotOnAnyDateWeekThree' : 10,
    //WEEK 4
    'isTylerCameronApperanceWeekFour' : 5,
    'oneOnOneDateWeekFour' : 10,
    'groupDateRoseWeekFour' : 10,
    'isHotTubWeekFour' : 5,
    'isNewContestantsBeforeRoseCeremony': 5,
    'eliminatedWeekFour' : 10,
    'isMattToldAboutEscort' : 5,
    'isSarahReturnWeekFour' : 5,
    //WEEK 5
    'isTylerCameronApperanceWeekFive' : 5,
    'oneOnOneDateWeekFive' : 10,
    'groupDateRoseWeekFive' : 10,
    'isHotTubWeekFive' : 5,
    'isRoseGivenOutFirstGroupDateWeekFive' : 5,
    'sentHomeEarlyWeekFive' : 10,
    'leavesOnOwnWeekFive' : 5,
    //WEEK 6
    'oneOnOneDateWeekSix' : 10,
    'groupDateRoseWeekSix' : 10,
    'isHotTubWeekSix' : 5,
    'isJesseniaSentHomeWeekSix' : 5,
    'isMJSentHomeWeekSix' : 5,
    'isHeathMartinMadeContestant' : 5,
    'isTylerCameronOnDateWeekSix' : 5,
    //WEEK 7
    'oneOnOneDateWeekSeven' : 10,
    'groupDateRoseWeekSeven' : 10,
    'isHotTubWeekSeven' : 5,
    'eliminatedWeekSeven' : 10,
    'isTwoOrLessWeekSeven' : 5,
    'sentHomeEarlyWeekSeven' : 10,
    'isHeatherMadeContestantWeekSeven' : 5,
    //WEEK 8 
    'firstHomeTownDate': 10,
    'sentHomeWeekEight': 10,
    'isMattAskingAllForPermission': 5,
    'isSkyDivingInjured': 5,
    'inLoveWeekEight': 10,
    //WEEK 9
    'isSerenaRegretLeaving' : 5,
    'isVictoriaAplogize' : 5,
    'firstGirlOnHotSeat' : 10,
    'alludedToBeOnParadise' : 10,
    'howManyGirlsSitOnHotSeat': 5,
    //WEEK 10
    'sentHomeWeekTen' : 10,
    'firstFantasySuite': 10,
    'isLeaveOnOwnWeekTen': 5,
    'hotTubWeekTen': 5,
    'budgetFantasySuite' : 10,
    'fantasySuiteRelations' : 10,
    //SEASON
    'isMattAndFinalRoseACouple' : 10,
    'bachelorette' : 20,
    'isSentHomeOnAOneOnOneDate' : 10,
    'isLeaveOnOwn' : 10,
    'isMultipleInLove' : 10,
    'finalOne' : 30,
    'finalTwo' : 25,
    'finalFour' : 20,
    'finalSix' : 10,
}

export function defaultPicks() {
    return {
        //WEEK 1
        isTylerCameronApperance: NO_SELECTION,
        firstImpressionRose: -1,
        firstOutOfLimo: -1,
        firstKiss: -1,
        firstTears: -1,
        firstWearingCostume: -1,
        //WEEK 2  
        firstOneOnOneDate: NO_SELECTION,
        isHotTubWeekTwo: NO_SELECTION,
        isTylerCameronApperanceWeek2: NO_SELECTION,
        isLiveMusicPlayedWeekTwo: NO_SELECTION,
        requiresMedicalAttentionWeekTwo: NO_SELECTION,
        firstGroupDateRoseWeekTwo: NO_SELECTION,
        isNewContestantIntroducedWeekTwo: NO_SELECTION,
        firstInterruptionWeekTwo: NO_SELECTION,
        //WEEK 3
        firstOneOnOneDateWeekThree: NO_SELECTION,
        firstGroupDateRoseWeekThree: NO_SELECTION,
        isTylerCameronApperanceWeekThree: NO_SELECTION,
        isNewContestantIntroducedWeekThree: NO_SELECTION,
        isHotTubWeekThree: NO_SELECTION,
        isVictoriaMarylynSurviveWeekThree: NO_SELECTION,
        isNotOnAnyDateWeekThree: NO_SELECTION,
        //WEEK 4
        isTylerCameronApperanceWeekFour: NO_SELECTION,
        oneOnOneDateWeekFour: NO_SELECTION,
        groupDateRoseWeekFour: NO_SELECTION,
        isHotTubWeekFour: NO_SELECTION,
        isNewContestantsBeforeRoseCeremony: NO_SELECTION,
        eliminatedWeekFour: NO_SELECTION,
        isMattToldAboutEscort: NO_SELECTION,
        isSarahReturnWeekFour: NO_SELECTION,
        //WEEK 5
        isTylerCameronApperanceWeekFive: NO_SELECTION,
        oneOnOneDateWeekFive: NO_SELECTION,
        groupDateRoseWeekFive: NO_SELECTION,
        isHotTubWeekFive: NO_SELECTION,
        isRoseGivenOutFirstGroupDateWeekFive: NO_SELECTION,
        sentHomeEarlyWeekFive: NO_SELECTION,
        leavesOnOwnWeekFive: NO_SELECTION,
        //WEEK 6
        oneOnOneDateWeekSix: NO_SELECTION,
        groupDateRoseWeekSix: NO_SELECTION,
        isHotTubWeekSix: NO_SELECTION,
        isJesseniaSentHomeWeekSix: NO_SELECTION,
        isMJSentHomeWeekSix: NO_SELECTION,
        isHeathMartinMadeContestant: NO_SELECTION,
        isTylerCameronOnDateWeekSix: NO_SELECTION,
        //WEEK 7
        oneOnOneDateWeekSeven: [NO_SELECTION],
        groupDateRoseWeekSeven: [NO_SELECTION],
        isHotTubWeekSeven: NO_SELECTION,
        eliminatedWeekSeven: [NO_SELECTION],
        isTwoOrLessWeekSeven: NO_SELECTION,
        sentHomeEarlyWeekSeven: [NO_SELECTION],
        isHeatherMadeContestantWeekSeven: NO_SELECTION,
        //WEEK 8
        firstHomeTownDate: NO_SELECTION,
        sentHomeWeekEight: NO_SELECTION,
        isMattAskingAllForPermission: NO_SELECTION,
        isSkyDivingInjured: NO_SELECTION,
        inLoveWeekEight: NO_SELECTION,
        //WEEK 9
        isSerenaRegretLeaving: NO_SELECTION,
        isVictoriaAplogize: NO_SELECTION,
        firstGirlOnHotSeat: [NO_SELECTION],
        alludedToBeOnParadise: [NO_SELECTION],
        howManyGirlsSitOnHotSeat: NO_SELECTION,
        //WEEK 10
        sentHomeWeekTen: [NO_SELECTION],
        firstFantasySuite: NO_SELECTION,
        isLeaveOnOwnWeekTen: NO_SELECTION,
        hotTubWeekTen: NO_SELECTION,
        budgetFantasySuite: NO_SELECTION,
        fantasySuiteRelations: NO_SELECTION,
        //SEASON
        finalSix: [],
        finalFour: [],
        finalTwo: [],
        finalOne: -1,
        isMattAndFinalRoseACouple: NO_SELECTION,
        bachelorette: NO_SELECTION,
        isSentHomeOnAOneOnOneDate: NO_SELECTION,
        isLeaveOnOwn: NO_SELECTION,
        isMultipleInLove: NO_SELECTION
    }       
}

export const perfectPicks = {
    //WEEK 1
    isTylerCameronApperance: FALSE,
    firstImpressionRose: '1',
    firstOutOfLimo: '6',
    firstKiss: '2',
    firstTears: '26',
    firstWearingCostume: '8',
    //WEEK 2
    firstOneOnOneDate: '6',
    isHotTubWeekTwo: TRUE,
    isTylerCameronApperanceWeek2: FALSE,
    isLiveMusicPlayedWeekTwo: FALSE,
    requiresMedicalAttentionWeekTwo: '28',
    firstGroupDateRoseWeekTwo: '20',
    isNewContestantIntroducedWeekTwo: FALSE,
    firstInterruptionWeekTwo: NO_ACTION,
    //WEEK 3
    firstOneOnOneDateWeekThree: ['30'],
    firstGroupDateRoseWeekThree: ['26'],
    isTylerCameronApperanceWeekThree: 0,
    isNewContestantIntroducedWeekThree: 0,
    isHotTubWeekThree: 1,
    isVictoriaMarylynSurviveWeekThree: 0,
    isNotOnAnyDateWeekThree: [NO_ACTION],
    //WEEK 4
    isTylerCameronApperanceWeekFour: FALSE,
    oneOnOneDateWeekFour: ['34'],
    groupDateRoseWeekFour: ['9', '6'],
    isHotTubWeekFour: FALSE,
    isNewContestantsBeforeRoseCeremony: TRUE,
    eliminatedWeekFour: ['14', '16', '36'],
    isMattToldAboutEscort: FALSE,
    isSarahReturnWeekFour: FALSE,
    //WEEK 5
    isTylerCameronApperanceWeekFive: FALSE,
    oneOnOneDateWeekFive: ['26', '18'],
    groupDateRoseWeekFive: ['1'],
    isHotTubWeekFive: 0,
    isRoseGivenOutFirstGroupDateWeekFive: TRUE,
    sentHomeEarlyWeekFive: ['5'],
    leavesOnOwnWeekFive: FALSE,
    //WEEK 6              
    oneOnOneDateWeekSix: ['25', '15'],
    groupDateRoseWeekSix: ['34'],
    isHotTubWeekSix: FALSE,
    isJesseniaSentHomeWeekSix: FALSE,
    isMJSentHomeWeekSix: TRUE,
    isHeathMartinMadeContestant: FALSE,
    isTylerCameronOnDateWeekSix: TRUE,
    //WEEK 7
    oneOnOneDateWeekSeven: ['30'],
    groupDateRoseWeekSeven: ['26'],
    isHotTubWeekSeven: FALSE,
    eliminatedWeekSeven: ['9', '29'],
    isTwoOrLessWeekSeven: FALSE,
    sentHomeEarlyWeekSeven: ['1', '13'],
    isHeatherMadeContestantWeekSeven: FALSE,
    //WEEK 8
    firstHomeTownDate: '34',
    sentHomeWeekEight: [NO_ACTION],
    isMattAskingAllForPermission: 0,
    isSkyDivingInjured: 0,
    inLoveWeekEight: ['6','34'],
    //WEEK 9
    isSerenaRegretLeaving: 0,
    isVictoriaAplogize: 1,
    firstGirlOnHotSeat: '33',
    alludedToBeOnParadise: [999],
    howManyGirlsSitOnHotSeat: 0, // IIII
    //WEEK 10
    sentHomeWeekTen: [NOT_SETTLED],
    firstFantasySuite: NOT_SETTLED,
    isLeaveOnOwnWeekTen: NOT_SETTLED,
    hotTubWeekTen: NOT_SETTLED,
    budgetFantasySuite: NOT_SETTLED,
    fantasySuiteRelations: NOT_SETTLED,
    //SEASON
    finalSix: ['6', '13', '25', '26', '30', '34'],
    finalFour: ['6', '26', '30', '34'],
    finalTwo: [NOT_SETTLED, (NOT_SETTLED + 1)],
    finalOne: NOT_SETTLED,
    isMattAndFinalRoseACouple: NOT_SETTLED,
    bachelorette: NOT_SETTLED,
    isSentHomeOnAOneOnOneDate: TRUE,
    isLeaveOnOwn: TRUE,
    isMultipleInLove: NOT_SETTLED
}

export const girls = [

    
  ];