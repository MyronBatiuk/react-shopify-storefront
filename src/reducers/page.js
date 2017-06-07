function page(state = [], action) {
  switch(action.type) {
    case 'GET_PAGE' :
      return action.data;
    default:
      return state;
  }
}
export default page;
