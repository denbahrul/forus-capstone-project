import React from "react";
import { addArgument } from "../utils/api";
import ArgumentInput from "../components/ArgumentInput";

function AddPage() {

  async function onAddArgumentHandler(note) {
    await addArgument(note);
  }

  return (
    <section>
      <ArgumentInput addArgument={onAddArgumentHandler} />
    </section>
  );
}

export default AddPage;
