export default {
    createPlayer,
    addSolveTime,
    showStats
}

function createPlayer(playerName) {
    if (!playerName) {
        throw new Error('player name is required')
    }
    return {
        playerName,
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
    console.log(`Good job ${player.playerName}`);
    console.log(`Total time : ${totalTime} secondes`);
    console.log(`Avg time per riddle : ${avgTime} secondes`);

    return ''
}

