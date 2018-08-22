const initialState = {
    firstName: '', 
    lastName: '',
    playerId: 0,
    teamId: 0,
    fullName: '',
    isFetching: false,
    error: '',
    points: 0,
    playerImg: null
  }

const playerInfoReducer = (state = initialState, action) => {
    switch(action.type) {
      case "FETCH_PLAYER_REQUEST":
        return Object.assign({}, state, { isFetching: true })
      case "FETCH_PLAYER_SUCCESS": 
        return Object.assign({}, state, {
            isFetching: false, 
            playerId: action.payload.playerId, 
            fullName:action.payload.fullName,
            teamId: action.payload.teamId,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
        })
      case "FETCH_STATS_SUCCESS": 
        return Object.assign({}, state, {
            isFetching: false, 
            points: action.payload.pts
            })
      case "PLAYER_IMAGE":
        return Object.assign({}, state, {
            isFetching: false,
            playerImg: action.payload
        })
      case "FETCH_PLAYER_FAILURE":
        return Object.assign({}, state, { isFetching: false, error: action.error })
      default:
        return state
    }
  }
  
  export default playerInfoReducer