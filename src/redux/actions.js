import fetch from 'cross-fetch'
import NBA from 'nba'
import store from './store'
import axios from 'axios'


// console.log(NBA.findPlayer('Steph'))
// NBA.stats.playerInfo({ PlayerID: 201939}).then((res)=>{console.log(res.commonPlayerInfo[0].displayFirstLast, res.commonPlayerInfo[0].height)})
// NBA.stats.teamStats().then((res) => { console.log(res.find(elem => elem.teamName === "Chicago Bulls")) })
// NBA.stats.playerStats().then((res) => { return res.leagueDashPlayerStats.find((arr) => { arr.playerName === "Stephen Curry" }) })
// let allStats = async (name)=> {
//     let stats = await NBA.stats.playerStats() 
//     let id = await stats.leagueDashPlayerStats.find((arr) => {
//         return arr.playerName === name
//     })
//     console.log(id)
// }
// allStats("stephen curry")

export const FETCH_PLAYER_REQUEST = "FETCH_PLAYER_REQUEST"
export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS"
export const FETCH_PLAYER_FAILURE = "FETCH_PLAYER_FAILURE"
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS"
export const REMOVE_PLAYER_STATS = "REMOVE_PLAYER_STATS"


export const remove = () => {
    return {
        type: REMOVE_PLAYER_STATS,
    }
}

export const requestPlayer = () => {
  return {
    type: FETCH_PLAYER_REQUEST
  }
}

export const foundPlayer = (name) => {
    return {
        type: FETCH_PLAYER_SUCCESS,
        payload: name
    }
}

export const foundStats = (stats) => {
    return {
        type: FETCH_STATS_SUCCESS,
        payload: stats
    }
}

export const failurePlayer = (error) => {
    return {
        type: FETCH_PLAYER_FAILURE,
        error
    }
} 

export const fetchPlayer = playerName => {
    store.dispatch(requestPlayer())
    store.dispatch(foundPlayer(NBA.findPlayer(playerName)))
}



export const fetchPlayerStats = (name) => {
    store.dispatch(requestPlayer())
    return NBA.stats.playerStats()
    .then(res => {
        return res.leagueDashPlayerStats
        .find(val => val.playerName == name)
        // console.log("STATS>>",stats)
    })
    .then(res => {
        console.log("res>>>", res)
        store.dispatch(foundStats(res))
    })
    .catch((error) => {
        alert("Somthing went wrong!")
    })
}

export const removeStats = stats => {
    store.dispatch(remove())
}
//add error handling (in PlayerSearch store.dispatch(failurePlayer(error) when there is an erro))       error is second argument in .then or use try catch
//only throw an error onSubmit (when you are typing a name and use a space, it might throw an error)
//compare players stats. Green background if better, red if worse.
//start off with common stats but have the option of adding additional stats
//show trends from year to year


//the reason why I am searching for playerId then using that to find info about that player is because if you search by full name or first and last together,
//you have to type it in completely. finding the id first finds the closest guess. 


// tests from docs>>   https://github.com/bttmly/nba/blob/28160d5c6416d4b125335625c537251a9221ed7c/test/integration/stats.js


