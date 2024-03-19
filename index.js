// code your solution here
// Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". Run npm test to verify you've gotten the first set of tests passing before continuing with the lesson.

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }

//   Implement a function expression called mondayWork. The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". Run npm test to verify you've gotten this set of tests passing before continuing with the lesson.

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(visFlair = "*"){
    return function(adjective = "special"){
        return `You are ${visFlair}${adjective}${visFlair}!`
    }
}   

// const encouragingPromptFunction = wrapAdjective("!!!")
// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"