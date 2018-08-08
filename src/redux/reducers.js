const initialState = {
    // firstName: '',
    // lastName: '',
    playerId: 0,
    teamId: 0,
    fullName: '',
    // downcaseName: '', 
    isFetching: false,
    error: ''
  }

const playerInfoReducer = (state = initialState, action) => {//fullName is set to state, team and player ID loaded from API
    switch(action.type) {
      case "FETCH_PLAYER_REQUEST":
        return Object.assign({}, state, { isFetching: true })
      case "FETCH_PLAYER_ID_SUCCESS": 
        return Object.assign({}, state, { isFetching: false, playerId: action.payload })
    //   case "FETCH_PLAYER_INFO_SUCCESS": 
    //     return Object.assign({}, state, { isFetching: false, fullName: action.payload })
      case "FETCH_PLAYER_FAILURE":
        return Object.assign({}, state, { isFetching: false, error: action.error })
      default:
        return state
    }
  };
  
  export default playerInfoReducer;