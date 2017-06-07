function homepage(state = [], action) {
  switch(action.type) {
    case 'GET_HOME_PAGE' :
      return action.data;
    default:
      return state;
  }
}
export default homepage;
