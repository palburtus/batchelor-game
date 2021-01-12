export const TRUE           = 1;
export const FALSE          = 0;
export const NO_SELECTION   = -1;
export const NOT_SETTLED    = 999;
export const NO_ACTION      = 777;

export function defaultPicks() {
    return {
        finalSix: [],
        finalFour: [],
        finalTwo: [],
        finalOne: -1,
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
        isTylerCameronApperanceWeekThree: NO_SELECTION,
        //TODO (can be implemented after 1st episode)
        firstTwoOneOne: [],        
        firstToLeaveOnOwn: -1         
    }       
}

export const perfectPicks = {
    finalSix: [NOT_SETTLED, (NOT_SETTLED + 1), (NOT_SETTLED + 2), (NOT_SETTLED + 3), (NOT_SETTLED + 4), (NOT_SETTLED + 5)],
    finalFour: [NOT_SETTLED, (NOT_SETTLED + 1), (NOT_SETTLED + 2), (NOT_SETTLED + 3)],
    finalTwo: [NOT_SETTLED, (NOT_SETTLED + 1)],
    finalOne: NOT_SETTLED,
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
    firstOneOnOneDateWeekThree: NOT_SETTLED,
    firstGroupDateRoseWeekThree: NOT_SETTLED,
    isTylerCameronApperanceWeekThree: NOT_SETTLED,
    isNewContestantIntroducedWeekThree: NOT_SETTLED,
    isHotTubWeekThree: NOT_SETTLED,
    isVictoriaMarylynSurviveWeekThree: NOT_SETTLED,
    //TODO (can be implemented after 1st episode)   
    firstToLeaveOnOwn: NOT_SETTLED                
}

export const scoreMap = {
    'finalOne' : 30,
    'finalTwo' : 25,
    'finalFour' : 20,
    'finalSix' : 10,
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
    'isVictoriaMarylynSurviveWeekThree' : 5
}

export function getGirlsById(id){
    let girl = girls.filter(obj => {
        return obj.id === id
    });

    return girl[0];
}

export const girls = [
    {
        id: '1',
        name: 'Abigail',
        thumb: './thumbs/abigail.jpg',
        isActive: true
    },
    {
        id: '2',
        name: 'Alana',
        thumb: './thumbs/alana.jpg',
        isActive: true
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
        isActive: true
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
        isActive: true
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
        isActive: true
    },
    {
        id: '13',
        name: 'Jessenia',
        thumb: './thumbs/jessenia.jpg',
        isActive: true
    },
    {
        id: '14',
        name: 'Kali',
        thumb: './thumbs/kali.jpg',
        isActive: true
    },
    {
        id: '15',
        name: 'Katie',
        thumb: './thumbs/katie.jpg',
        isActive: true
    },
    {
        id: '16',
        name: 'Khaylah',
        thumb: './thumbs/khaylah.jpg',
        isActive: true
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
        isActive: true
    },
    {
        id: '19',
        name: 'Kristin',
        thumb: './thumbs/kristin.jpg',
        isActive: true
    },
    {
        id: '20',
        name: 'Lauren',
        thumb: './thumbs/lauren.jpg',
        isActive: true
    },
    {
        id: '21',
        name: 'Magi',
        thumb: './thumbs/magi.jpg',
        isActive: true
    },
    {
        id: '22',
        name: 'Mari',
        thumb: './thumbs/mari.jpg',
        isActive: true
    },
    {
        id: '23',
        name: 'Marylynn',
        thumb: './thumbs/marylynn.jpg',
        isActive: true
    },
    {
        id: '24',
        name: 'MJ',
        thumb: './thumbs/mj.jpg',
        isActive: true
    },
    {
        id: '25',
        name: 'Pieper',
        thumb: './thumbs/pieper.jpg',
        isActive: true
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
        isActive: true
    },
    {
        id: '29',
        name: 'Serena C',
        thumb: './thumbs/serena_c.jpg',
        isActive: true
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
        isActive: true
    },
    {
        id: '32',
        name: 'Victoria',
        thumb: './thumbs/victoria.jpg',
        isActive: true
    }
  ];