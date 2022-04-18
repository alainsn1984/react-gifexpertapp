import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />

      <p>
        Counter: <Small value={counter} />
      </p>
      <button className="btn btn-primary ml-3" onClick={increment}>
        + 1
      </button>
      <button className="btn btn-success" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
