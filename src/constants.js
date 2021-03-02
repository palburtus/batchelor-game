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
    firstGirlOnHotSeat: ['33'],
    alludedToBeOnParadise: [999],
    howManyGirlsSitOnHotSeat: 0, // IIII
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
    {
        id: '1',
        name: 'Abigail',
        thumb: './thumbs/abigail.jpg',
        isActive: false
    },
    {
        id: '2',
        name: 'Alana',
        thumb: './thumbs/alana.jpg',
        isActive: false
    },
    {
        id: '3',
        name: 'Alicia',
        thumb: './thumbs/alicia.jpg',
        isActive: false
    },
    {
        id: '4',
        name: 'Amber',
        thumb: './thumbs/amber.jpg',
        isActive: false
    },
    {
        id: '5',
        name: 'Anna',
        thumb: './thumbs/anna.jpg',
        isActive: false
    },
    {
        id: '6',
        name: 'Bri',
        thumb: './thumbs/bri.jpg',
        isActive: true
    },
    {
        id: '7',
        name: 'Carolyn',
        thumb: './thumbs/carolyn.jpg',
        isActive: false
    },
    {
        id: '8',
        name: 'Casandra',
        thumb: './thumbs/casandra.jpg',
        isActive: false
    },
    {
        id: '9',
        name: 'Chelsea',
        thumb: './thumbs/chelsea.jpg',
        isActive: false
    },
    {
        id: '10',
        name: 'Corrinne',
        thumb: './thumbs/corrinne.jpg',
        isActive: false
    },
    {
        id: '11',
        name: 'Emani',
        thumb: './thumbs/emani.jpg',
        isActive: false
    },
    {
        id: '12',
        name: 'Illeana',
        thumb: './thumbs/illeana.jpg',
        isActive: false
    },
    {
        id: '13',
        name: 'Jessenia',
        thumb: './thumbs/jessenia.jpg',
        isActive: false
    },
    {
        id: '14',
        name: 'Kali',
        thumb: './thumbs/kali.jpg',
        isActive: false
    },
    {
        id: '15',
        name: 'Katie',
        thumb: './thumbs/katie.jpg',
        isActive: false
    },
    {
        id: '16',
        name: 'Khaylah',
        thumb: './thumbs/khaylah.jpg',
        isActive: false
    },
    {
        id: '17',
        name: 'Kimberly',
        thumb: './thumbs/kimberly.jpg',
        isActive: false
    },
    {
        id: '18',
        name: 'Kit',
        thumb: './thumbs/kit.jpg',
        isActive: false
    },
    {
        id: '19',
        name: 'Kristin',
        thumb: './thumbs/kristin.jpg',
        isActive: false
    },
    {
        id: '20',
        name: 'Lauren',
        thumb: './thumbs/lauren.jpg',
        isActive: false
    },
    {
        id: '21',
        name: 'Magi',
        thumb: './thumbs/magi.jpg',
        isActive: false
    },
    {
        id: '22',
        name: 'Mari',
        thumb: './thumbs/mari.jpg',
        isActive: false
    },
    {
        id: '23',
        name: 'Marylynn',
        thumb: './thumbs/marylynn.jpg',
        isActive: false
    },
    {
        id: '24',
        name: 'MJ',
        thumb: './thumbs/mj.jpg',
        isActive: false
    },
    {
        id: '25',
        name: 'Pieper',
        thumb: './thumbs/pieper.jpg',
        isActive: false
    },
    {
        id: '26',
        name: 'Rachael',
        thumb: './thumbs/rachael.jpg',
        isActive: true
    },
    {
        id: '27',
        name: 'Saneh',
        thumb: './thumbs/saneh.jpg',
        isActive: false
    },
    {
        id: '28',
        name: 'Sarah',
        thumb: './thumbs/sarah.jpg',
        isActive: false
    },
    {
        id: '29',
        name: 'Serena C',
        thumb: './thumbs/serena_c.jpg',
        isActive: false
    },
    {
        id: '30',
        name: 'Serena P',
        thumb: "./thumbs/serena_p.jpg",
        isActive: true
    },
    {
        id: '31',
        name: 'Sydney',
        thumb: './thumbs/sydney.jpg',
        isActive: false
    },
    {
        id: '32',
        name: 'Victoria',
        thumb: './thumbs/victoria.jpg',
        isActive: false
    },
    {
        id: '33',
        name: 'Britanny',
        thumb: './thumbs/britanny.jpg',
        isActive: false
    },
    {
        id: '34',
        name: 'Michelle',
        thumb: './thumbs/michelle.jpg',
        isActive: true
    },
    {
        id: '35',
        name: 'Ryan',
        thumb: './thumbs/ryan.jpg',
        isActive: false
    },
    {
        id: '36',
        name: 'Kim',
        thumb: './thumbs/kim.jpg',
        isActive: false
    },
    {
        id: '37',
        name: 'Catalina',
        thumb: './thumbs/catalina.jpg',
        isActive: false
    },
    {
        id: '38',
        name: 'Heather',
        thumb: './thumbs/heather.jpg',
        isActive: false
    }
  ];