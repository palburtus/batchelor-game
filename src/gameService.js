import * as constants from './constants';

export const getScore = (picks) => {
    let score = 0;
    if(picks){

        //WEEK 5 
        score += calculateBoolScore(picks.isTylerCameronApperanceWeekFive, constants.perfectPicks.isTylerCameronApperanceWeekFive, 'isTylerCameronApperanceWeekFive');
        score += calculateMultipleCorrectAnswersScore(picks.oneOnOneDateWeekFive, constants.perfectPicks.oneOnOneDateWeekFive, 'oneOnOneDateWeekFive');
        score += calculateMultipleCorrectAnswersScore(picks.groupDateRoseWeekFive, constants.perfectPicks.groupDateRoseWeekFive, 'groupDateRoseWeekFive');
        score += calculateBoolScore(picks.isHotTubWeekFive, constants.perfectPicks.isHotTubWeekFive, 'isHotTubWeekFive');
        score += calculateBoolScore(picks.isRoseGivenOutFirstGroupDateWeekFive, constants.perfectPicks.isRoseGivenOutFirstGroupDateWeekFive, 'isRoseGivenOutFirstGroupDateWeekFive');
        score += calculateMultipleCorrectAnswersScore(picks.sentHomeEarlyWeekFive, constants.perfectPicks.sentHomeEarlyWeekFive, 'sentHomeEarlyWeekFive');
        score += calculateBoolScore(picks.leavesOnOwnWeekFive, constants.perfectPicks.leavesOnOwnWeekFive, 'leavesOnOwnWeekFive');

        //WEEK 4
        score += calculateBoolScore(picks.isTylerCameronApperanceWeekFour, constants.perfectPicks.isTylerCameronApperanceWeekFour, 'isTylerCameronApperanceWeekFour');
        score += calculateMultipleCorrectAnswersScore(picks.oneOnOneDateWeekFour, constants.perfectPicks.oneOnOneDateWeekFour, 'oneOnOneDateWeekFour');
        score += calculateMultipleCorrectAnswersScore(picks.groupDateRoseWeekFour, constants.perfectPicks.groupDateRoseWeekFour, 'groupDateRoseWeekFour');
        score += calculateBoolScore(picks.isHotTubWeekFour, constants.perfectPicks.isHotTubWeekFour, 'isHotTubWeekFour');
        score += calculateBoolScore(picks.isNewContestantsBeforeRoseCeremony, constants.perfectPicks.isNewContestantsBeforeRoseCeremony, 'isNewContestantsBeforeRoseCeremony');
        score += calculateMultipleCorrectAnswersScore(picks.eliminatedWeekFour, constants.perfectPicks.eliminatedWeekFour, 'eliminatedWeekFour');
        score += calculateBoolScore(picks.isMattToldAboutEscort, constants.perfectPicks.isMattToldAboutEscort, 'isMattToldAboutEscort');
        score += calculateBoolScore(picks.isSarahReturnWeekFour, constants.perfectPicks.isSarahReturnWeekFour, 'isSarahReturnWeekFour');

        //WEEK 3               
        score += calculateMultipleCorrectAnswersScore(picks.isNotOnAnyDateWeekThree, constants.perfectPicks.isNotOnAnyDateWeekThree, 'isNotOnAnyDateWeekThree');
        score += calculateMultipleCorrectAnswersScore(picks.firstOneOnOneDateWeekThree, constants.perfectPicks.firstOneOnOneDateWeekThree, 'firstOneOnOneDateWeekThree');
        score += calculateMultipleCorrectAnswersScore(picks.firstGroupDateRoseWeekThree, constants.perfectPicks.firstGroupDateRoseWeekThree, 'firstGroupDateRoseWeekThree');
        score += calculateBoolScore(picks.isTylerCameronApperanceWeekThree, constants.perfectPicks.isTylerCameronApperanceWeekThree, 'isTylerCameronApperanceWeekThree');        
        score += calculateBoolScore(picks.isNewContestantIntroducedWeekThree, constants.perfectPicks.isNewContestantIntroducedWeekThree, 'isNewContestantIntroducedWeekThree');
        score += calculateBoolScore(picks.isHotTubWeekThree, constants.perfectPicks.isHotTubWeekThree, 'isHotTubWeekThree');    
        score += calculateBoolScore(picks.isVictoriaMarylynSurviveWeekThree, constants.perfectPicks.isVictoriaMarylynSurviveWeekThree, 'isVictoriaMarylynSurviveWeekThree');
    
        //WEEK 2
        score += calculateSingleAnswerScore(picks.firstOneOnOneDate, constants.perfectPicks.firstOneOnOneDate, 'firstOneOnOneDate')
        score += calculateBoolScore(picks.isTylerCameronApperanceWeek2, constants.perfectPicks.isTylerCameronApperanceWeek2, 'isTylerCameronApperanceWeek2');
        score += calculateBoolScore(picks.isHotTubWeekTwo, constants.perfectPicks.isHotTubWeekTwo, 'isHotTubWeekTwo');
        score += calculateBoolScore(picks.isLiveMusicPlayedWeekTwo, constants.perfectPicks.isLiveMusicPlayedWeekTwo, 'isLiveMusicPlayedWeekTwo');
        score += calculateSingleAnswerScore(picks.requiresMedicalAttentionWeekTwo, constants.perfectPicks.requiresMedicalAttentionWeekTwo, 'requiresMedicalAttentionWeekTwo');
        score += calculateSingleAnswerScore(picks.firstGroupDateRoseWeekTwo, constants.perfectPicks.firstGroupDateRoseWeekTwo, 'firstGroupDateRoseWeekTwo');
        score += calculateBoolScore(picks.isNewContestantIntroducedWeekTwo, constants.perfectPicks.isNewContestantIntroducedWeekTwo, 'isNewContestantIntroducedWeekTwo');
        score += calculateSingleAnswerScore(picks.firstInterruptionWeekTwo, constants.perfectPicks.firstInterruptionWeekTwo, 'firstInterruptionWeekTwo');

        //WEEK 1
        score += calculateSingleAnswerScore(picks.firstOutOfLimo, constants.perfectPicks.firstOutOfLimo, 'firstOutOfLimo');
        score += calculateSingleAnswerScore(picks.firstImpressionRose, constants.perfectPicks.firstImpressionRose, 'firstImpressionRose');
        score += calculateSingleAnswerScore(picks.isTylerCameronApperance, constants.perfectPicks.isTylerCameronApperance, 'isTylerCameronApperance');
        score += calculateSingleAnswerScore(picks.firstKiss, constants.perfectPicks.firstKiss, 'firstKiss');
        score += calculateSingleAnswerScore(picks.firstTears, constants.perfectPicks.firstTears, 'firstTears');
        score += calculateSingleAnswerScore(picks.firstWearingCostume, constants.perfectPicks.firstWearingCostume, 'firstWearingCostume');  
    
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
  
var calculateSingleAnswerScore = (pick, perfectPick, scoreMapKey) => {
    return pick === perfectPick ? constants.scoreMap[scoreMapKey] : 0;
}

var calculateMultipleCorrectAnswersScore = (pick, perfectPick, scoreMapKey) => {
    let score = 0;
    
    for(let i = 0; i < perfectPick.length; i++){
        if(perfectPick[i] === pick){
            score += constants.scoreMap[scoreMapKey];
            break;
        }
    }  

    return score;
}

var calculateBoolScore = (pick, perfectPick, scoreMapKey) => {
    return pick === perfectPick ? constants.scoreMap[scoreMapKey] : 0;    
}

