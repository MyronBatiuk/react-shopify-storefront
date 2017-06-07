function collection(state = [], action) {
  switch(action.type) {
    case 'GET_COLLECTION' :
      return action.data;
    default:
      return state;
  }
}
export default collection;
