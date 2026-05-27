import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [displayArray, setDisplayArray] = useState([]);
  
   const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const arr = inputValue
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v !== "" && !isNaN(Number(v)))
        .map(Number);

      setDisplayArray(arr);
    } catch (err) {
      console.error("Invalid input", err);
      setDisplayArray([]);
    }
  };

  return (
    <>
      <div className="w-screen grid h-screen place-items-center">
        <div className="flex flex-col items-center">
          <p className="text-3xl mb-5">Shortest Sum Finder</p>

          <form className="max-w-sm mx-auto  items-center" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                for="user_input"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                User Input
              </label>
              <input
                type="text"
                id="user_input"
                className="bg-[#212121] border border-default-medium text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs"
                value={inputValue}
                placeholder="Enter numbers separated by comma"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                for="result"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Result Number
              </label>
              <input
                type="number"
                id="result"
                className="bg-[#212121] border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Find Result
            </button>
          </form>

          <div className="items-center flex gap-2 mt-3">
          {Array.isArray(displayArray) && displayArray.length > 0 ? (
            displayArray.map((item, index) => (
              <p className="p-4 bg-amber-300 text-slate-800 border-2 rounded-xl border-amber-50" key={index}>{item}</p>
            ))
          ) : (
            <p className="items-center flex mt-3">No items to display</p>
          )}
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
