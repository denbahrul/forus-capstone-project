import { useState } from "react";

function useInput(defaulValue = "") {
  const [value, setValue] = useState(defaulValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

export default useInput;