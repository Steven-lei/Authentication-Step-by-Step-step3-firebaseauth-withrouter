import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddBook({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return <h1> Adding book do submit book to firebase database below</h1>;
}
export default AddBook;
