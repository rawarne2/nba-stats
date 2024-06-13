const initialState = {
  isFetching: false,
  error: '',
  allPlayers: [],
  selectedPlayer: {
    firstName: null,
    lastName: null,
    age: null,
    pts: null,
    reb: null,
    ast: null,
    height: null,
    playerImg: null,
    playerId: null,
  },
};

const playerInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOUND_ALL_PLAYERS':
      const allPlayersArr = [];
      for (let i = 0; i < action.payload.length; i++) {
        const { name, age, pts, reb, ast, ht_in, img_url } = action.payload[i];
        const nameArr = name.split(' ');
        const fn = nameArr[0];
        const ln = nameArr.slice(1).join(' ');
        allPlayersArr.push({
          firstName: fn,
          lastName: ln,
          age: age,
          pts: pts,
          reb: reb,
          ast: ast,
          height: ht_in,
          playerImg: img_url,
          playerId: img_url.match(/([^/]+)(?=\.[^.]+$)/)[1],
        });
      }
      return Object.assign({}, state, {
        allPlayers: allPlayersArr,
        isFetching: false,
      });
    case 'REQUEST_PLAYER':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'FOUND_PLAYER':
      return Object.assign({}, state, {
        isFetching: false,
        selectedPlayer: action.payload,
      });
    case 'FOUND_STATS':
      return Object.assign({}, state, {
        isFetching: false,
        pStats: action.payload,
      });
    case 'PLAYER_IMAGE':
      return Object.assign({}, state, {
        isFetching: false,
        playerImg: action.payload,
      });
    case 'FAILURE_PLAYER':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload,
      });
    default:
      return state;
  }
};

export default playerInfoReducer;
