import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookList({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return <h1>fetch booklist from firestore</h1>;
}
export default BookList;
