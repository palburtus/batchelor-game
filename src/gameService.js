import * as constants from './constants';

export const getScore = (picks) => {
    let score = 0;
    if(picks){

        //WEEK 3
        debugger;
        for(let i = 0; i < constants.perfectPicks.isNotOnAnyDateWeekThree.length; i++){
            if(constants.perfectPicks.isNotOnAnyDateWeekThree.indexOf(picks.isNotOnAnyDateWeekThree[i]) >= 0){
                score += constants.scoreMap['isNotOnAnyDateWeekThree'];
                break;
            }
        }
        
        for(let i = 0; i < constants.perfectPicks.firstOneOnOneDateWeekThree.length; i++){
            debugger;
            if(constants.perfectPicks.firstOneOnOneDateWeekThree.indexOf(picks.firstOneOnOneDateWeekThree[i]) >= 0){                
                score += constants.scoreMap['firstOneOnOneDateWeekThree'];
                break;
            }
        }
        
        for(let i = 0; i < constants.perfectPicks.firstGroupDateRoseWeekThree.length; i++){
            if(constants.perfectPicks.firstGroupDateRoseWeekThree.indexOf(picks.firstGroupDateRoseWeekThree[i]) >= 0){
                score += constants.scoreMap['firstGroupDateRoseWeekThree'];
                break;
            }
        }        

        if(picks.isTylerCameronApperanceWeekThree === constants.perfectPicks.isTylerCameronApperanceWeekThree){
            score += constants.scoreMap['isTylerCameronApperanceWeekThree'];
        }

        if(picks.isNewContestantIntroducedWeekThree === constants.perfectPicks.isNewContestantIntroducedWeekThree){
            score += constants.scoreMap['isNewContestantIntroducedWeekThree'];
        }

        if(picks.isHotTubWeekThree === constants.perfectPicks.isHotTubWeekThree){
            score += constants.scoreMap['isHotTubWeekThree'];
        }

        if(picks.isVictoriaMarylynSurviveWeekThree === constants.perfectPicks.isVictoriaMarylynSurviveWeekThree){
            score += constants.scoreMap['isVictoriaMarylynSurviveWeekThree'];
        }

        //WEEK 2
        if(picks.firstOneOnOneDate === constants.perfectPicks.firstOneOnOneDate){
            score += constants.scoreMap['firstOneOnOneDate'];
        }

        if(picks.isTylerCameronApperanceWeek2 === constants.perfectPicks.isTylerCameronApperanceWeek2){
            score += constants.scoreMap['isTylerCameronApperanceWeek2'];
        }

        if(picks.isHotTubWeekTwo === constants.perfectPicks.isHotTubWeekTwo){
            score += constants.scoreMap['isHotTubWeekTwo'];
        }

        if(picks.isLiveMusicPlayedWeekTwo === constants.perfectPicks.isLiveMusicPlayedWeekTwo){
            score += constants.scoreMap['isLiveMusicPlayedWeekTwo'];
        }

        if(picks.requiresMedicalAttentionWeekTwo === constants.perfectPicks.requiresMedicalAttentionWeekTwo){
            score += constants.scoreMap['requiresMedicalAttentionWeekTwo'];
        }

        if(picks.firstGroupDateRoseWeekTwo === constants.perfectPicks.firstGroupDateRoseWeekTwo){
            score += constants.scoreMap['firstGroupDateRoseWeekTwo'];
        }

        if(picks.isNewContestantIntroducedWeekTwo === constants.perfectPicks.isNewContestantIntroducedWeekTwo){
            score += constants.scoreMap['isNewContestantIntroducedWeekTwo'];
        }

        if(picks.firstInterruptionWeekTwo === constants.perfectPicks.firstInterruptionWeekTwo){
            score += constants.scoreMap['firstInterruptionWeekTwo'];
        }        

        //WEEK 1
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
    
        //SEASON
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
        
    }
    

    return score;
}
    
