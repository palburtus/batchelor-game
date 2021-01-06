export const TRUE = 1;
export const FALSE = 0;
export const NO_SELECTION = -1;
export const NOT_SETTLED = 999;

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
    //TODO episode 2 potential questions
    firstOneOnOneDate: NOT_SETTLED,
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
    'firstWearingCostume' : 10
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