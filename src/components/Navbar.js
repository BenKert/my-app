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
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/add">
              <button>Add</button>
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Log-in</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
