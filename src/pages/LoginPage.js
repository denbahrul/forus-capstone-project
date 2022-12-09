import React, { useEffect, useState } from "react";
import { getUser } from "../utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [listUser, setListUser] = useState([]);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    getUser().then((data) => setListUser(data));
  }, []);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    for (let x of listUser) {
      if (x.email === input.email && x.password === input.password) {
        localStorage.setItem('id', x.id);
        navigate("/home");
        navigate(0);

      } else if (listUser.indexOf(x) === listUser.length - 1) {
        return alert("Login Gagal!");
      }
    }
  };
  console.log(listUser);
  console.log(input);

  return (
    <div className="login-register">
      <div className="form-login">
        <h1 className="for-us">ForUs.</h1>
      <form onSubmit={handleLogin}>
        <div>
          <h2>Masuk </h2>
        </div>

        <label>Email</label>
        <input type="email" className="form-control" placeholder="Masukan email anda" required name="email" onChange={(e) => setInput({ ...input, email: e.target.value })} />
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Masukan password" required name="password" onChange={(e) => setInput({ ...input, password: e.target.value })} />

        <div className="check-label">
          <input type="checkbox" className="checkmark" id="exampleCheck1" />
          <label className="check-label" htmlFor="exampleCheck1">
            Ingat Saya
          </label>
        </div>
        <button className="button-submit" type="submit">
          Masuk
        </button>
        <p>Belum punya akun? <Link to="/register"><b>Daftar.</b></Link> </p>
      </form>
      </div>
      <div className="background-login-register">
        <img src="./ilustrasi.png" alt="ilustrasi diskusi"></img>
        <h2>Sampaikan aspirasi-mu disini!</h2>
      </div>
    </div>
  );
}

export default LoginPage;