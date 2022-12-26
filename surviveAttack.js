function hasSurvived(attackers, defenders){
    let attackSurvivors = 0
    let defenderSurvivors = 0
    let noSurvivors = 0
    
    let numAttackers = attackers.length
    let numDefenders = defenders.length
    
    if (numAttackers > numDefenders){
        for (let i = 0; i < numAttackers; i++){
          if (attackers[i] > defenders[i] || defenders[i] === undefined) {
            attackSurvivors++
          } else if (attackers[i] === defenders[i]) {
            noSurvivors++
          } else {
            defenderSurvivors++
          }
        }
    } else {
        for (let i = 0; i < numDefenders; i++) {
          if (defenders[i] > attackers[i] || attackers[i] === undefined){
            defenderSurvivors++
          } else if (defenders[i] === attackers[i]){
            noSurvivors++
          } else {
            attackSurvivors++
          }
        }
    }

    console.log(attackSurvivors)
    console.log(defenderSurvivors)

    if (attackSurvivors > defenderSurvivors) {
        return false
    } else if (attackSurvivors < defenderSurvivors) {
        return true
    }

    if (attackers.reduce((acc, cur) => acc + cur) < defenders.reduce((acc, cur) => acc + cur) || attackers.reduce((acc, cur) => acc + cur) === defenders.reduce((acc, cur) => acc + cur)) {
        return true
    } else {
        return false
    }
}



console.log(hasSurvived([1, 3, 5, 7], [1, 4, 6, 8]))
// console.log(hasSurvived([10, 10, 15, 17], [2, 4, 160]))
// console.log(hasSurvived([13, 67, 8, 2, 95, 94, 24, 49, 19, 67], [83, 70, 100, 55, 48, 49, 27, 49, 32, 92]))