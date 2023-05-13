const selectToken = state => state.token;
const selectIsLoggedin = state => state.isLoggedin;
const selectName = state => state.user.name;

export { selectToken, selectIsLoggedin, selectName };
