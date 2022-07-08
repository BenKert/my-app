import React, { useState } from "react";

export default function Add(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const resetInputs = () => {
    setTitle("");
    setDescription("");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    fetch("/v1/content/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.err) return alert("Invalid title or description");
        resetInputs();
      })
      .then(() => alert("Skill added"));
  };

  return (
    <div>
      <h2>Add new skill</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
