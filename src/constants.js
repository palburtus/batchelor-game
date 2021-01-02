export const TRUE = 1;
export const FALSE = 0;
export const NO_SELECTION = -1;
export const NOT_SETTLED = 999;

export const perfectPicks = {
    finalFour: [NOT_SETTLED, (NOT_SETTLED + 1), (NOT_SETTLED + 2), (NOT_SETTLED + 3)],
    finalTwo: [NOT_SETTLED, (NOT_SETTLED + 1)],
    finalOne: NOT_SETTLED,
    isTylerCameronApperance: NOT_SETTLED,
    firstImpressionRose: NOT_SETTLED,
    firstOutOfLimo: NOT_SETTLED,
    firstKiss: NOT_SETTLED,
    //TODO can happen any time but must be done before 1st episode
    firstTears: NOT_SETTLED,
    //TODO first episode specific                
    costumQuestion: NOT_SETTLED, // info in text 
    //TODO episode 2 potential questions
    firstOneOnOneDate: NOT_SETTLED,
    //TODO (can be implemented after 1st episode)        
    finalEight: [NOT_SETTLED, NOT_SETTLED, NOT_SETTLED, NOT_SETTLED],
    firstToLeaveOnOwn: NOT_SETTLED                
}

export const scoreMap = {
    'finalOne' : 30,
    'finalTwo' : 25,
    'finalFour' : 20,
    'isTylerCameronApperance' : 5,
    'firstImpressionRose' : 10,
    'firstOutOfLimo' : 10,
    'firstKiss': 10,
    'firstTears' : 10
}

export const girls = [
    {
        id: '1',
        name: 'Abigail',
        thumb: './thumbs/abigail.jpg'
    },
    {
        id: '2',
        name: 'Alana',
        thumb: './thumbs/alana.jpg'
    },
    {
        id: '3',
        name: 'Alicia',
        thumb: './thumbs/alicia.jpg'
    },
    {
        id: '4',
        name: 'Amber',
        thumb: './thumbs/amber.jpg'
    },
    {
        id: '5',
        name: 'Anna',
        thumb: './thumbs/anna.jpg'
    },
    {
        id: '6',
        name: 'Bri',
        thumb: './thumbs/bri.jpg'
    },
    {
        id: '7',
        name: 'Carolyn',
        thumb: './thumbs/carolyn.jpg'
    },
    {
        id: '8',
        name: 'Casandra',
        thumb: './thumbs/casandra.jpg'
    },
    {
        id: '9',
        name: 'Chelsea',
        thumb: './thumbs/chelsea.jpg'
    },
    {
        id: '10',
        name: 'Corrinne',
        thumb: './thumbs/corrinne.jpg'
    },
    {
        id: '11',
        name: 'Emani',
        thumb: './thumbs/emani.jpg'
    },
    {
        id: '12',
        name: 'Illeana',
        thumb: './thumbs/illeana.jpg'
    },
    {
        id: '13',
        name: 'Jessenia',
        thumb: './thumbs/jessenia.jpg'
    },
    {
        id: '14',
        name: 'Kali',
        thumb: './thumbs/kali.jpg'
    },
    {
        id: '15',
        name: 'Katie',
        thumb: './thumbs/katie.jpg'
    },
    {
        id: '16',
        name: 'Khaylah',
        thumb: './thumbs/khaylah.jpg'
    },
    {
        id: '17',
        name: 'Kimberly',
        thumb: './thumbs/kimberly.jpg'
    },
    {
        id: '18',
        name: 'Kit',
        thumb: './thumbs/kit.jpg'
    },
    {
        id: '19',
        name: 'Kristin',
        thumb: './thumbs/kristin.jpg'
    },
    {
        id: '20',
        name: 'Lauren',
        thumb: './thumbs/lauren.jpg'
    },
    {
        id: '21',
        name: 'Magi',
        thumb: './thumbs/magi.jpg'
    },
    {
        id: '22',
        name: 'Mari',
        thumb: './thumbs/mari.jpg'
    },
    {
        id: '23',
        name: 'Marylynn',
        thumb: './thumbs/marylynn.jpg'
    },
    {
        id: '24',
        name: 'MJ',
        thumb: './thumbs/mj.jpg'
    },
    {
        id: '25',
        name: 'Pieper',
        thumb: './thumbs/pieper.jpg'
    },
    {
        id: '26',
        name: 'Rachael',
        thumb: './thumbs/rachael.jpg'
    },
    {
        id: '27',
        name: 'Saneh',
        thumb: './thumbs/saneh.jpg'
    },
    {
        id: '28',
        name: 'Sarah',
        thumb: './thumbs/sarah.jpg'
    },
    {
        id: '29',
        name: 'Serena C',
        thumb: './thumbs/serena_c.jpg'
    },
    {
        id: '30',
        name: 'Serena P',
        thumb: "./thumbs/serena_p.jpg"
    },
    {
        id: '31',
        name: 'Sydney',
        thumb: './thumbs/sydney.jpg'
    },
    {
        id: '32',
        name: 'Victoria',
        thumb: './thumbs/victoria.jpg'
    }
  ];