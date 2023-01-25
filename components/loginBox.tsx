import styles from "./layout/allLayout.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

import { useContext } from "react";
import { AuthContext } from "../src/context";

function LoginBox() {
  const router = useRouter();

  const {
    username,
    setusername,
    password,
    setpassword,
    authenticated,
    setauthenticated,
  } = useContext(AuthContext);

  // const [username, setusername] = useState();
  // const [password, setpassword] = useState();
  // const [authenticated, setauthenticated] = useState(
  //   false
  //   // localStorage.getItem(localStorage.getItem("authenticated" || false))
  // );

  const users = [{ username: "LuJean", password: "test" }];

  const handleLoginName = (e: any) => {
    setusername("test");
  };
  const handlePassword = (e: any) => setpassword(e.target.value);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const account = users.find((user) => user.username === username);

    if (account && account.password === password) {
      setauthenticated(true);
      router.replace("/blogs/create-blog");
    }
  };

  return (
    <div className={styles.loginBox}>
      <form onSubmit={handleSubmit}>
        <input
          className="inputText"
          type="text"
          id="loginName"
          name="loginName"
          placeholder="Login Name"
          onChange={handleLoginName}
        />
        <input
          className="inputText"
          type="text"
          id="loginPass"
          name="loginPass"
          placeholder="Password"
          onChange={handlePassword}
        />
        <input type="submit" value="Submit" className="submitBtn" />
      </form>
    </div>
  );
}

export default LoginBox;
