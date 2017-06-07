function header(state = [], action) {
  switch(action.type) {
    case 'GET_HEADER' :
      return action.data;
    default:
      return state;
  }
}
export default header;
