import "./App.css";
//5_01
// import { useRef } from "react";

// function App() {
//   const txtTitle = useRef();
//   const txtColor = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = txtColor.current.value;
//     alert(`${title} ${color}`);
//     txtTitle.current.value = "";
//     txtColor.current.value = "";
//   };
//   return (
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder="Enter color name.." />
//       <input ref={txtColor} type="color" />
//       <button>Add</button>
//     </form>
//   );
// }

//5_02
// import { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("");
//   const [color, setColor] = useState("#000000");
//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${title} ${color}`);
//     setColor("#000000");
//     setTitle("");
//   };

//   return (
//     <form onSubmit={submit}>
//       <input
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//         type="text"
//         placeholder="Enter color name.."
//       />
//       <input
//         value={color}
//         onChange={(event) => setColor(event.target.value)}
//         type="color"
//       />
//       <button>Add</button>
//     </form>
//   );
// }

//5_03
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      },
    },
    () => setValue(initialValue),
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="Enter color name.." />
      <input {...colorProps} type="color" />
      <button>Add</button>
    </form>
  );
}

export default App;
