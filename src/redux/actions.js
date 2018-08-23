import NBA from 'nba'
import store from './store'
import axios from 'axios'


export const FETCH_PLAYER_REQUEST = "FETCH_PLAYER_REQUEST"
export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS"
export const FETCH_PLAYER_FAILURE = "FETCH_PLAYER_FAILURE"
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS"
export const PLAYER_IMAGE = "PLAYER_IMAGE"


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

export const playerImage = (image) => {
    return {
        type: PLAYER_IMAGE,
        payload: image
    }
}

export const playerInfo = playerName => {
    store.dispatch(requestPlayer())
    store.dispatch(foundPlayer(NBA.findPlayer(playerName)))
}


export const fetchPlayerStats = (name) => {
    store.dispatch(requestPlayer())
    NBA.stats.playerStats()
    .then(res => {
        return res.leagueDashPlayerStats
        .find(val => val.playerName === name)
    })
    .then(res => {
        store.dispatch(foundStats(res))
         let firstName = store.getState().firstName
         let lastName = store.getState().lastName
        axios.get(`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`)
        .then( res => {
            store.dispatch(playerImage(res.request.responseURL))
        }
    )
    })
    .catch((error) => {
        alert("Somthing went wrong!")
    })
}

//add error handling (in PlayerSearch store.dispatch(failurePlayer(error) when there is an error))
//throw error "player not found" instead of crashing
//compare players stats. Green background if better, red if worse.
//show trends from year to year


//the reason why I am searching for playerId then using that to find info about that player is because if you search by full name or first and last together,
//you have to type it in completely. finding the id first finds the closest guess. 


//tests from docs>>   https://github.com/bttmly/nba/blob/28160d5c6416d4b125335625c537251a9221ed7c/test/integration/stats.js


//player images: https://nba-players.herokuapp.com/players/:lastName/:firstName
//player images:>>>> http://stats.nba.com/media/players/230x185/{idPlayer}.png

