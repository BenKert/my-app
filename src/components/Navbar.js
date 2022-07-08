import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// Dar reikia log in/out funkciju

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="../../public/images/logo.svg" />
      </Link>
      <div>
        <>
          <Link to="/">
            <Button variant="text">Home</Button>
          </Link>
          <Link to="/add">
            <Button variant="text">Add</Button>
          </Link>
          <Button variant="text" color="error" /* onClick={} */>
            Logout
          </Button>
        </>
        <>
          <Link to="/login">
            <Button variant="text">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </>
      </div>
    </nav>
  );
}
