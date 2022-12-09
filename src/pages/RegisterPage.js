import React from "react";
import { addUser } from "../utils/data";
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  function onAddUserHandler(user) {
    addUser(user);
    navigate("/login");
    navigate(0);
  }

  return (
    <section>
      <Register addUser={onAddUserHandler} />
    </section>
  );
}

export default RegisterPage;
