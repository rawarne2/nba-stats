const initialState = {
    firstName: '', 
    lastName: '',
    playerId: 0,
    teamId: 0,
    fullName: '',
    isFetching: false,
    error: '',
    points: 0,
    playerImg: null,
    allPlayers: []
  }

const playerInfoReducer = (state = initialState, action) => {
    switch(action.type) {
      case "FOUND_ALL_PLAYERS":
        return Object.assign({}, state, { 
          allPlayers: action.payload, 
          isFetching: false 
        })
      case "REQUEST_PLAYER":
        return Object.assign({}, state, { 
          isFetching: true 
        })
      case "FOUND_PLAYER": 
        return Object.assign({}, state, {
            isFetching: false, 
            playerId: action.payload.playerId, 
            fullName:action.payload.fullName,
            teamId: action.payload.teamId,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
        })
      case "FOUND_STATS": 
        return Object.assign({}, state, {
            isFetching: false, 
            points: action.payload.pts
          })
      case "PLAYER_IMAGE":
        return Object.assign({}, state, {
            isFetching: false,
            playerImg: action.payload
        })
      case "FAILURE_PLAYER":
        return Object.assign({}, state, { 
          isFetching: false, 
          error: action.payload })
      default:
        return state
    }
  }
  
  export default playerInfoReducer

