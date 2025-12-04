

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
    player.seconds.push(seconds)
}