export const LOAD_PLAYER = "LOAD_PLAYER";

export const loadPlayer = (name) => {
  return {
    type: LOAD_PLAYER,
    payload: name
  }
}