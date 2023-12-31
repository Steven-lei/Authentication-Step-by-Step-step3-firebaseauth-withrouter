import { useNavigate } from "react-router-dom";
import { logOut } from "./UserAuth";
import BookList from "./BookList";

function Home({ user }) {
  async function handleLogOut() {
    await logOut();
  }
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  return (
    <div className="App">
      <h1> THis content is for everyone</h1>
      {user && (
        <>
          <h1>This content only loged use can see it</h1>
          <h2>welcome:{user.name}</h2>
          <p>email:{user.email}</p>
          <p>role:{user.role}</p>

          <button onClick={handleLogOut}>logout</button>

          <button
            onClick={() => {
              navigate("/addbook");
            }}
          >
            addbook
          </button>
          <BookList user={user} />
        </>
      )}
      {!user && <button onClick={handleLogin}>logIn</button>}
    </div>
  );
}
export default Home;
