import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Home from "./Home";
import AddBook from "./AddBook";
import ShowBook from "./ShowBook";
//we want to make app component tidy and set router here,
// better to create a new component for home page, let's call it Home
//and move all the login logic into Login component
//move all the logout logic and showing things to Home component
//we don't want to hold 2 copies of code, so we isolate the login/logout logic into userAuth.js

//now we are facing problems: we gets user in Login component and uses it in Home component
// an approach is to move the user status to App and pass it to Login component and Home component.
// just do it

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser}></Login>}
        ></Route>
        <Route
          path="/"
          element={<Home user={user} setUser={setUser}></Home>}
        ></Route>
        <Route
          path="/addbook"
          element={<AddBook user={user}></AddBook>}
        ></Route>
        <Route
          path="/book/:id"
          element={<ShowBook user={user}></ShowBook>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

//As routes become more and more, most of the pages we need to verify the user, that means we have to pass the user object to everypage
// even every component, it is too boring, right? How to solve it? Context Hook is an ideal way for it

export default App;
