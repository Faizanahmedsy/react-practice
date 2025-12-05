import { useEffect, useState } from "react";
import "./App.css";

// ✅ Importing ready-made UI components from shadcn
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * ============================
 * ✅ MAIN APP COMPONENT
 * ============================
 * This file demonstrates:
 * 1. useState  → to store values
 * 2. useEffect → to react to value changes
 * 3. onClick   → to handle button click
 * 4. Select    → dropdown input
 * 5. Tailwind  → styling with classes
 */
function App() {
  /**
   * ✅ count = the number shown on screen
   * ✅ setCount = function used to change the number
   * ✅ useState(0) = default value is 0
   */
  const [count, setCount] = useState(0);

  /**
   * ✅ selectedColor = value selected from dropdown
   * ✅ default value is "blue"
   */
  const [selectedColor, setSelectedColor] = useState("blue");

  /**
   * ✅ backgroundClass = Tailwind class used for page background
   */
  const [backgroundClass, setBackgroundClass] = useState("bg-blue-400");

  /**
   * ============================
   * ✅ useEffect HOOK
   * ============================
   * This runs AUTOMATICALLY whenever "selectedColor" changes.
   *
   * Think like:
   * "When user changes dropdown → run this code"
   */
  useEffect(() => {
    if (selectedColor === "blue") setBackgroundClass("bg-blue-400");
    if (selectedColor === "slate") setBackgroundClass("bg-slate-400");
    if (selectedColor === "yellow") setBackgroundClass("bg-yellow-400");
    if (selectedColor === "purple") setBackgroundClass("bg-purple-400");
  }, [selectedColor]); // 👈 Dependency array
  // This tells React:
  // "Only run this effect when selectedColor changes"

  /**
   * ============================
   * ✅ BUTTON CLICK FUNCTION
   * ============================
   * This function runs when the button is clicked.
   */
  function handleClick() {
    // ✅ prev = previous value of count
    // ✅ new value = previous + 1
    setCount((prev) => prev + 1);
  }

  /**
   * ✅ JSX = HTML + JavaScript mixed together
   */
  return (
    // ✅ Dynamic background class is applied here
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundClass}`}
    >
      <div className="p-6 rounded-xl bg-white space-y-6 w-[300px] text-center shadow-xl">
        {/* ✅ Simple title */}
        <h1 className="text-xl font-bold">React Learning Demo</h1>

        {/* ========================= */}
        {/* ✅ BUTTON COMPONENT */}
        {/* ========================= */}
        {/* onClick runs handleClick function */}
        <Button onClick={handleClick}>Count is {count}</Button>

        {/* ========================= */}
        {/* ✅ SELECT DROPDOWN */}
        {/* ========================= */}
        {/* This updates selectedColor automatically */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Select Background Color</p>

          <Select onValueChange={setSelectedColor}>
            {/* ✅ Button that opens dropdown */}
            <SelectTrigger>
              <SelectValue placeholder="Choose color" />
            </SelectTrigger>

            {/* ✅ Dropdown options */}
            <SelectContent>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="slate">Slate</SelectItem>
              <SelectItem value="yellow">Yellow</SelectItem>
              <SelectItem value="purple">Purple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default App;
