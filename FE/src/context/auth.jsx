import { createContext, useContext, useEffect, useState } from "react";
import localForage from "localforage";

export const AuthContext = createContext({
  isInitiallyLoaded: false,
  token: "",
  saveToken: async (token) => {},
  removeToken: async () => {},
});

const tokenKey = "userToken";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [isInitiallyLoaded, setIsInitiallyLoaded] = useState(false);
  const [token, setToken] = useState("");
  const saveToken = async (token) => {
    setToken(token);
    await localForage.setItem(tokenKey, token.data.token);
  };

  useEffect(() => {
    localForage.getItem(tokenKey).then((token) => {
      if (token) {
        setToken(token);
      }
      setIsInitiallyLoaded(true);
    });
  }, []);

  const removeToken = async () => {
    setToken();
    await localForage.removeItem(tokenKey);
  };

  return (
    <AuthContext.Provider
      value={{ token, isInitiallyLoaded, saveToken, removeToken }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
