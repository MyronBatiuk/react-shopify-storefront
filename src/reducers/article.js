function article(state = [], action) {
  switch(action.type) {
    case 'GET_ARTICLE' :
      return action.data;
    default:
      return state;
  }
}
export default article;
