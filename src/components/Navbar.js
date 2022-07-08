import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">
        <img alt="logo" src="../../public/images/logo.svg" />
      </Link>
      <div>
        {loggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Log-in</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
