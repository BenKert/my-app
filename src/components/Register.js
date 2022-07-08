import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    fetch("v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail,
        pass,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.changes === 1) return navigate("/login");
        alert("Somethign went wrong");
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <button>Register</button>
      </form>
    </div>
  );
}
