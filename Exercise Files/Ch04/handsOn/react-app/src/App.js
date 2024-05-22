import "./App.css";
import { useState, useEffect, useReducer } from "react";

// function App({ library }) {

//UseState..
//   const [emotion, setEmotion] = useState("Happy");
//   const [secondary, setSecondary] = useState("tired");

//UseEffect..
//   //useEffect(() => console.log(`Its ${emotion} right now.`)); // This will trigger when there is change in any of the state emotion or seconary.
//   //useEffect(() => console.log(`Its ${emotion} right now.`), []); // This trigger only once and will not change as effect does not have any dependency.
//   useEffect(() => console.log(`Its ${emotion} right now.`), [emotion]); // Will update every time there is an update in emotion.
//   useEffect(() => console.log(`Its ${secondary} right now.`), [secondary]); // Will update every time there is an update in emotion.
//   return (
//     <div className="App">
//       <h1>Hello from {library}</h1>
//       <h2>I am {emotion} today.</h2>
//       <button onClick={() => setEmotion("sad")}>sad</button>
//       <button onClick={() => setEmotion("Excited")}>Excited</button>
//       <h2>I am {secondary} today.</h2>
//       <button onClick={() => setSecondary("greatfull")}>greatfull</button>
//     </div>
//   );
// }

function App() {
  // use Reducer..
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
