import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Javascript + Html = JSX [[React JSX]]

// As JSX is an expression [[JS Expression]], we can use it inside of **if statements** and for loops, **assign it to variables**, **accept it as arguments**, or **return it from functions**.

function App() {
  const title = "This is my title";
  const fruits = ["apple","mango","banana","avocado"];

  // assign jsx to variables
  const heading = <h1>Heading 2</h1>;

  // return jsx from functions
  const getTitle = () => {
    return <h1>This is our title</h1>;
  };

  // accept jsx in function arguments
  const addJsx = (paragrah) => {
    return (
      <div>
        <h1>This is paragraph</h1>
        {paragrah}
      </div>
    );
  };

  // jsx can be used with if conditions
  const displayTitle = () => {
    const isAdmin = false;
    if(isAdmin) {
      return <h1>You are admin</h1>
    }
    else {
      return <h1>You are not admin</h1>
    }
  }





  return (
    <div>
      {/* we can use jsx in for loops (map function high order function) */}
      <ul>
      {
         fruits.map((fruit)=>{
          return <li>{fruit}</li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
