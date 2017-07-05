function search(state = [], action) {
  switch(action.type) {
    case 'GET_SEARCH_RESULTS' :
      return action.data;
    case 'CLEAN_SEARCH' :
      return []
    default:
      return state;
  }
}
export default search;
