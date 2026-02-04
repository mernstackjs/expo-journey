import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthTypes = {
  isLoggedIn: boolean;
  isLoading: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthTypes>({
  isLoggedIn: false,
  isLoading: true,
  logIn: () => {},
  logOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  function logIn() {
    setIsLoggedIn(true);
    setIsLoading(false);
    router.replace("/");
  }
  function logOut() {
    setIsLoggedIn(false);
    setIsLoading(false);
    router.replace("/login");
  }

  return (
    <AuthContext.Provider value={{ isLoading, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
