// code your solution here
function saturdayFun(where="roller-skate"){
    return `This Saturday, I want to ${where}!`
}
function mondayWork(where="go to the office"){
     return`This Monday, I will ${where}.`
}

function wrapAdjective(sign = "*" )
{
    return function(name){
        return `You are ${sign}${name}${sign}!`
    }
}