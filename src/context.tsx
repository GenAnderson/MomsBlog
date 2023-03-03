import { createContext, ReactNode } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { any } from "zod";

type Props = { children: ReactNode };

export const AuthContext = createContext({
  username: "empty",
  setusername: () => null,
  password: "empty",
  setpassword: () => [],
  authenticated: false,
  setauthenticated: () => null,
});

// const authContextDefaultValues = {
//   username: "testing",
//   setusername: null,
//   password: "",
//   setpassword: " ",
//   authenticated: null,
//   setauthenticated: false,
// };

// export const AuthContext = createContext<authContextType>();

// export function useAuth() {
//   return useContext(AuthContext);
// }

export const AuthProvider = ({ children }: any) => {
  // const router = useRouter();

  // const [username, setusername] = useState<string>();
  // const [password, setpassword] = useState<string>();
  // const [authenticated, setauthenticated] = useState<boolean>(false);

  // const users = [{ username: "LuJean", password: "test" }];

  // const handleLoginName = (e: any): void => setusername(e.target.value);
  // const handlePassword = (e: any): void => setpassword(e.target.value);

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   const account = users.find((user) => user.username === username);

  //   if (account && account.password === password) {
  //     setauthenticated(true);
  //     router.replace("/blogs/create-blog");
  //   }
  // };

  const [username, setusername] = useState({});
  const [password, setpassword] = useState({});
  const [authenticated, setauthenticated] = useState(false);

  const value: any = [
    username,
    setusername,
    password,
    setpassword,
    authenticated,
    setauthenticated,
  ];
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};
