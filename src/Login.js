import { useEffect, useState } from "react";
import { logIn, logOut } from "./UserAuth";
import { useNavigate } from "react-router-dom";
function Login({ user, setUser }) {
  const [account, setAccount] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  //const [user, setUser] = useState(null);
  //we use user object in App component now

  const navigate = useNavigate();
  async function handleLogin() {
    console.log("handleLogin");
    try {
      const credential = await logIn(account, password);
      console.log(credential);
      //when login successfully, we should go to home page to show protected data
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        height: "300px",
        border: "3px solid green",
      }}
    >
      <input
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
export default Login;
