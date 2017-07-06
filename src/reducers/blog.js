function blog(state = [], action) {
  switch(action.type) {
    case 'GET_BLOG_ARTICLES' :
      return action.data;
    default:
      return state;
  }
}
export default blog;
