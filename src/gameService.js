import * as constants from './constants';

export const getScore = (picks) => {
    let score = 0;
  
    if(picks.firstOutOfLimo === constants.perfectPicks.firstOutOfLimo){
        score += constants.scoreMap['firstOutOfLimo'];
    }

    return score;
}

