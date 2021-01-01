import * as constants from './constants';

export const getScore = (picks) => {
    let score = 0;
  
    if(picks.firstOutOfLimo === constants.perfectPicks.firstOutOfLimo){
        score += constants.scoreMap['firstOutOfLimo'];
    }

    if(picks.firstImpressionRose === constants.perfectPicks.firstImpressionRose){
        score += constants.scoreMap['firstImpressionRose'];
    }

    if(picks.isTylerCameronApperance === constants.perfectPicks.isTylerCameronApperance){
        score += constants.scoreMap['isTylerCameronApperance'];
    }

    if(picks.finalOne === constants.perfectPicks.finalOne){
        score += constants.scoreMap['finalOne'];
    }

    for(let i = 0; i < picks.finalTwo.length; i++){
        if(constants.perfectPicks.finalTwo.indexOf(picks.finalTwo[i]) >= 0){
            score += constants.scoreMap['finalTwo'];
        }
    }
    

    return score;
}
    
