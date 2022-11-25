import React, { useEffect, useState } from "react";
import "./styles/main.css";

function App() {
  const [listUser, setListUser] = useState([]);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const getData = () => {
    fetch("https://63660b33046eddf1baf77f68.mockapi.io/api/v1/user")
      .then((res) => res.json())
      .then((data) => setListUser(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    for (let x of listUser) {
      if (x.email === input.email && x.password === input.password) {
        return alert("Login Succes");
      } else if (listUser.indexOf(x) === listUser.length - 1) {
        return alert("Login Gagal!");
      }
    }
  };

  console.log(input);

  return (
    <div>
      <form className="formLogin" onSubmit={handleLogin}>
        <div>
          <h1>ForUs</h1>
          <h2>Sign In</h2>
        </div>

        <label>Email</label>
        <input type="email" className="form-control" placeholder="Masukan email anda" required name="email" onChange={(e) => setInput({ ...input, email: e.target.value })} />
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Masukan email anda" required name="password" onChange={(e) => setInput({ ...input, password: e.target.value })} />

        <div className="check-label">
          <input type="checkbox" className="check-label" id="exampleCheck1" />
          <label className="check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <div>
          <span>Forget Password?</span>
        </div>
        <button className="button" type="submit">
          Login
        </button>
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
