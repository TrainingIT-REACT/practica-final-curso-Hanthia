// define the list of actions
const actions = [
    // Todos
    // "ADD_USER_SONG",
    // "ADD_USER_ALBUM",
    // "SERVER_ALBUMS",
    // "SERVER_SONGS",
  
    // Usuarios
    "SIGN_USER"
  ];
  
  // Convert actions to an object
  const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;
  });
  
  export default actionTypes;