export const user = { email: "", password: "", isLoggedIn: false };

export const logOut = () => {
  user.isLoggedIn = false;
};

export const AppContext = React.createContext({ user, logOut });

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;