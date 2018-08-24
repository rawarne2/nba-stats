import NBA from 'nba'
import store from './store'
import axios from 'axios'
import * as types from './actionTypes'


export const requestPlayer = () => {
  return {
    type: types.REQUEST_PLAYER
  }
}

export const foundPlayer = (name) => {
    return {
        type: types.FOUND_PLAYER,
        payload: name
    }
}

export const foundStats = (stats) => {
    return {
        type: types.FOUND_STATS,
        payload: stats
    }
}

export const failurePlayer = (error) => {
    return {
        type: types.FAILURE_PLAYER,
        payload: error
    }
} 

export const playerImage = (image) => {
    return {
        type: types.PLAYER_IMAGE,
        payload: image
    }
}

export const playerInfo = playerName => {
    store.dispatch(requestPlayer())
        store.dispatch(foundPlayer(NBA.findPlayer(playerName)))
}


export const fetchPlayerStats = (name) => { //split this up since there are calls to 2 different APIs
    store.dispatch(requestPlayer())
    NBA.stats.playerStats()
    .then(res => {
        return res.leagueDashPlayerStats
        .find(val => val.playerName === name)
    })
    .then(res => {
            if(res){
            store.dispatch(foundStats(res))
            let firstName = store.getState().firstName
            let lastName = store.getState().lastName
            axios.get(`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`)
            .then( res => {
                store.dispatch(playerImage(res.request.responseURL))
            })
        }
        else{
            alert("This player is inactive")
        }
    })
    .catch((error) => {
        store.dispatch(failurePlayer(error))
    })
}

//add error handling for rookies, retired players, or players that did not have a stat last year
//throw error "player not found" instead of crashing
//have team stats search
//compare players stats. Green background if better, red if worse.
//show trends from year to year


//the reason why I am searching for playerId then using that to find info about that player is because if you search by full name or first and last together,
//you have to type it in completely. finding the id first finds the closest guess. 


//tests from docs>>   https://github.com/bttmly/nba/blob/28160d5c6416d4b125335625c537251a9221ed7c/test/integration/stats.js


//player images: https://nba-players.herokuapp.com/players/:lastName/:firstName
//player images:>>>> http://stats.nba.com/media/players/230x185/{idPlayer}.png

