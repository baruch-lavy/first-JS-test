

function createPlayer(playerName) {
    if (!playerName) {
        throw new Error('player name is required')
    }
    return {
        playerName:playerName,
        times:[]
    }
}

/**
 * @param {Object} player 
 * @param {Number} seconds 
 */
function addSolveTime(player, seconds) {
    player.times.push(seconds)
}


function showStats(player) {
    const times = player.times
    const totalTime = times.reduce((acc,seconds) => {
        return acc + seconds
    },0)

    const avgTime = totalTime / times.length

    console.log(`total time : ${totalTime}`);
    console.log(`avg time : ${avgTime}`);
    
    return ''
}

const player = createPlayer('baruch')
addSolveTime(player,10)
addSolveTime(player,20)
addSolveTime(player,3)
console.log(player);
console.log(showStats(player));