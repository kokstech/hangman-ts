import React, { useState } from "react";

export default function Login(props: any) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function updateForm(value: any) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e: any) {
    e.preventDefault();

    const player = { ...form };

    await fetch("https://hangman-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    })
      .then((res) => {
        if (res.status === 200) {
          props.playHangman();
        }
      })
      .catch((error) => {
        window.alert(error);
        return;
      });

    setForm({ username: "", password: "" });
  }

  return (
    <div className="container w-25">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.username}
            onChange={(e) => updateForm({ username: e.currentTarget.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.password}
            onChange={(e) => updateForm({ password: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Play the game"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}