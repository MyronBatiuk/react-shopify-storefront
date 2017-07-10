function search(state = [], action) {
  switch(action.type) {
    case 'GET_SEARCH_RESULTS' :
      return action.data;
    default:
      return state;
  }
}
export default search;
