import React from "react";
import { addArgument } from "../utils/api";
import "../styles/add.css";
import ArgumentInput from "../components/ArgumentInput";

function AddPage() {

  async function onAddArgumentHandler(argument) {
    await addArgument(argument);
  }

  return (
    <section>
      <ArgumentInput addArgument={onAddArgumentHandler} />
    </section>
  );
}

export default AddPage;
