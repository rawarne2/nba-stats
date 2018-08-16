const initialState = {
    // firstName: '',
    // lastName: '',
    playerId: 0,
    teamId: 0,
    fullName: '',
    // downcaseName: '', 
    isFetching: false,
    error: '',
    points: 0
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
            teamId: action.payload.teamId })
      case "FETCH_STATS_SUCCESS": 
        return Object.assign({}, state, {
            isFetching: false, 
            points: action.payload.pts
            })
      case "FETCH_PLAYER_FAILURE":
        return Object.assign({}, state, { isFetching: false, error: action.error })
    //   case "REMOVE_PLAYER_STATS":
    //     const newState = Object.assign({}, state)
        
      default:
        return state
    }
  };
  
  export default playerInfoReducer;

  //search first and last name separately. account for nickname