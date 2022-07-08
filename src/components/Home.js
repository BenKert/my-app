import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");
    fetch("/v1/content/skills", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.err) return navigate("/login");
        setSkills(res);
      });
  }, [token, navigate]);

  return (
    <div>
      {skills.length === 0 ? (
        <p>No skills yet...</p>
      ) : (
        <div>
          {skills.map((skill) => (
            <div key={skill.id}>
              <h3>{skill.title}</h3>
              <h4>{skill.description}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
