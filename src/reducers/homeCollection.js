function homeCollection(state = [], action) {
  switch(action.type) {
    case 'GET_HOME_COLLECTION' :
      return action.data;
    default:
      return state;
  }
}

export default homeCollection;
