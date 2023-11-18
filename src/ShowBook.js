import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ShowBook({ user }) {
  const navigate = useNavigate();
  const bookid = useParams();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  console.log(bookid);
  return <h1>Show book content</h1>;
}

export default ShowBook;
