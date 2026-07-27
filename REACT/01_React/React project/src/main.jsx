// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { useState } from 'react'
// import App from './App.jsx'


// function App({todos}){
//   return (<ul>
//     {todos.map((todos) =>(
//       <li>
//         {todos.name} : {todos.description}
//       </li>
//     ))}
//   </ul>
//   )
// }


// let todos = [
//   {name  : "swim" , description : "good for health"},
//   {name : "code" , description : "good for future"},
// ];

// createRoot(document.getElementById('root')).render(
//     <App todos={todos}/>

// )


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      {count}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
      </div>
      
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
