import React, { useContext, useState } from "react";

const AuthStatus = React.createContext();
const SetAuthStatus = React.createContext();

export function useAuthStatus() {
  return useContext(AuthStatus);
}
export function useChangeStatus() {
  return useContext(SetAuthStatus);
}

function AuthContext({ children }) {
  const [authStatus, setauthStatus] = useState(true);
  function changeStatus() {
    setauthStatus((a) => !a);
  }
  return (
    <AuthStatus.Provider value={authStatus}>
      <SetAuthStatus.Provider value={changeStatus}>
        {children}
      </SetAuthStatus.Provider>
    </AuthStatus.Provider>
  );
}

export default AuthContext;
