import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); 
    } catch {
      setInput("Erreur");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <div className="text-right mb-4 p-2 bg-gray-100 rounded font-mono text-xl">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
          <button
            key={btn}
            className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={
              btn === "C"
                ? handleClear
                : btn === "="
                ? calculateResult
                : () => handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
