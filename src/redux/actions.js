import fetch from 'cross-fetch'
import NBA from 'nba'
import store from './store'


export const FETCH_PLAYER_REQUEST = "FETCH_PLAYER_REQUEST"
export const FETCH_PLAYER_ID_SUCCESS = "FETCH_PLAYER_ID_SUCCESS"
export const FETCH_PLAYER_FAILURE = "FETCH_PLAYER_FAILURE"



export const requestPlayer = (name) => {
  return {
    type: FETCH_PLAYER_REQUEST,
    payload: name
  }
}

export const foundPlayerId = (typedName) => {
    return {
        type: FETCH_PLAYER_ID_SUCCESS,
        payload: typedName
    }
}

export const failurePlayer = (error) => {
    return {
        type: FETCH_PLAYER_FAILURE,
        error
    }
} 

// let playerID = NBA.findPlayer('Steph').playerID

// export const fetchStats = (playerStats) => {
//     store.dispatch(requestPlayer(playerStats))
//     return NBA.findPlayer(playerStats).playerID
//             .then(playerID => {
//                 fetch(`https://stats.nba.com/stats/commonplayerinfo?PlayerID=${playerID}`)
//             })
//             .then(response => store.dispatch(foundPlayer(response)))
//             .then(console.log(store.getState()))
// }


export const fetchPlayer = playerName => {
    store.dispatch(requestPlayer(playerName))
    store.dispatch(foundPlayerId(NBA.findPlayer(playerName).playerId))
}
//add error handling 