"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((c) => c + 1);
  }

  return (
    <button
      className="p-2 bg-orange-600 text-slate-800 font-bold rounded"
      onClick={handleIncrement}
    >
      Increment {count}
    </button>
  );
}
