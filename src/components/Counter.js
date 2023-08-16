import { useState } from "react";
import Button from "./Button";

function Counter(props) {
  let [value, setValue] = useState(0);

  return (
    <Button
      title={value}
      fun={() => {
        setValue(value++);
      }}
    />
  );
}

export default Counter;
