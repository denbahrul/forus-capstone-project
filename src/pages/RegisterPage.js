import React from "react";
import { addUser } from "../utils/data";
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  function onAddUserHandler(user) {
    addUser(user);
    navigate("/");
    return alert("Pendaftaran berhasil! Login untuk melanjutkan");
  }

  return (
    <section>
      <Register addUser={onAddUserHandler} />
    </section>
  );
}

export default RegisterPage;
