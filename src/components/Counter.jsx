import { useState } from "react";

// ============================================================
// React Module: Building a Counter with useState
// Component: Counter
// ------------------------------------------------------------
// Purpose:
// This component displays a number that can be increased,
// decreased, or reset by the user.
//
// React Concepts Covered:
// • Functional Components
// • useState Hook
// • State Updates
// • Event Handling
// • Conditional Logic
// • Disabled Buttons
// ============================================================

/* function Counter() { */
  // React Topic: useState
  // count stores the current counter value.
  // setCount updates the value and causes React to re-render.
  // The counter starts from 10, as required by the exercise.
  /* const [count, setCount] = useState(10); */

  // Increases the current count by 5.
  /* function increaseCount() {
    setCount((previousCount) => previousCount + 5);
  } */

  // Decreases the current count by 5.
  // Math.max ensures that the result can never be below 0.
  /* function decreaseCount() {
    setCount((previousCount) =>
      Math.max(previousCount - 5, 0)
    );
  } */

  // Restores the counter to its original value of 10.
  /* function resetCount() {
    setCount(10);
  }

  return (
    <section className="counter">
      <h1>Counter Exercise</h1>

      {/* Displays the current state value. */
     /*  <p className="counter-value">{count}</p>

      <div className="counter-buttons"> */
        {/* Calls increaseCount when the button is clicked. */}
       /*  <button
          type="button"
          onClick={increaseCount}
        >
          Increase by 5
        </button>
 */
        {/* 
          The button is disabled when count is 0.
          This gives the user a visual indication that the
          counter cannot be reduced any further.
        */}
        {/* <button
          type="button"
          onClick={decreaseCount}
          disabled={count === 0}
        >
          Decrease by 5
        </button> */}

        {/* Returns the counter to 10. */}
        {/* <button
          type="button"
          onClick={resetCount}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

*/}

function Counter() {
  const [count, setCount] = useState(10);

  function increaseCount() {
    setCount((previousCount) => previousCount + 5);
  }

  function decreaseCount() {
    setCount((previousCount) =>
      Math.max(previousCount - 5, 0)
    );
  }

  function resetCount() {
    setCount(10);
  }

  return (
    <section>
      <h1>Counter Exercise</h1>

      {/* The counter value is placed in its own paragraph. */}
      <p>{count}</p>

      {/* The buttons are inside a separate div. */}
      <div>
        <button type="button" onClick={increaseCount}>
          Increase by 5
        </button>

        <button
          type="button"
          onClick={decreaseCount}
          disabled={count === 0}
        >
          Decrease by 5
        </button>

        <button type="button" onClick={resetCount}>
          Reset
        </button>
      </div>
    </section>
  );
}
export default Counter; 