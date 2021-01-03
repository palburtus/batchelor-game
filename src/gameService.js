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

    if(picks.firstKiss === constants.perfectPicks.firstKiss){
        score += constants.scoreMap['firstKiss'];
    }

    if(picks.firstTears === constants.perfectPicks.firstTears){
        score += constants.scoreMap['firstTears'];
    }

    if(picks.firstWearingCostume === constants.perfectPicks.firstWearingCostume){
        score += constants.scoreMap['firstWearingCostume'];
    }

    if(picks.finalOne === constants.perfectPicks.finalOne){
        score += constants.scoreMap['finalOne'];
    }

    for(let i = 0; i < picks.finalTwo.length; i++){
        if(constants.perfectPicks.finalTwo.indexOf(picks.finalTwo[i]) >= 0){
            score += constants.scoreMap['finalTwo'];
        }
    }

    for(let i = 0; i < picks.finalFour.length; i++){
        if(constants.perfectPicks.finalFour.indexOf(picks.finalFour[i]) >= 0){
            score += constants.scoreMap['finalFour'];
        }
    }

    for(let i = 0; i < picks.finalSix.length; i++){
        if(constants.perfectPicks.finalSix.indexOf(picks.finalSix[i]) >= 0){
            score += constants.scoreMap['finalSix'];
        }
    }

    return score;
}
    
