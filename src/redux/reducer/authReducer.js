const initState = {
    isLoggedIn: false,
};


const AuthReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
         isLoggedIn: true,
        };
      }
      case "LOGOUT": {
        return {
         isLoggedIn: false,
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;